import express from "express";

import { validateBody, authenticate, upload } from "../middlewares/index.js";
import { usersCtrl } from "../controllers/index.js";
import {
  addUserShema,
  loginUserShema,
  subscriptionUpdateShema,
  verifyEmailSchema,
} from "../schemas/usersShemas.js";

export const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(addUserShema),
  usersCtrl.registerUser
);

usersRouter.get("/verify/:verificationToken", usersCtrl.verify);
usersRouter.post(
  "/verify",
  validateBody(verifyEmailSchema),
  usersCtrl.resendEmail
);

usersRouter.post("/login", validateBody(loginUserShema), usersCtrl.loginUser);
usersRouter.post("/logout", authenticate, usersCtrl.logoutUser);
usersRouter.post("/current", authenticate, usersCtrl.getCurrent);

usersRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionUpdateShema),
  usersCtrl.subscriptionUpdate
);

usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersCtrl.updateAvatar
);
