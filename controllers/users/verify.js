import { HttpError } from "../../helpers/index.js";
import {
  findUserServise,
  updateUserServise,
} from "../../services/usersServises.js";

export const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await findUserServise({ verificationToken });
  if (!user) {
    throw HttpError(404);
  }
  await updateUserServise(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.json({
    message: "Email verify success",
  });
};
