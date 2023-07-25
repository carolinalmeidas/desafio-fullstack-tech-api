import { Repository } from "typeorm"
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces"
import User from "../../entities/user.entitie"
import { AppDataSource } from "../../data-source"
import Contact from "../../entities/contact.entities"
import { TContactList, TContactResponse } from "../../interfaces/contacts.interfaces"
import { contactSchemaResponse } from "../../schemas/contacts.schema"


const updateContactService = async (
    data: TUserUpdate,
    contact: TContactList
): Promise<TUserResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const newUserData: Contact = contactRepository.create({
        ...contact,
        ...data
    })
    await contactRepository.save(newUserData)
    const contactData: TContactResponse = contactSchemaResponse.parse(newUserData)
    return contactData
}

export default updateContactService