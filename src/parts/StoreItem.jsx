import styles from "./StoreItem.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect, useLayoutEffect, useRef} from "react";
import ImageMagnifier from "./ImageMagnifier.jsx"
function StoreItem({ id, name, image, price, stock, width, height }) {
  return <>
    <Link to={`/shop/${id}/${name}`}>
      <div className={styles.container}>
        <ImageMagnifier src={image} width={width} height={height}></ImageMagnifier>
        <div className={styles.infobox}>
          <p className={styles.header}>{name}</p>
          <p className={styles.price}>{
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
        </div>
      </div>
    </Link>
  </>
}
export default StoreItem;
