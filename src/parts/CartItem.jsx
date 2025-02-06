import styles from "./CartItem.module.css"
import CartQuantity from "./CartQuantity.jsx"
import Remove from "./Remove.jsx"
function CartItem({ product, removeItem }) {
  // console.log(product)


  return <>
    <div className={styles.container}>


      <div className={styles.griditem}>
        <img src={product.image.url} className={styles.image} />
      </div>
      <div className={styles.griditem}>
        <div className={styles.nameandprice}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}</p>
        </div>
      </div>
      <div className={styles.griditem}>
        <p className={styles.size}>Size: {product.size}</p>
      </div>
      <div className={styles.griditem}>
        <CartQuantity></CartQuantity>
        <Remove cartItemID={product.cartItemID} removeItem={removeItem}></Remove>
      </div>

    </div >
  </>

}
export default CartItem;
