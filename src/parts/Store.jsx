import styles from "./Store.module.css"
import FooterLeft from "../components/FooterLeft"
import { useState, useRef, useLayoutEffect } from "react"
import Logo from "./Logo.jsx"
import StoreItem from "./StoreItem.jsx"

function Store({ products }) {
  // console.log(products)
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const containerRef = useRef(null)
  // console.log(imgHeight)
  // console.log(imgWidth)
  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        setSize([width, height])
      }
    })

    resizeObserver.observe(container)
    return () => resizeObserver.disconnect()
  }, [])
  return <>
    <div className={styles.container} ref={containerRef}>
      <p className={styles.header}>All Products</p>
      <div className={styles.products}>
        {products.map((item, index) => <div className={styles.product} key={item._id}><StoreItem id={item._id} name={item.name} image={item.pictures[0].url} price={item.price} description={item.description} stock={item.stock} ></StoreItem></div>)}
      </div>
    </div>
  </>

}
export default Store;
