import express from "express";
import cors from "cors";
import Product from "../models/Product.js"
import Cart from "../models/Order.js"

const cart_router = express.Router();

cart_router.get("/", async (request, response) => {
  try {
    const cart = await Cart.find({});
    return response.status(200).json(cart)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

export default cart_router
