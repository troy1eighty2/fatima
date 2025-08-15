import mongoose from "mongoose";
const faqSchema = new mongoose.Schema(
  {
    faqs: [
      {
        question:{
          type: String,
          required:false
        },
        answer:{
          type: String,
          required: false
        },
        temp_id:{
          type: String,
          required: false
        }
      }
    ],
  },
  { timestamps: true }
)

const Faq = mongoose.model("Faq", faqSchema);
export default Faq;
