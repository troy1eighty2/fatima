import styles from "./Footer.module.css"
import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import clown from "../assets/Assets/Assets/Deliverables/Illustrations/clown.png"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from "motion/react";
import { useState} from "react";
function Footer({cartItems, location}) {
  // console.log(location)
  const [isHovered, setIsHovered] = useState(false);
  //paypal
  const createOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/create-paypal-order`, cartItems)
      return response.data.orderID;
    } catch (error) {
      console.log(error)
    }
  }
  const onApprove = async (data) => {
    try {
      const onApproveResponse = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/capture-paypal-order`, data)
      const originalOrder = await axios.get(`${import.meta.env.VITE_API_URL}/PayPal/get-order/${onApproveResponse.data.id}`)
      console.log({ onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      const addToDatabase = await axios.post(`${import.meta.env.VITE_API_URL}/order/post`, { onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      return addToDatabase

    } catch (error) {
      console.log(error)
    }


  }
  const buttonInit = {
    "shape": "sharp",
    "layout": "vertical",
    "label": "checkout",
    "height": 50,
    "width": 290
  }
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return <>
    <div className={styles.container}>
      <div className={styles.one}>
        <FooterLeft></FooterLeft>
      </div>
      <div className={styles.two}>
        <FooterRight></FooterRight>
      </div>
      <div className={styles.subtotal}style={total === 0 ? {display:'none'}:null}>
        <div className={styles.subtotalItems}>
          <div className={styles.checkoutcontainer} style={location !== "/cart" ? {display:"none"}: null }>
            <p className={styles.title}style={location !== "/cart" ? {display:"none"}: null }>Subtotal:</p>
            <p className={styles.total}style={location !== "/cart" ? {display:"none"}: null }>{`$${total}`}</p>
            <div className={styles.paypalButtonstyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
            </div>
            <motion.img className={styles.clown} initial={{ width: "20%", translateY: "0%" }} animate={isHovered ? { translateY: "-80%", opacity: 1 } : { translateY: "0%", opacity: 1 }} src={clown} ></motion.img>
          </div>
          <p className={styles.disclaimer}>
            *Taxes and shipping calculated at checkout*
          </p>
        </div>
      </div>
    </div>
  </>

}
export default Footer
