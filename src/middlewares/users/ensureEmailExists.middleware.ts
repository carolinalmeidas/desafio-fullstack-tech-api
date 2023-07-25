import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entitie";
import { AppError } from "../../error";


const ensureEmailExistMiddlewareUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const email: string = req.body.email;
  if(email){
    const userRespository: Repository<User> = AppDataSource.getRepository(User);
    const foundUser = await userRespository.findOneBy({
      email: email
    });
    if (foundUser) {
      throw new AppError("Email already exists", 409);
    }
  }
  return next()
};

// const ensureEmailExistMiddlewareContact = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const email: string = req.body.email;
//   if(email){
//     const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact);
//     const foundContact = await contactRespository.findOneBy({
//       email: email
//     });
//     if (foundContact) {
//       throw new AppError("Email already exists", 409);
//     }
//   }
//   return next();
// };

export default ensureEmailExistMiddlewareUser
