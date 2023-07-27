import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/users.interfaces";
import User from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";


const listUserService = async(id: number): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    console.log(id)
    const user = await userRepository.findOneBy({
        id: id
    })
    console.log(user)
    const userResonse = userSchemaResponse.parse(user)
    return userResonse
}
export default listUserService
