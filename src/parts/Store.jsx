import styles from "./Store.module.css"
import FooterLeft from "../components/FooterLeft"
import { useState } from "react"
import Logo from "./Logo.jsx"
import StoreItem from "./StoreItem.jsx"

function Store({ products }) {
  // console.log(products)
  return <>
    <div className={styles.container}>
      <p className={styles.header}>All Products</p>
      <div className={styles.products}>
        {products.map((item, index) => <div className={styles.product} key={item._id}><StoreItem id={item._id} name={item.name} image={item.pictures[0].url} price={item.price} description={item.description} stock={item.stock}></StoreItem></div>)}
      </div>
    </div>
  </>

}
export default Store;
