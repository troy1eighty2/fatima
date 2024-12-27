import styles from "./Shop.module.css";
import FooterLeft from "../components/FooterLeft.jsx";
import { useState } from "react";
import Store from "../parts/Store.jsx";
import jawn from "../assets/Assets/Assets/temp/jawn.png";
import jawn1 from "../assets/Assets/Assets/temp/jawn1.png";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
const items = [
  jawn,
  jawn1,
  jawn,
  jawn1
]
function Shop() {
  const [loading, setLoading] = useState(true)

  return <>
    <div className={styles.container}>
      {items.length == 0 || items.length == null ? <img src={wrestler} className={styles.loadingimg} /> : <Store products={items}></Store>}
    </div>
    <FooterLeft></FooterLeft>
  </>
}

export default Shop;
