import express from "express";
import cors from "cors";
import Faq from "../models/Faq.js"
import {authenticateToken} from '../index.js'

const faq_router = express.Router();

faq_router.get("/", async (request, response) => {
  try {
    const faqs = await Faq.findOne();
    if (!faqs){
      const newForm = {
        faqs:[]
      }
      const productInstance = new Faq(newForm)
      const savedFaq = await productInstance.save()
      return response.status(200).json(savedFaq)
    }
    return response.status(200).json(faqs)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "error with faqs" });
  }
})
faq_router.put("/put/:id", authenticateToken, async (request, response) => {
  try {
    console.log(request)
    const result = await Faq.findByIdAndUpdate(request.params.id, {faqs:request.body.faqs})
    response.status(200).json(result);
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "put error" });
  }
})
export default faq_router;
