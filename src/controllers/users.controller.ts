import { Response, Request } from "express";
import { TUserRequest, TUserResponse, TUserUpdate } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateUserService from "../services/users/updateUser.service";
import User from "../entities/user.entitie";
import listUserService from "../services/users/listaUsuario.service";


const createUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: TUserRequest = req.body;
    const user = await createUserService(userData);
    return res.status(201).json(user);
  };

  const listUserControllers = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const id: number = res.locals.userId
    
    const listContact = await listUserService(id);
    return res.json(listContact);
  };

const updateUserControllers = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData: TUserUpdate = req.body
    const id: number = parseInt(req.params.id)
    const newUser: TUserResponse = await updateUserService(userData, id);
    return res.json(newUser);
  };
  
  const deleteUserController  = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const user: User = res.locals.user;
    await deleteUserService(user);
    return res.status(204).send();
  }

export {
    createUserController,
    listUserControllers,
    updateUserControllers,
    deleteUserController
}