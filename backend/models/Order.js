import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    create_time: String,
    update_time: String,
    purchase_units: [
      {
        items: [
          {
            name: { type: String, required: true },
            quantity: { type: String, required: true },
            unit_amount:
            {
              currency_code: { type: String, required: true },
              value: { type: String, required: true }
            }
          }
        ],

      }
    ],
    payer:
    {
      email_address: String,
      name:
      {
        given_name: String,
        surname: String
      }
      ,
      address:
      {
        address_line_1: String,
        address_line_2: String,
        admin_area_2: String,
        admin_area_1: String,
        postal_code: String,
        country_code: String,
      }
    },
    status: { type: String, required: true }
  }
)

const Order = mongoose.model("Order", orderSchema);
export default Order;
