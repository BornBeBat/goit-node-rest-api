import { removeContact } from "../../services/contactsServices.js";
import { HttpError } from "../../helpers/HttpError.js";

export const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const data = await removeContact({ _id: id, owner });
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
