import styles from "./Remove.module.css";

function Remove({ itemKey }) {
  const handleClick = () => {
    // Retrieve cart from localStorage safely
    let cart = JSON.parse(localStorage.getItem("userCart")) || { items: [] };

    console.log("Before removal:", cart.items);

    // Filter out the item with the given itemKey
    cart.items = cart.items.filter(item => item.itemId !== itemKey);

    console.log(`Removed item with itemId: ${itemKey}`);
    console.log("After removal:", cart.items);

    // Save the updated cart back to localStorage
    localStorage.setItem("userCart", JSON.stringify(cart));
  };

  return (
    <>
      <div className={styles.container}>
        <button onClick={handleClick}>Remove</button>
      </div>
    </>
  );
}

export default Remove;

