import { registerUser } from "./registerUser.js";
import { loginUser } from "./loginUser.js";
import { logoutUser } from "./logoutUser.js";
import { getCurrent } from "./getCurrent.js";
import { subscriptionUpdate } from "./subscriptionUpdate.js";

import { ctrlWrapper } from "../../decorators/ctrlWrapper.js";

export const usersCtrl = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  logoutUser: ctrlWrapper(logoutUser),
  getCurrent: ctrlWrapper(getCurrent),
  subscriptionUpdate: ctrlWrapper(subscriptionUpdate),
};
