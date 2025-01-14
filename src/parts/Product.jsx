import styles from "./Product.module.css";
import FooterLeft from "../components/FooterLeft";
import { Link, useParams } from "react-router-dom";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-26.svg"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-27.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
function Product() {
  const [hover, setHover] = useState(false)
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop/${id}`)
      .then((response) => {
        const item = response.data;
        setProduct(item);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
  return <>
    <div className={styles.container}>
      {loading ? <div className={styles.loadingcontainer}><img src={wrestler} className={styles.loadingimg} /></div> :
        <div>
          <div className={styles.first}>
            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.button}>
              <Link to="/shop">
                <img src={hover ? buttonhover : button} className={styles.button} />
              </Link>
            </button>
          </div>
          <div className={styles.row}>
            <div className={styles.second}>
              {product.pictures.map((item, index) => {
                return <div key={index} className={styles.imagecontainer}><img className={styles.picture} src={item.url} /></div>
              })}
            </div>
            <div className={styles.third}>
              <p className={styles.price}>{
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}</p>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        </div>}
    </div>
    <FooterLeft></FooterLeft>


  </>
}

export default Product;
