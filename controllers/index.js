import { getAllContacts } from "./getAllContacts.js";
import { getOneContact } from "./getOneContact.js";
import { createContact } from "./createContact.js";
import { updateContact } from "./updateContact.js";
import { deleteContact } from "./deleteContact.js";

import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
};
