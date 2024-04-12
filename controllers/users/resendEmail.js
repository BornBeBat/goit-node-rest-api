import { HttpError, sendEmail } from "../../helpers/index.js";
import { findUserServise } from "../../services/usersServises.js";

const { BASE_URL } = process.env;

export const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await findUserServise({ email });
  if (!user) {
    throw HttpError(404);
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify you email</a>`,
  };

  await sendEmail(mail);

  res.json({ message: "Verification email sent" });
};
