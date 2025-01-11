import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
      trim: true
    },
    items: [
      {
        item_id: {
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

const Order = mongoose.model("Order", orderSchema);
export default Order;
