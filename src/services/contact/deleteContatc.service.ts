import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";

const deleteContactService = async (contact: Contact): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    await contactRepository.remove(contact)
}

export default deleteContactService