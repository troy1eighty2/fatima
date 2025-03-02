import express from "express";
import Order from "../models/Order.js";

const order_router = express.Router();

order_router.get("/", async (request, response) => {
  try {
    const config = await Order.find({});
    return response.status(200).json(config)
  } catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

order_router.post("/post", async (request, response) => {

  try {
    const onApproveResponse = request.body.onApproveResponse
    const originalOrder = request.body.originalOrder
    const itemsFromOriginalOrder = originalOrder.purchase_units[0].items.map((item) => ({
      name: item.name,
      quantity: item.quantity
    }))


    const newOrder = {
      id: originalOrder.id,
      create_time: originalOrder.create_time,
      update_time: originalOrder.update_time,
      purchase_units:
        [{
          amount: {

            breakdown: {
              item_total: {
                currency_code: originalOrder.purchase_units[0].amount.breakdown.item_total.currency_code,
                value: originalOrder.purchase_units[0].amount.breakdown.item_total.value
              }
            }
          },
          items: itemsFromOriginalOrder,
          shipping: {
            address: {
              address_line_1: onApproveResponse.purchase_units[0].shipping.address.address_line_1,
              admin_area_1: onApproveResponse.purchase_units[0].shipping.address.admin_area_1,
              admin_area_2: onApproveResponse.purchase_units[0].shipping.address.admin_area_2,
              country_code: onApproveResponse.purchase_units[0].shipping.address.country_code,
              postal_code: onApproveResponse.purchase_units[0].shipping.address.postal_code
            }
          }
        }],
      payer:
      {
        email_address: originalOrder.payer.email_address,
        name:
        {
          given_name: originalOrder.payer.name.given_name,
          surname: originalOrder.payer.name.surname
        }
      },
      status: originalOrder.status

    }
    const orderInstance = new Order(newOrder)
    await orderInstance.save()
    return response.json(newOrder)

  } catch (error) {
    console.log(error)
  }
})

export default order_router;
