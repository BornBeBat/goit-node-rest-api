import { updateContactServises } from "../../services/contactsServices.js";
import { HttpError } from "../../helpers/HttpError.js";

export const updateContactStatus = async (req, res, next) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const data = await updateContactServises({ _id: id, owner }, req.body);
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
