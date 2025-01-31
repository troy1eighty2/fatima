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
        <button onClick={handleClick} className={styles.btn}>Remove</button>

      </div>
    </>
  );
}

export default Remove;

