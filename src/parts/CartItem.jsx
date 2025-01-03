import styles from "./CartItem.module.css"
function CartItem({ product }) {
  return <>
    <div className={styles.container}>
      <div className={styles.griditem}>
        <img src={product.image} className={styles.image} />
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
        <p>placehodler</p>
      </div>

    </div>
  </>

}
export default CartItem;
