import { updateUserServise } from "../../services/usersServises.js";

export const logoutUser = async (req, res, next) => {
  const { _id: id } = req.user;
  updateUserServise(id, { token: null });

  res.status(204).json();
};
