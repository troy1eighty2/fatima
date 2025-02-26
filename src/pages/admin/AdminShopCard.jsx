import { useState, useEffect } from "react";
import styles from "./AdminShopCard.module.css";

function AdminShopCard({ handleShopChange, name, description, pictures, price, stock }) {
  return <>
    <div className={styles.container}>
      <button className={styles.delete}>DELETE</button>
      <p>Name</p>
      <textarea className={styles.smallinput} type="text" name="name" onChange={(e) => handleShopChange(e)} value={name} />
      <p>Description</p>
      <textarea className={styles.input} type="text" name="description" onChange={(e) => handleShopChange(e)} value={description} />
      <p>Pictures</p>
      <p>Price</p>
      <textarea className={styles.smallinput} type="text" name="price" onChange={(e) => handleShopChange(e)} value={price} />
      <p>Stock</p>
      <div className={styles.stockbox}>
        <textarea className={styles.stockboxbox} type="text" name="xs" onChange={(e) => handleShopChange(e, name)} value={stock.xs} />
        <textarea className={styles.stockboxbox} type="text" name="s" onChange={(e) => handleShopChange(e, name)} value={stock.s} />
        <textarea className={styles.stockboxbox} type="text" name="m" onChange={(e) => handleShopChange(e, name)} value={stock.m} />
        <textarea className={styles.stockboxbox} type="text" name="l" onChange={(e) => handleShopChange(e, name)} value={stock.l} />
        <textarea className={styles.stockboxbox} type="text" name="xl" onChange={(e) => handleShopChange(e, name)} value={stock.xl} />
        <textarea className={styles.stockboxbox} type="text" name="xxl" onChange={(e) => handleShopChange(e, name)} value={stock.xxl} />
      </div>

    </div>
  </>

}
export default AdminShopCard;
