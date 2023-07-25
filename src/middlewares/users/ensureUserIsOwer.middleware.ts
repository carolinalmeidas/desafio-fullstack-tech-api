import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import User from "../../entities/user.entitie";

const ensureIfUserOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = parseInt(req.params.id)
  const compareId: number = parseInt(res.locals.userId)
  if(id === compareId){
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({
      id: id,
    });
    res.locals.user = findUser;
  
  }else{
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

// const ensureIfUserOwnerofContactMiddleware = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
  
// }

export default ensureIfUserOwnerMiddleware;
