import jwt from "jwt";
import express from "express";
import dotenv from "dotenv";

dotenv.config()

const admin_router = express.Router();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;

admin_router.post(("/", (req, res) => {
  try {

    const { password } = req.body;
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({}, SECRET_KEY, { expiresIn: "1hr" });

    return res.json({ token });

  } catch (error) {
    console.log(error)
    return res.status(400).json(error)

  }

}))
export default admin_router;
