import bcript from "bcrypt";

import {
  createUserServise,
  findUserServise,
} from "../../services/authServises.js";
import { HttpError } from "../../helpers/HttpError.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await findUserServise({ email });
  if (user) {
    throw HttpError(409, "email in use");
  }

  const hashPpassword = await bcript.hash(password, 10);

  const newUser = await createUserServise({
    ...req.body,
    password: hashPpassword,
  });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
