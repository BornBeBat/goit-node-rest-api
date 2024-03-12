const express = require("express");
const ctrl = require("../controllers");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");
const { validateBody } = require("../helpers/validateBody.js");
const ctrlWrapper = require("../middlewares");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrlWrapper(ctrl.getAllContacts));

contactsRouter.get("/:id", ctrlWrapper(ctrl.getOneContact));

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  ctrlWrapper(ctrl.createContact)
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

contactsRouter.delete("/:id", ctrlWrapper(ctrl.deleteContact));

module.exports = { contactsRouter };
