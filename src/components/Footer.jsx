import styles from "./Footer.module.css"
import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import clown from "../assets/Assets/Assets/Deliverables/Illustrations/clown.png"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from "motion/react";
import { useState, useEffect, useRef} from "react";
import Cart from "../pages/Cart.jsx";
import axios from "axios";

function Footer({cartItems, location, rightContent}) {
  // console.log(location)
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [container_width, setContainerWidth]= useState(0);
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
      console.log(data)
      const onApproveResponse = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/capture-paypal-order`, data)
      const originalOrder = await axios.get(`${import.meta.env.VITE_API_URL}/PayPal/get-order/${onApproveResponse.data.id}`)
      // console.log({ onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
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
    // "height": 55,
    // "width": 455,
  }
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  useEffect(()=>{
    const handleResize = () =>{
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        // console.log(containerRef.current.offsetWidth)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])
  return <>
    <div className={styles.container} ref={containerRef} >
      <div className={styles.subtotal}style={cartItems.length === 0 || rightContent?.type.name !== "Cart" || (container_width <= 768 && location !== "/cart") ? {display:'none'}:null}>
        <div className={styles.subtotalItems}>
          <div className={styles.checkoutcontainer} >
            <p className={styles.title}>Subtotal:</p>
            <p className={styles.total}>{`$${total}`}</p>
            <div className={styles.paypalButtonstyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
              {/* <PayPalButtons createOrder={createOrder} onApprove={onApprove}></PayPalButtons> */}
            </div>
            <motion.img className={styles.clown} initial={{ width: "20%", translateY: "0%" }} animate={isHovered ? { translateY: "-80%", opacity: 1 } : { translateY: "0%", opacity: 1 }} src={clown} ></motion.img>
          </div>
          <p className={styles.disclaimer}>
            *Taxes and shipping calculated at checkout*
          </p>
        </div>
      </div>
      <div className={styles.one}>
        <FooterLeft></FooterLeft>
      </div>
      <div className={styles.two}>
        <FooterRight></FooterRight>
      </div>
    </div>
  </>

}
export default Footer
