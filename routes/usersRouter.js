import express from "express";

import { validateBody } from "../middlewares/index.js";
import { usersCtrl } from "../controllers/index.js";
import { addUserShema, loginUserShema } from "../schemas/usersShemas.js";

export const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(addUserShema),
  usersCtrl.registerUser
);

usersRouter.post("/login", validateBody(loginUserShema), usersCtrl.loginUser);
