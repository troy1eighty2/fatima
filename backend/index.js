import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import shopRoutes from "./routes/shopRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/shop', shopRoutes);
app.use('/cart', cartRoutes);

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
