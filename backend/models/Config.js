import mongoose from "mongoose";
const configSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    gif: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    homeRightPictures: [
      {
        type: String,
        required: true
      }
    ],
    testimonials: [
      {
        text: {

          type: String,
          required: true
        },
        author: {
          type: String,
          required: true
        }
      }

    ],
  },
  { timestamps: true }
)

const Config = mongoose.model("Config", configSchema);
export default Config;
