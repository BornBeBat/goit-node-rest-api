import { HttpError } from "../../helpers/HttpError.js";
import { getContactById } from "../../services/contactsServices.js";

export const getOneContact = async (req, res, next) => {
  const data = await getContactById(req.params.id);
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
