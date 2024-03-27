import { registerUser } from "./registerUser.js";

import { ctrlWrapper } from "../../decorators/ctrlWrapper.js";

export const usersCtrl = {
  registerUser: ctrlWrapper(registerUser),
};
