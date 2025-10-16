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
router.put("/put/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Product.findByIdAndUpdate(id, request.body, { new: true })
    return response.status(200).json(result)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: error });
  }

})
router.post("/post", async (request, response) => {
  try {
    const item = request.body
    const newProduct = {
      _id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      pictures: item.pictures,
      stock: item.stock,
      newProduct: item.newProduct
    }
    const productInstance = new Product(newProduct)
    await productInstance.save()
    return response.json(newProduct)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "post shop error" });
  }

})
router.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params
    const result = await Product.findByIdAndDelete(id)
    return response.status(200).json(result)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "delete shop error" });
  }
})
router.patch("/patch/:id", async (request, response) => {
  try {
    const { id } = request.params
    // new:true returns updated product
    const updatedProduct = await Product.findByIdAndUpdate(id, request.body, {new:true})
    response.json(updatedProduct);
  } catch (error) {
    console.log("patch error")
  }

})

export default router;
