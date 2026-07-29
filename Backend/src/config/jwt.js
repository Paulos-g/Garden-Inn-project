import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // to make the env key work here

export const generateToken = (userId) => {
  // used as parameter to pass it later.
  return jwt.sign({ id: userId }, process.env.JWT_SECRETE, { expiresIn: "3d" }); // the expiration period
};
