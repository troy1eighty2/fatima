import express from "express";
import Order from "../models/Order.js"

const order_router = express.Router();

order_router.get("/", async (request, response) => {
  try {
    const config = await Order.find({});
    return response.status(200).json(config)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})
order_router.post("/newOrder", async (request, response) => {
  try {
    console.log(request)

  } catch (error) {
    console.log(error)

  }

})

export default order_router;
