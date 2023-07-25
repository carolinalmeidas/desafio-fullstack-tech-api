import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import User from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensurePhoneExistMiddlewareUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const phone: string = req.body.phone;
  if(phone){
    const userRespository: Repository<User> = AppDataSource.getRepository(User);
    const foundPhone = await userRespository.findOneBy({
      phone: phone
    });
    if (foundPhone) {
      throw new AppError("Phone already exists", 409);
    }
  }
  return next();
};

// const ensurePhoneExistMiddlewareContact = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//     const phone: string = req.body.phone;
//     if(phone){
//       const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact);
//       const foundPhone = await contactRespository.findOneBy({
//         phone: phone
//       });
//       if (foundPhone) {
//         throw new AppError("Phone already exists", 409);
//       }
//     }
//     return next();
// };

export default ensurePhoneExistMiddlewareUser
