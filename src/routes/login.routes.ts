import { Router } from "express";
import ensureDataIsValidMiddlewares from "../middlewares/ensureDataIsValid.middleware";
import { loginRequestSchema } from "../schemas/login.schema";
import { createTokenController } from "../controllers/login.controller";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddlewares(loginRequestSchema),
  createTokenController
);

export { loginRoutes };
