import { User } from "../models/Users.js";

export async function findUserServise(email) {
  const user = await User.findOne({
    email,
  });
  return user;
}

export async function createUserServise(body) {
  const newUser = await User.create(body);
  return newUser;
}
