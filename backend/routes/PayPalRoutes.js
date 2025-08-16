import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config()


const PayPal_router = express.Router();
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;
console.log("Client ID:", clientID);
console.log("Client Secret:", clientSecret);

async function createOrder(request) {
  const cartItems = request.body
  console.log(cartItems)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const orderData = {
    "intent": "CAPTURE",
    "purchase_units": [{
      "amount": {
        "currency_code": "USD",
        "value": (totalPrice + parseFloat(process.env.FLAT_SHIPPING_RATE) + (totalPrice * parseFloat(process.env.FLAT_TAX_RATE))).toFixed(2).toString(),
        "breakdown": {
          "item_total": {
            "currency_code": "USD",
            "value": totalPrice.toFixed(2).toString(),
          },
          "shipping": {
            "currency_code": "USD",
            "value": parseFloat(process.env.FLAT_SHIPPING_RATE).toFixed(2).toString(),
          },
          "tax_total": {
            "currency_code": "USD",
            "value": (totalPrice * parseFloat(process.env.FLAT_TAX_RATE)).toFixed(2).toString()
          },

        },
      },
      "items": cartItems.map((item) => ({
        "name": item.name,
        "quantity": item.quantity.toString(),
        "unit_amount": {
          "currency_code": "USD",
          "value": item.price.toFixed(2).toString(),
        }
      })),
    }],
  }
  try {
    const access_token = await getAccessToken();
    const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", orderData, {
    // const response = await axios.post("https://api-m.paypal.com/v2/checkout/orders", orderData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,
      }
    })
    return response.data;

  } catch (error) {
    console.log(error)

  }

}
async function captureOrder(request) {
  const orderID = request.body.orderID
  const PayPalRequestID = uuidv4()
  const captureData = {
    "id": orderID
  }
  try {
    const access_token = await getAccessToken();
    const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, captureData, {
    // const response = await axios.post(`https://api-m.com/v2/checkout/orders/${orderID}/capture`, captureData, {
      headers: {
        "Content-Type": "application/json",
        "PayPal-Request-Id": `${PayPalRequestID}`,
        "Authorization": `Bearer ${access_token}`,
      }
    })
    return response.data;
  } catch (error) {
    console.log(error)


  }
}


async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      // "https://api-m.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: clientID,
          password: clientSecret,
        },
      }
    );

    return response.data.access_token;
  }
  catch (error) {
    console.error("Error fetching PayPal access token:", error.response?.data || error.message);
    if (error.response) {
      console.error("Status Code:", error.response.status);
      console.error("Response Data:", error.response.data);
    }
    throw new Error("Failed to obtain PayPal access token");
  }
}
async function showDetails(orderID) {
  try {
    const access_token = await getAccessToken();
    const findOrderResponse = await axios.get(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}`, {
    // const findOrderResponse = await axios.get(`https://api-m.paypal.com/v2/checkout/orders/${orderID}`, {
      headers: {
        "Authorization": `Bearer ${access_token}`,
      }
    })
    return findOrderResponse.data


  } catch (error) {
    console.log(error)
  }
}
PayPal_router.post("/create-paypal-order", async (request, response) => {
  try {
    const order = await createOrder(request);

    response.json({ orderID: order.id });

  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "error creating PayPal order" });
  }
})

PayPal_router.post("/capture-paypal-order", async (request, response) => {
  try {
    const order = await captureOrder(request);
    response.json(order);

  } catch (error) {
    console.log(error)

  }
})

PayPal_router.get("/get-order/:id", async (request, response) => {
  try {
    const orderID = request.params.id;
    const order = await showDetails(orderID);
    response.json(order);

  } catch (error) {
    console.log(error)

  }
})
export default PayPal_router;
