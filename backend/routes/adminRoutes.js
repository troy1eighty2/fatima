import jwt from "jsonwebtoken"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const admin_router = express.Router();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
export const SECRET_KEY = process.env.JWT_SECRET;

admin_router.post("/", async (req, res) => {
  try {
    const { password } = req.body;
    console.log(password)
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({}, SECRET_KEY, { expiresIn: "1hr" });

    return res.json({ token });

  } catch (error) {
    console.log(error)
    return res.status(400).json(error)

  }

})
admin_router.get("/verify", async (req, res) => {

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {

      return res.status(400).json({ message: "Error: No token provided" })
    };
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: "Valid token" })


  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
})

export default admin_router;
