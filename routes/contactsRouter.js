import express from "express";
import {
  createContactSchema,
  updateContactSchema,
  updateContactStatusSchema,
} from "../schemas/contactsSchemas.js";
import { authenticate, validateBody } from "../middlewares/index.js";
import { contactsCtrl } from "../controllers/index.js";

export const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, contactsCtrl.getAllContacts);

contactsRouter.get("/:id", authenticate, contactsCtrl.getOneContact);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(createContactSchema),
  contactsCtrl.createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  validateBody(updateContactSchema),
  contactsCtrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  validateBody(updateContactStatusSchema),
  contactsCtrl.updateContactStatus
);

contactsRouter.delete("/:id", authenticate, contactsCtrl.deleteContact);
