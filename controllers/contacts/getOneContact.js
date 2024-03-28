import { HttpError } from "../../helpers/HttpError.js";
import { getContactById } from "../../services/contactsServices.js";

export const getOneContact = async (req, res, next) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const data = await getContactById({ _id: id, owner });
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
