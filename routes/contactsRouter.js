import express from "express";
import {
  createContactSchema,
  updateContactSchema,
  updateContactStatusSchema,
} from "../schemas/contactsSchemas.js";
import { validateBody } from "../middlewares/index.js";
import { contactsCtrl } from "../controllers/index.js";

export const contactsRouter = express.Router();

contactsRouter.get("/", contactsCtrl.getAllContacts);

contactsRouter.get("/:id", contactsCtrl.getOneContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  contactsCtrl.createContact
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  contactsCtrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateContactStatusSchema),
  contactsCtrl.updateContactStatus
);

contactsRouter.delete("/:id", contactsCtrl.deleteContact);
