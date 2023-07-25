import { Repository } from "typeorm"
import { TContactList } from "../../interfaces/contacts.interfaces"
import Contact from "../../entities/contact.entities"
import { AppDataSource } from "../../data-source"
import { listContactSchemaResponse } from "../../schemas/contacts.schema"
import User from "../../entities/user.entitie"
import { TUserResponse } from "../../interfaces/users.interfaces"

const listAllContactsService = async(contacts: TContactList): Promise<TContactList> => {
    const allContacts = listContactSchemaResponse.parse(contacts)
    return allContacts
}
export default listAllContactsService