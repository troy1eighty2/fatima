import styles from "./Cart.module.css";
import FooterRight from "../components/FooterRight";
import CartEmpty from "../parts/CartEmpty.jsx";
import CartFull from "../parts/CartFull.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


function Cart({ initialCart, removeItem, updateCart }) {
  // console.log("asd")
  console.log(initialCart)

  useEffect(() => {
    const fetchProductDetails = async () => {

      if (initialCart.length) {
        console.log("yesss")
      }
      //
      //   try {
      //     const responses = await Promise.all(
      //       initialCart.map((product) =>
      //         axios.get(`${import.meta.env.VITE_API_URL}/shop/${product.id}`)
      //       )
      //     );
      //     // console.log(responses)
      //     const mergedDetails = initialCart.map((item, index) => ({
      //       ...item,
      //       ...responses[index].data,
      //       itemId: item.itemId ? item.itemId : uuidv4(),
      //     }));
      //
      //     console.log(mergedDetails)
      //     updateCart(mergedDetails);
      //   } catch (error) {
      //     console.error("Error fetching product details:", error);
      //   }
      // }
    };

    fetchProductDetails();
  }, [initialCart]);

  return (
    <>
      <div className={styles.container}>
        {(initialCart.length > 0) ? (
          <CartFull cart={initialCart} removeItem={removeItem} />
        ) : (
          <CartEmpty />
        )}
      </div>
      <FooterRight />
    </>
  );
}

export default Cart;

