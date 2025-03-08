import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  pictures: [
    {
      url: {
        type: String,
        required: true
      },
    }
  ],
  stock: {
    xs: {
      type: Number,
      required: true,
      min: 0
    },
    s: {
      type: Number,
      required: true,
      min: 0
    },
    m: {
      type: Number,
      required: true,
      min: 0
    },
    l: {
      type: Number,
      required: true,
      min: 0
    },
    xl: {
      type: Number,
      required: true,
      min: 0
    },
    xxl: {
      type: Number,
      required: true,
      min: 0
    }
  },
  newProduct: {
    type: Boolean,
    required: true
  }

}, {
  timestamps: true
});


const Product = mongoose.model("Product", productSchema);
export default Product;
