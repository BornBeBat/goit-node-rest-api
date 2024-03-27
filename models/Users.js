import { Shema, model } from "mongoose";

import { subscriptionList } from "../constant";

const usersShema = new Shema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
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
