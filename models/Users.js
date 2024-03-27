import { Shema, model } from "mongoose";

import { emailRegExp, subscriptionList } from "../constant";

const usersShema = new Shema({
  password: {
    type: String,
    minLength: 6,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: emailRegExp,
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptionList,
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
});

export const User = model("db-user", usersShema);
