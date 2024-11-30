import mongoose from "mongoose";

const homeRightEntry = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
