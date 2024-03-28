import { registerUser } from "./registerUser.js";
import { loginUser } from "./loginUser.js";

import { ctrlWrapper } from "../../decorators/ctrlWrapper.js";

export const usersCtrl = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
};
