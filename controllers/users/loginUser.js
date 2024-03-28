import jwt from "jsonwebtoken";
import {
  findUserServise,
  updateUserServise,
  validatePassword,
} from "../../services/usersServises.js";
import { HttpError } from "../../helpers/HttpError.js";

const { JWT_SECRET } = process.env;

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserServise({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const comparePassword = await validatePassword(password, user.password);

  if (!comparePassword) {
    throw HttpError(401, "Email or password is wrong");
  }

  const { _id: id } = user;
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "1h" });
  await updateUserServise({ _id: id }, { token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};
