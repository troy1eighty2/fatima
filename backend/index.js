import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shopRoutes from "./routes/shopRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import configRoutes from "./routes/configRoutes.js";
import PayPalRoutes from "./routes/PayPalRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import faqRoutes from "./routes/faqRoutes.js"
import multerRoutes from "./routes/multerRoutes.js"
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path";
import { SECRET_KEY } from './routes/adminRoutes.js';
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
console.log(import.meta.url)
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = path.dirname(__filename);
console.log(__dirname)

app.use(cors());
app.use(express.json());
app.use("/api/uploads", express.static(path.join(__dirname,"uploads")));
app.use('/api/shop', shopRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/config', configRoutes);
app.use('/api/PayPal', PayPalRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/multer', multerRoutes);

export function authenticateToken(req, res, next){
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  try{
    // returns error if fail
    const decoded = jwt.verify(token, SECRET_KEY);
    next();

  }catch(error){
    console.log("token verification failed");
    return res.status(403).json({ message: "Invalid or expired token" });
  }


}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to database and listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
