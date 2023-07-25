import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Contact from "../../entities/contact.entities";

const ensureIdExistsMiddlewareContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactId: number = parseInt(req.params.id);
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }
  res.locals.contact = findContact;
  return next();
};

export default ensureIdExistsMiddlewareContact
