import bcript from "bcrypt";
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

export async function updateUserServise(id, data) {
  return User.findByIdAndUpdate(id, data);
}

export async function validatePassword(password, hashPassword) {
  return bcript.compare(password, hashPassword);
}
