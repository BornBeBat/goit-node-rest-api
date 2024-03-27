import bcript from "bcrypt";

import {
  createUserServise,
  findUserServise,
} from "../../services/usersServises.js";
import { HttpError } from "../../helpers/HttpError.js";

export const registerUser = async (req, res, next) => {
  const user = await findUserServise(req.body.email);
  if (user) {
    throw HttpError(409, "email in use");
  }

  const hashPpassword = await bcript.hash(req.body.password, 10);

  const newUser = await createUserServise({
    ...req.body,
    password: hashPpassword,
  });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
