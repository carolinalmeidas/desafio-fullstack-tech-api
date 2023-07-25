import { NextFunction, Request, Response } from "express";
import User from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";


const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = parseInt(req.params.id);
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  res.locals.user = findUser;
  return next();
};

// const ensureIdExistsMiddlewareContact = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const contactId: number = parseInt(req.params.id);
//   const contactRepository = AppDataSource.getRepository(Contact);
//   const findContact = await contactRepository.findOneBy({
//     id: contactId,
//   });
//   if (!findContact) {
//     throw new AppError("User not found", 404);
//   }
//   res.locals.contact = findContact;
//   return next();
// };

export default ensureIdExistsMiddleware
