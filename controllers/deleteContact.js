const { removeContact } = require("../services/contactsServices.js");
const { HttpError } = require("../helpers/HttpError.js");

const deleteContact = async (req, res, next) => {
  const data = await removeContact(req.params.id);
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

module.exports = deleteContact;
