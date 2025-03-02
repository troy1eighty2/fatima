import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {

    id: String,
    create_time: String,
    update_time: String,
    purchase_units: [
      {
        amount: {

          currency_code: String,
          value: String,
          breakdown: {
            item_total: {
              currency_code: String,
              value: String
            },
            shipping: {
              currency_code: String,
              value: String
            },
            tax_total: {
              currency_code: String,
              value: String
            },
          }
        },
        items: [
          {
            name: { type: String, required: true },
            quantity: { type: String, required: true },
          }
        ],
        shipping: {
          address: {
            address_line_1: String,
            admin_area_1: String,
            admin_area_2: String,
            country_code: String,
            postal_code: String,
          }
        }
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
    },
    status: { type: String, required: true }
  }
)

const Order = mongoose.model("Order", orderSchema);
export default Order;
