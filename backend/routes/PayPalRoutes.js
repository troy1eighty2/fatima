import express from "express";
import cors from "cors";

const PayPal_router = express.Router();

PayPal_router.post("/create-paypal-order", async (request, response) => {
  try {
    // const cart = await Cart.find({});
    // return response.status(200).json(cart)
  } catch (error) {
    console.log(error)
    // return response.status(500).json({ error: "server error" });
  }
})

export default PayPal_router
