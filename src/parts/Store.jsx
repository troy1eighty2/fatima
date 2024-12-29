import styles from "./Store.module.css"
import FooterLeft from "../components/FooterLeft"
import { useState } from "react"
import StoreItem from "./StoreItem.jsx"

function Store({ products }) {
  return <>
    <div className={styles.container}>
      <p className={styles.header}>All Products</p>
      <div className={styles.products}>
        {products.map((item, index) => <StoreItem key={item.name} name={item.name} image={item.image} price={item.price} description={item.description} stock={item.stock}></StoreItem>)}
      </div>
    </div>
  </>

}
export default Store;
