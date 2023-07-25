import { Router } from "express";
import {
  contactSchemaRequest,
  updateContactSchema,
} from "../schemas/contacts.schema";
import {
  createContactControllers,
  deleteContactController,
  listContactsControllers,
  listOneContactControllers,
  updateUserControllers,
} from "../controllers/contact.controller";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddlewares from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistMiddlewareContact, ensureIdExistsMiddlewareContact, ensureIfUserOwnerofContactAllMiddleware, ensureIfUserOwnerofContactOneMiddleware, ensurePhoneExistMiddlewareContact } from "../middlewares/contacts";
import { ensureIfUserOwnerMiddleware } from "../middlewares/users";


const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddlewares(contactSchemaRequest),
  ensureEmailExistMiddlewareContact,
  ensurePhoneExistMiddlewareContact,
  createContactControllers
);

contactRoutes.get("", ensureTokenIsValidMiddleware, ensureIfUserOwnerofContactAllMiddleware,listContactsControllers);
contactRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIfUserOwnerofContactOneMiddleware,
  ensureIdExistsMiddlewareContact,
  listOneContactControllers
);

contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIfUserOwnerofContactOneMiddleware,
  ensureIdExistsMiddlewareContact,
  ensureDataIsValidMiddlewares(updateContactSchema),
  ensureEmailExistMiddlewareContact,
  ensurePhoneExistMiddlewareContact,
  updateUserControllers
);

contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIfUserOwnerofContactOneMiddleware,
  ensureIdExistsMiddlewareContact,
  deleteContactController
);

export { contactRoutes };
