import { Response, Request } from "express";
import { TContactRequest, TContactResponse, TContactUpdate } from "../interfaces/contacts.interfaces";
import { createContactService } from "../services/contact/createContact.service";
import listAllContactsService from "../services/contact/listContact.service";
import listContactService from "../services/contact/listContactByID.service";
import updateContactService from "../services/contact/updateContact.service";
import Contact from "../entities/contact.entities";
import deleteContactService from "../services/contact/deleteContatc.service";


const createContactControllers = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const contactData: TContactRequest = req.body;
    const id: number = parseInt(res.locals.userId)
    const contact = await createContactService(contactData, id);
    return res.status(201).json(contact);
};

const listContactsControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = res.locals.contact
  const listContacts = await listAllContactsService(contacts);
  return res.json(listContacts);
};

const listOneContactControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = res.locals.userId
  const contatcId: number = parseInt(req.params.id)
  const listContacts = await listContactService(id, contatcId);
  return res.json(listContacts);
};


const updateUserControllers = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const contactData: TContactUpdate = req.body
    const contact = res.locals.contact
    const newUser: TContactResponse = await updateContactService(contactData, contact);
    return res.json(newUser);
  };
  
  const deleteContactController  = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const contact: Contact = res.locals.contact;
    await deleteContactService(contact);
    return res.status(204).send();
  }

export {
    createContactControllers,
    listContactsControllers,
    listOneContactControllers,
    updateUserControllers,
    deleteContactController
}