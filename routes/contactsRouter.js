const express = require("express");
const ctrl = require("../controllers");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");
const { validateBody } = require("../helpers/validateBody.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getOneContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrl.updateContact
);

contactsRouter.delete("/:id", ctrl.deleteContact);

module.exports = { contactsRouter };
