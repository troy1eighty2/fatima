import styles from "./StoreItem.module.css"
function StoreItem({ name, image, price, stock }) {
  return <>
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.infobox}>
        <p className={styles.header}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>

    </div>
  </>
}
export default StoreItem;
