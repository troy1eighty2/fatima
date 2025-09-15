import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

const multer_router = express.Router();
const uploads = multer({dest:'uploads/'})

multer_router.post("/", uploads.array("files"), async(req, res)=>{
  try{
    for (const item of req.files){
      item.static_hosting_link = `${process.env.API_URL}/uploads/${item.filename}`;
    }
    return res.status(200).json(req.files)

  }catch(error) {
    console.log(error)
  }
})

export default multer_router;
