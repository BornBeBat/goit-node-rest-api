// data base password ---> cxoUV4qvAwCDYIFU
// DB_HOST = mongodb+srv://Bat:cxoUV4qvAwCDYIFU@contacts.ajnjhcd.mongodb.net/contacts_reader?retryWrites=true&w=majority&appName=contacts
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { contactsRouter, usersRouter } from "./routes/index.js";

const { DB_HOST, PORT = 3000 } = process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use("api/users", usersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({
    status: "error",
    code: status,
    message,
  });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
