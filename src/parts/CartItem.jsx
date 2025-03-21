import styles from "./CartItem.module.css"
import CartQuantity from "./CartQuantity.jsx"
import Remove from "./Remove.jsx"
function CartItem({ product, removeItem, add, subtract }) {


  console.log(product)
  return <>
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.image.url} className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.nameandprice}>
          <div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}</p>
          </div>
        </div>
        <p className={styles.size}>Size: {product.size}</p>
        <div className={styles.control}>
          <div className={styles.buttons}>
            <CartQuantity product={product} add={add} subtract={subtract}></CartQuantity>
            <Remove cartItemID={product.cartItemID} removeItem={removeItem}></Remove>
          </div>
        </div>
      </div>

    </div>

  </>

}
export default CartItem;
