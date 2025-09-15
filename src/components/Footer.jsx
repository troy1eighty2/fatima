import styles from "./Footer.module.css"
import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
import clown from "../assets/Assets/Assets/Deliverables/Illustrations/clown.png"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { motion } from "motion/react";
import { useState, useEffect, useRef} from "react";
import Cart from "../pages/Cart.jsx";
import axios from "axios";

function Footer({cartItems, location, rightContent, clearCart, show_order_conf, setShowOrderConf}) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [container_width, setContainerWidth]= useState(0);

  //paypal
  const createOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/create-paypal-order`, cartItems)
      return response.data.id;
    } catch (error) {
      console.log(error)
      throw(error)
    }
  }
  const onApprove = async (data) => {
    try {
      const onApproveResponse = await axios.post(`${import.meta.env.VITE_API_URL}/PayPal/capture-paypal-order`, data)
      const originalOrder = await axios.get(`${import.meta.env.VITE_API_URL}/PayPal/get-order/${onApproveResponse.data.id}`)
      // console.log({ onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      const addToDatabase = await axios.post(`${import.meta.env.VITE_API_URL}/order/post`, { onApproveResponse: onApproveResponse.data, originalOrder: originalOrder.data })
      clearCart()
      setShowOrderConf(true)
      return addToDatabase
      

    } catch (error) {
      console.log(error)
      throw(error)
    }
  }
  const buttonInit = {
    "shape": "sharp",
    "layout": "vertical",
    "label": "checkout",
    "height": 47
    // "height": 55,
    // "width": 455,
  }
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  useEffect(()=>{
    const handleResize = () =>{

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[])
  return <>
    <div className={styles.container} ref={containerRef} >
      <div className={styles.subtotal}style={cartItems.length === 0 || !rightContent?.props?.clearCart || (container_width <= 768 && location !== "/cart") ? {display:'none'}:null}>
        <div className={styles.checkoutcontainer} >
          <div className={styles.bro}>
            <p className={styles.title}>Subtotal:</p>
            <p className={styles.total}>{`$${total}`}</p>
            <div className={styles.paypalButtonstyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <div className={styles.paypal}>
                {<PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>}
                <div className={styles.disclaimer}>Taxes and shipping calculated at checkout</div>
              </div>
            </div>
          </div>
          <div className={styles.DisclaimerBuffer}></div>
        </div>
        <motion.img className={styles.clown} initial={{ width: "20%", translateY: "0%" }} animate={isHovered ? { translateY: "-140%", opacity: 1 } : { translateY: "0%", opacity: 1 }} src={clown} ></motion.img>
      </div>
      <div className={styles.MobileSubtotal}>
        <div className={styles.subtotalmobile}style={cartItems.length === 0 || !rightContent?.props?.clearCart || (container_width <= 768 && location !== "/cart") ? {display:'none'}:null}>
          <div className={styles.MobileCheckout} >
              <p className={styles.title}>Subtotal:</p>
              <p className={styles.total}>{`$${total}`}</p>
          </div>
          <div className={styles.paypalButtonstyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={styles.paypal}>
              <PayPalButtons style={buttonInit} createOrder={createOrder} onApprove={onApprove}></PayPalButtons>
              <div className={styles.disclaimer}>Taxes and shipping calculated at checkout</div>
            </div>
          </div>
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
