import nodemailer from "nodemailer";

const { META_PASSWORD, BASE_URL } = process.env;

const nodemailConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: "BeBatTest@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailConfig);

export const sendEmail = async (data) => {
  const mail = { ...data, from: "BeBatTest@meta.ua" };

  await transport.sendMail(mail);
};
