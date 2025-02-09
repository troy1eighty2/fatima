import mongoose from "mongoose";
const configSchema = new mongoose.Schema(
  {
    items: [
      {
        item_id: {
          type: String,
          required: true,
          trim: true
        },
        name: {
          type: String,
          required: true,
          trim: true
        },
        quantity: {
          type: Number,
          required: true,
        },
        size: {
          type: String,
          required: true,
          trim: true
        }
      }
    ],

  },
  { timestamps: true }
)

const Config = mongoose.model("Config", configSchema);
export default Config;
