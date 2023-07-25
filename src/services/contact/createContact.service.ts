import { DeepPartial, Repository } from "typeorm";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contacts.schema";


const createContactService = async (data: TContactRequest, userId: any): Promise<TContactResponse> => {
    const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const newContact = {
        ...data,
        user: userId
    };
    const contact = contactRespository.create(newContact)
    await contactRespository.save(contact)
    const newContactSave = contactSchemaResponse.parse(contact)
    return newContactSave
}
export {
    createContactService
}