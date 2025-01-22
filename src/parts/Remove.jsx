import styles from "./Remove.module.css";
import { Link, useParams } from "react-router-dom";

function Remove({ itemKey, removeItem }) {
  const { id, name } = useParams();
  const handleClick = () => {
    console.log(itemKey)
    removeItem(itemKey);
  };

  return (
    <>
      <div className={styles.container}>
        {/* <button onClick={handleClick} className={styles.btn}>Remove</button> */}
        <Link to={`/shop/${id}/${name}`} className={styles.btn} onClick={(e) => {
          e.preventDefault();
          handleClick();
        }} >Remove</Link>

      </div>
    </>
  );
}

export default Remove;

