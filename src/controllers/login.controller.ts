import { Request, Response } from "express";
import { TLoginRequest, TLoginResponse } from "../interfaces/login.interfaces";
import createTokenService from "../services/users/createToken.service";

const createTokenController = async (req: Request, res: Response): Promise<Response> => {
    const loginData: TLoginRequest = req.body
    const token: TLoginResponse = await createTokenService(loginData)
    return res.status(200).json(token)
}
export { createTokenController }