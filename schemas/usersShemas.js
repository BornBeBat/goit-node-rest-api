import Joi from "joi";

import { emailRegExp, subscriptionList } from "../constant/index.js";

export const addUserShema = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().required().pattern(emailRegExp),
  subscription: Joi.string().valid(...subscriptionList),
});
