import Jimp from "jimp";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { updateUserServise } from "../../services/usersServises.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

export const updateAvatar = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const extention = originalname.split(".").pop();
  const filename = `${userId}.${extention}`;

  const resultUpload = path.join(avatarsDir, filename);

  const jimpFile = await Jimp.read(tmpUpload);
  jimpFile.resize(250, 250).write(resultUpload);

  const avatarURL = path.join("avatars", filename);

  await updateUserServise(userId, { avatarURL });

  res.json({
    avatarURL,
  });
};
