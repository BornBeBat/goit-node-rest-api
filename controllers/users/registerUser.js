import bcript from "bcrypt";
import gravatar from "gravatar";

import {
  createUserServise,
  findUserServise,
} from "../../services/usersServises.js";
import { HttpError } from "../../helpers/HttpError.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await findUserServise({ email });
  if (user) {
    throw HttpError(409, "email in use");
  }

  const hashPpassword = await bcript.hash(password, 10);
  const avatarURL = gravatar.url(email, { s: "350", r: "pg", d: "robohash" });
  const newUser = await createUserServise({
    ...req.body,
    password: hashPpassword,
    avatarURL,
  });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
