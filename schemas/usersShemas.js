import Joi from "joi";

import { emailRegExp, subscriptionList } from "../constant/index.js";

export const addUserShema = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().pattern(emailRegExp).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

export const loginUserShema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
});

export const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegExp)
    .required()
    .messages({ "any.required": "missing required field email" }),
});

export const subscriptionUpdateShema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});
