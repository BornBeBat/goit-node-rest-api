import { updateUserServise } from "../../services/usersServises.js";

export const subscriptionUpdate = async (req, res, next) => {
  const { _id: id, email } = req.user;
  const { subscription } = req.body;
  updateUserServise(id, { subscription });

  res.json({
    email,
    subscription,
  });
};
