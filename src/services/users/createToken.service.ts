import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../../entities/user.entitie";
import { TLoginRequest, TLoginResponse } from "../../interfaces/login.interfaces";


const createTokenService = async (
  loginData: TLoginRequest
): Promise<TLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }
  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      name: user.name,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: user.id.toString(),
    }
  );

  return { token };
};

export default createTokenService;
