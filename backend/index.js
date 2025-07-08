import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shopRoutes from "./routes/shopRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import configRoutes from "./routes/configRoutes.js";
import PayPalRoutes from "./routes/PayPalRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import cors from "cors";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from './routes/adminRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/shop', shopRoutes);
app.use('/order', orderRoutes);
app.use('/config', configRoutes);
app.use('/PayPal', PayPalRoutes);
app.use('/admin', adminRoutes);

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
