import { Repository } from "typeorm"
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces"
import User from "../../entities/user.entitie"
import { AppDataSource } from "../../data-source"
import { userSchemaResponse } from "../../schemas/users.schema"
import { AppError } from "../../error"


const updateUserService = async (
    data: TUserUpdate,
    id: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const oldUserData: User | null = await userRepository.findOneBy({
        id: id,
    })
    const newUserData: User = userRepository.create({
        ...oldUserData,
        ...data
    })
    await userRepository.save(newUserData)
    const userData: TUserResponse = userSchemaResponse.parse(newUserData)
    return userData
}

export default updateUserService