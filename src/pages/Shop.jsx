import styles from "./Shop.module.css";
import FooterLeft from "../components/FooterLeft.jsx";
import { useState } from "react";
import Store from "../parts/Store.jsx";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
import testdata from "../products.json"

function Shop() {
  const [loading, setLoading] = useState(true)

  return <>
    <div className={styles.container}>
      {testdata.length == 0 || testdata.length == null ? <img src={wrestler} className={styles.loadingimg} /> : <Store products={testdata}></Store>}
    </div>
    <FooterLeft></FooterLeft>
  </>
}

export default Shop;
