import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserControllers,
  updateUserControllers,
} from "../controllers/users.controller";
import { updateUserSchema, userSchemaRequest } from "../schemas/users.schema";
import ensureDataIsValidMiddlewares from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistMiddlewareUser, ensureIdExistsMiddleware, ensureIfUserOwnerMiddleware, ensurePhoneExistMiddlewareUser } from "../middlewares/users";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddlewares(userSchemaRequest),
  ensureEmailExistMiddlewareUser,
  ensurePhoneExistMiddlewareUser,
  createUserController
);

userRoutes.get("", ensureTokenIsValidMiddleware, listUserControllers )

userRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIfUserOwnerMiddleware,
  ensureDataIsValidMiddlewares(updateUserSchema),
  ensureIdExistsMiddleware,
  updateUserControllers
);

userRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIfUserOwnerMiddleware,
  ensureIdExistsMiddleware,
  deleteUserController
);

export { userRoutes };
