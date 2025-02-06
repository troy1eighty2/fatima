import styles from "./NavBar.module.css";

import home from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Home.svg"
import contact from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Contact.svg"
import shop from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Shop.png"
import cart from "../assets/Assets/Assets/Deliverables/Nav Icons/Static/Web/Fatima-Web-Icons-Cart.svg"

import homeanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Home.gif"
import contactanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Contact.gif"
import shopanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Shop.gif"
import cartanimate from "../assets/Assets/Assets/Deliverables/Nav Icons/Gifs/Deliverables/Cart.gif"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar({ cartItems }) {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  useEffect(() => {
    console.log("cart changed")
  }, [cartItems])
  return <>
    <div className={styles.container}>
      <Link to="/" className={styles.grid1} onMouseEnter={() => setIsHomeHovered(true)} onMouseLeave={() => setIsHomeHovered(false)}>
        <img src={isHomeHovered ? homeanimate : home} className={styles.icons} />
        <p>Home</p>
      </Link>
      <Link to="/contact" className={styles.grid2} onMouseEnter={() => setIsContactHovered(true)} onMouseLeave={() => setIsContactHovered(false)}>
        <img src={isContactHovered ? contactanimate : contact} className={styles.icons} />
        <p>Contact</p>
      </Link>
      <Link to="/shop" className={styles.grid3} onMouseEnter={() => setIsShopHovered(true)} onMouseLeave={() => setIsShopHovered(false)}>
        <img src={isShopHovered ? shopanimate : shop} className={styles.icons} />
        <p>Shop</p>
      </Link>
      <Link to="/cart" className={styles.grid4} onMouseEnter={() => setIsCartHovered(true)} onMouseLeave={() => setIsCartHovered(false)}>
        <img src={isCartHovered ? cartanimate : cart} className={styles.icons} />
        <p>Cart ({cartItems.length})</p>
      </Link>
    </div>
  </>
}

export default NavBar
