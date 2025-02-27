import { useState, useEffect } from "react";
import styles from "./AdminShopCard.module.css";

function AdminShopCard({ handleDelete, handleShopChange, _id, name, description, pictures, price, stock }) {
  return <>
    <div className={styles.container}>
      <button className={styles.delete} onClick={() => handleDelete(_id)}>DELETE</button>
      <p>{_id}</p>
      <p>Name</p>
      <textarea className={styles.smallinput} type="text" name="name" onChange={(e) => handleShopChange(e, _id)} value={name || ""} />
      <p>Description</p>
      <textarea className={styles.input} type="text" name="description" onChange={(e) => handleShopChange(e, _id)} value={description || ""} />
      <p>Pictures</p>
      <p>Price</p>
      <textarea className={styles.smallinput} type="text" name="price" onChange={(e) => handleShopChange(e, _id)} value={price} />
      <p>Stock</p>
      <div className={styles.stockbox}>
        <textarea className={styles.stockboxbox} type="text" name="xs" onChange={(e) => handleShopChange(e, _id)} value={stock.xs} />
        <textarea className={styles.stockboxbox} type="text" name="s" onChange={(e) => handleShopChange(e, _id)} value={stock.s} />
        <textarea className={styles.stockboxbox} type="text" name="m" onChange={(e) => handleShopChange(e, _id)} value={stock.m} />
        <textarea className={styles.stockboxbox} type="text" name="l" onChange={(e) => handleShopChange(e, _id)} value={stock.l} />
        <textarea className={styles.stockboxbox} type="text" name="xl" onChange={(e) => handleShopChange(e, _id)} value={stock.xl} />
        <textarea className={styles.stockboxbox} type="text" name="xxl" onChange={(e) => handleShopChange(e, _id)} value={stock.xxl} />
      </div>

    </div>
  </>

}
export default AdminShopCard;
