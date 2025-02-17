import express from "express";
import cors from "cors";
import Config from "../models/Config.js"

const config_router = express.Router();

config_router.get("/", async (request, response) => {
  try {
    const config = await Config.find({});
    console.log(response)
    return response.status(200).json(config)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

export default config_router
