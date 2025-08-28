import express from "express"
import dotenv from "dotenv"
import axios from "axios"

dotenv.config()

const web3_router = express.Router();
const WEB3_ACCESS_KEY = process.env.WEB3_FORMS_ACCESS_KEY;

web3_router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const response = await axios.post("https://api.web3forms.com/submit", {...req.body, access_key:WEB3_ACCESS_KEY})
    return res.status(200).json(response.data)

  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
})

export default web3_router;
