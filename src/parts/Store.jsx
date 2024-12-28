import styles from "./Store.module.css";
import FooterLeft from "../components/FooterLeft";
import { useState } from "react";

function Store({ products }) {
  return <>
    <div className={styles.container}>
      <p className={styles.header}>All Products</p>
      <div className={styles.products}>
        {products.map((item, index) => <img src={item} className={styles.product} key={index}></img>)}
      </div>
    </div>
  </>

}
export default Store;
