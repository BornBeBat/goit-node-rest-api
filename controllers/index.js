const getAllContacts = require("./getAllContacts");
const getOneContact = require("./getOneContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact");
const deleteContact = require("./deleteContact");
const ctrlWrapper = require("../middlewares/ctrlWrapper");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
};
