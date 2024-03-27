import express from "express";

import { validateBody } from "../middlewares/index.js";
import { contactsCtrl } from "../controllers/index.js";

export const usersRouter = express.Router();
