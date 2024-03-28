import { addContact } from "../../services/contactsServices.js";

import { HttpError } from "../../helpers/HttpError.js";

export const createContact = async (req, res, next) => {
  const { _id: owner } = req.user;

  const data = await addContact({ ...req.body, owner });
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
