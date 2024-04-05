import mongoose from "mongoose";
import bcrypt from "bcrypt";
import request from "supertest";

import { app } from "../app";

import { User } from "../models/User.js";

const { DB_HOST_TEST } = process.env;
const PORT = 3001;

describe("test routes", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  beforeEach(() => {});

  afterEach(async () => {
    await User.deleteMany({});
  });

  test("test login route", async () => {
    const password = await bcrypt.hash("123456", 10);

    const newUser = {
      name: "Bat",
      email: "Bat@gmail.com",
      password: password,
    };

    const user = await User.create(newUser);

    const loginUser = {
      email: "Bat@gmail.com",
      password: "123456",
    };

    const res = await request(app).post("/api/users/login").send(loginUser);

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeTruthy();
    expect(res.body.user.email).toBeTruthy();
    expect(typeof res.body.user.email).toBe("string");
    expect(res.body.user.subscription).toBeTruthy();
    expect(typeof res.body.user.subscription).toBe("string");
    const { token } = await User.findById(user._id);
    expect(res.body.token).toBe(token);
  });
});
