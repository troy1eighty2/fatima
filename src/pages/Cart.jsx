import styles from "./Cart.module.css";
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx";
import CartFull from "../parts/CartFull.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"

function Cart({ cartItems, mergeCart, removeItem }) {
  // console.log("asd")
  console.log(cartItems)
  const [loading, setLoading] = useState(true)
  // const [updatedCart, setUpdatedCart] = useState(cartItems)


  useEffect(() => {
    // const fetchProductDetails = async () => {
    //
    //
    //   try {
    //     const responses = await Promise.all(
    //       cartItems.map((product) =>
    //         axios.get(`${import.meta.env.VITE_API_URL}/shop/${product.id}`)
    //       )
    //     );
    //     // console.log(responses)
    //     const mergedDetails = cartItems.map((item, index) => ({
    //       ...item,
    //       ...responses[index].data,
    //       itemId: item.itemId ? item.itemId : uuidv4(),
    //     }));
    //     // console.log(mergedDetails)
    //     if (JSON.stringify(mergedDetails) !== JSON.stringify(updatedCart)) {
    //       setUpdatedCart(mergedDetails); // Update local cart
    //       mergeCart(mergedDetails); // Update parent state
    //     }
    //     setLoading(false)
    //   } catch (error) {
    //     console.error("Error fetching product details:", error);
    //   }
    // }
    //
    // fetchProductDetails();
  }, []);
  // }, [JSON.stringify(cartItems)]);

  return (
    <>
      <div className={styles.container}>
        {loading ? (<img src={wrestler} className={styles.loadingimg} />) : cartItems.length > 0 ? (<CartFull cart={updatedCart} removeItem={removeItem} />) : (<CartEmpty />)}
      </div>
      <FooterRight />
    </>
  );
}

export default Cart;

