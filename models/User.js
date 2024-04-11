import { Schema, model } from "mongoose";

import { emailRegExp, subscriptionList } from "../constant/index.js";

const userShema = new Schema(
  {
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
    avatarURL: { type: String },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

export const User = model("db-user", userShema);
