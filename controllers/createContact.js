const { addContact } = require("../services/contactsServices.js");

const { HttpError } = require("../helpers/HttpError.js");

const createContact = async (req, res, next) => {
  const data = await addContact(req.body);
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

module.exports = createContact;
