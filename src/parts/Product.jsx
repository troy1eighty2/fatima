import styles from "./Product.module.css";
import AddToCart from "./AddToCart.jsx";
import SizeSelection from "./SizeSelection.jsx";
import FooterLeft from "../components/FooterLeft";
import { Link, useLocation, useParams } from "react-router-dom";
import button from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-26.svg"
import buttonhover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Back-27.svg"
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import wrestler from "../assets/Assets/Assets/Deliverables/Illustrations/wwe.png"
import ImageMagnifier from "./ImageMagnifier.jsx"
function Product({ cartItems, updateCart, productID, setProductID }) {
  const [hover, setHover] = useState(false)
  const [loading, setLoading] = useState(true)
  //size
  const [selected, setSelected] = useState(null);
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(1);

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const id = pathSegments[2]

  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const containerRef = useRef(null)

  const isCartEmptyingStock = (size) =>{
    const filtered = cartItems.filter((cartItem)=> cartItem.productID === item._id && cartItem.size === size)
    const item_count_cart = filtered.reduce((sum, curr)=> sum + curr.quantity, 0)

    return item.stock[size.toLowerCase()] - item_count_cart
  }

  useLayoutEffect(() => {
    if (!item.pictures?.[0]) return;

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setSize([width, height]);
      }
    });
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  },[item.pictures]);
  useEffect(() => {
    if (!id) return;
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop/${id}`)
      .then((response) => {
        const item = response.data;
        const itemID = item._id;

        setItem(item);
        setProductID(itemID);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [id, cartItems]);
  return <>
    <div className={styles.container}>
      {loading ? null :
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
              {item.pictures[0]?.url && (
                <div className={styles.picture} ref={containerRef}>
                  <ImageMagnifier
                    src={item.pictures[0].url}
                    width={imgWidth || 400}
                    height={imgHeight || 400}
                  />
                </div>
              )}
              {item.pictures.slice(1).map((item, index) => {
                if (item.url === "") {
                  return null
                }
                return <div key={index} className={styles.picture} ><ImageMagnifier src={item.url} width={imgWidth} height={imgHeight} /></div>
              })}
            </div>
            <div className={styles.secondMobile}>
              <img className={styles.picture} src={item.pictures[0].url} />
            </div>
            <div className={styles.third}>
              <p className={styles.price}>{
                new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "usd",
                }).format(item.price)}</p>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.buttons}>
                <SizeSelection count={count} setCount={setCount}isCartEmptyingStock={isCartEmptyingStock} cartItems={cartItems} size_choice={selected} setSelected={setSelected} item={item}></SizeSelection>
                {item._id && <AddToCart count={count} setCount={setCount}isCartEmptyingStock={isCartEmptyingStock}cartItems={cartItems} selected={selected} setSelected={setSelected} updateCart={updateCart} productID={item._id} ></AddToCart>}
              </div>

            </div>
          </div>
        </div>}
    </div>


  </>
}

export default Product;
