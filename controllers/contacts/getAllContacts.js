import { listContacts } from "../../services/contactsServices.js";

export const getAllContacts = async (req, res, next) => {
  const data = await listContacts();

  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};
