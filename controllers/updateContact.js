const {
  updateContact: updateContactServises,
} = require("../services/contactsServices.js");

const { HttpError } = require("../helpers/HttpError.js");

const updateContact = async (req, res, next) => {
  const data = await updateContactServises(req.params.id, req.body);
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

module.exports = updateContact;
