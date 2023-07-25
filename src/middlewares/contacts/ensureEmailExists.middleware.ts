import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Contact from "../../entities/contact.entities";


const ensureEmailExistMiddlewareContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const email: string = req.body.email;
  if(email){
    const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact);
    const foundContact = await contactRespository.findOneBy({
      email: email
    });
    if (foundContact) {
      throw new AppError("Email already exists", 409);
    }
  }
  return next();
};

export default ensureEmailExistMiddlewareContact
