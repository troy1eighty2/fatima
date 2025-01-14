import express from "express";
import cors from "cors";
import Product from "../models/Product.js"
import Order from "../models/Order.js"

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const shop = await Product.find({});
    return response.status(200).json(shop)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const item = await Product.findById(id)
    return response.status(200).json(item)

  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });

  }
})

export default router;
