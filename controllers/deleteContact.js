import { removeContact } from "../services/contactsServices.js";
import { HttpError } from "../helpers/HttpError.js";

export const deleteContact = async (req, res, next) => {
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
