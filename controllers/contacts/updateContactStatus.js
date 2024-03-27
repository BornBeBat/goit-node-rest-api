import { updateContactServises } from "../../services/contactsServices.js";
import { HttpError } from "../../helpers/HttpError.js";

export const updateContactStatus = async (req, res, next) => {
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
