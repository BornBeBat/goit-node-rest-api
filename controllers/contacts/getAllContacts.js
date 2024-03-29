import { listContacts } from "../../services/contactsServices.js";

export const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 5, favorite } = req.query;
  const skip = (page - 1) * limit;
  const filter = { owner };
  if (favorite !== undefined) {
    filter.favorite = favorite === "true";
  }
  const data = await listContacts(filter, { skip, limit });

  res.json({
    status: "success",
    code: "200",
    data: {
      result: data,
    },
  });
};
