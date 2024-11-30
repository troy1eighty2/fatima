import mongoose from "mongoose";

const shopEntry = new mongoose.Schema({
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
  pictures: [
    {
      url: {
        type: String,
        required: true
      },
    }
  ],
  stock: {
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

}, {
  timestamps: true
});


