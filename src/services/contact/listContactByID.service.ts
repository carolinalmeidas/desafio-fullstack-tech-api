import { Repository } from "typeorm"
import {TContactResponse } from "../../interfaces/contacts.interfaces"
import Contact from "../../entities/contact.entities"
import { AppDataSource } from "../../data-source"
import { contactSchemaResponse } from "../../schemas/contacts.schema"
import User from "../../entities/user.entitie"

const listContactService = async(id: number, idContact: number): Promise<TContactResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const user = await userRepository.findOneBy({
        id: id
    })
    const userId = user?.id;
    const contact = await contactRepository.findOneBy({
        user:{id: userId || 0},
        id: idContact
    })
    const oneContact = contactSchemaResponse.parse(contact)
    return oneContact
}
export default listContactService