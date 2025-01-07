import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shopRoutes from "./routes/shopRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use('/shop', shopRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to database and listening on port 3000")
    })
  })
  .catch((error) => {
    console.log(error)
  })
