import express from "express";
import {
  createContactSchema,
  updateContactSchema,
  updateContactStatusSchema,
} from "../schemas/contactsSchemas.js";
import { validateBody } from "../middlewares/index.js";
import ctrl from "../controllers/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getOneContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateContactStatusSchema),
  ctrl.updateContactStatus
);

contactsRouter.delete("/:id", ctrl.deleteContact);

export default contactsRouter;
