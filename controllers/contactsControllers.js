const contactsService = require("../services/contactsServices.js");

const { HttpError } = require("../helpers/HttpError.js");

const getAllContacts = async (req, res, next) => {
  const data = await contactsService.listContacts();

  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};

const getOneContact = async (req, res, next) => {
  const data = await contactsService.getContactById(req.params.id);
  if (!data) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};

const createContact = async (req, res, next) => {
  const data = await contactsService.addContact(req.body);
  if (!data) {
    throw HttpError(404);
  }
  res.status(201).json({
    status: "success",
    code: "201",
    data: {
      result: data,
    },
  });
};

const updateContact = async (req, res, next) => {
  const data = await contactsService.updateContact(req.params.id, req.body);
  if (!data) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};

const deleteContact = async (req, res, next) => {
  const data = await contactsService.removeContact(req.params.id);
  if (!data) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
};
