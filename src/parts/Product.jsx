import styles from "./Product.module.css";
import AddToCart from "./AddToCart.jsx";
import SizeSelection from "./SizeSelection.jsx";
import FooterLeft from "../components/FooterLeft";
import { Link, useLocation, useParams } from "react-router-dom";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-26.svg"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-27.svg"
import { useState, useEffect } from "react";
import axios from "axios";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
function Product({ cartItems, updateCart, productID, setProductID }) {
  const [hover, setHover] = useState(false)
  // const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null);
  const [item, setItem] = useState([]);

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const id = pathSegments[2]
  // console.log(id)



  useEffect(() => {
    if (!id) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop/${id}`)
      .then((response) => {
        const item = response.data;
        const itemID = item._id;
        // console.log(item)

        setItem(item);
        setProductID(itemID);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id]);
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
              {item.pictures.map((item, index) => {
                return <div key={index} className={styles.imagecontainer}><img className={styles.picture} src={item.url} /></div>
              })}
            </div>
            <div className={styles.third}>
              <p className={styles.price}>{
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price)}</p>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.buttons}>
                <SizeSelection size_choice={selected} setSelected={setSelected}></SizeSelection>
                {item._id && <AddToCart cartItems={cartItems} selected={selected} updateCart={updateCart} productID={item._id} ></AddToCart>}
              </div>

            </div>
          </div>
        </div>}
    </div>
    <FooterLeft></FooterLeft>


  </>
}

export default Product;
