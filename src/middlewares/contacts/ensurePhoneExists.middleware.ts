import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Contact from "../../entities/contact.entities";

const ensurePhoneExistMiddlewareContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    const phone: string = req.body.phone;
    if(phone){
      const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact);
      const foundPhone = await contactRespository.findOneBy({
        phone: phone
      });
      if (foundPhone) {
        throw new AppError("Phone already exists", 409);
      }
    }
    return next();
};

export default ensurePhoneExistMiddlewareContact
