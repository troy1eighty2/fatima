import styles from "./CartItem.module.css"
import Quantity from "./Quantity.jsx"
import Remove from "./Remove.jsx"
function CartItem({ product }) {

  return <>
    <div className={styles.container}>

      <div className={styles.griditem}>
        <img src={product.data.pictures[0].url} className={styles.image} />
        {/* <p>{product.data.pictures[0]}</p> */}
      </div>
      <div className={styles.griditem}>
        <div className={styles.nameandprice}>
          <p className={styles.name}>{product.data.name}</p>
          <p className={styles.price}>{
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.data.price)}</p>
        </div>
      </div>
      <div className={styles.griditem}>
        <p className={styles.size}>Size: {product.data.size}</p>
      </div>
      <div className={styles.griditem}>
        <Quantity></Quantity>
        <Remove></Remove>
      </div>

    </div>
  </>

}
export default CartItem;
