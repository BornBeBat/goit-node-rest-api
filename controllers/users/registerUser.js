import bcript from "bcrypt";
import gravatar from "gravatar";
import { randomUUID } from "crypto";

const { BASE_URL } = process.env;

import {
  createUserServise,
  findUserServise,
} from "../../services/usersServises.js";

import { HttpError, sendEmail } from "../../helpers/index.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await findUserServise({ email });
  if (user) {
    throw HttpError(409, "email in use");
  }

  const hashPpassword = await bcript.hash(password, 10);
  const avatarURL = gravatar.url(email, { s: "350", r: "pg", d: "robohash" });
  const verificationToken = randomUUID();

  const newUser = await createUserServise({
    ...req.body,
    password: hashPpassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify you email</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};
