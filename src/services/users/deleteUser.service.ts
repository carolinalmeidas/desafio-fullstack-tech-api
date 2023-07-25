import User from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";

const deleteUserService = async (user: User): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.remove(user)
}

export default deleteUserService