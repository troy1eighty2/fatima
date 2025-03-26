import styles from "./Shop.module.css";
import { useState, useEffect } from "react";
import Store from "../parts/Store.jsx";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
import axios from "axios";

function Shop() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  return <>
    <div className={styles.container}>
      {loading || products.length === 0 ? <div className={styles.imgcontainer}><img src={wrestler} className={styles.loadingimg} /></div> : <Store products={products}></Store>}
    </div>
  </>
}

export default Shop;
