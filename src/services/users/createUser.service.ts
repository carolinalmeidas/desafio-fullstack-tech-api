import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import User from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const userRespository: Repository<User> = AppDataSource.getRepository(User)
    const user = userRespository.create(data)
    await userRespository.save(user)
    const newUser = userSchemaResponse.parse(user)
    return newUser
}
export {
    createUserService
}