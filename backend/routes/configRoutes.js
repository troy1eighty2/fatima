import express from "express";
import cors from "cors";
import Config from "../models/Config.js"
import {authenticateToken} from '../index.js'

const config_router = express.Router();

config_router.get("/", async (request, response) => {
  try {
    const config = await Config.find({});
    return response.status(200).json(config)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

config_router.put("/put", authenticateToken, async (request, response) => {
  try {
    const result = await Config.findByIdAndUpdate(request.body._id, request.body, { new: true })
    return response.status(200).json(result)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "put error" });
  }
})
export default config_router
