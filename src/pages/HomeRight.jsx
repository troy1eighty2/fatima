import styles from "./HomeRight.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../parts/Intro.jsx";
import Logo from "../parts/Logo.jsx";
import FooterRight from "../components/FooterRight.jsx";
import FooterLeft from "../components/FooterLeft.jsx";
import Testimonials from "../components/Testimonials.jsx";


import axios from "axios";

function HomeRight() {
  const location = useLocation();
  const [page, setPage] = useState(<Intro></Intro>);
  const [homeRightPictures, setHomeRightPictures] = useState([])
  const [gif, setGif] = useState("")

  useEffect(() => {
    if (location.pathname === "/contact") {
      setPage(<Logo></Logo>)
    }
    else {
      setPage(<Intro></Intro>);
    }
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setHomeRightPictures(config.homeRightPictures)
        setGif(config.gif)

      })

  }, [location])
  return <>
    <div className={styles.container}>
      {page}
      <div className={styles.container2}>
        <div className={styles.left}>
          <div className={styles.gallery}>
            {homeRightPictures.map((item, index) => {
              if (item === "") {
                return
              }
              return <img key={index} src={item} className={styles.display} />
            })}
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.gif} src={gif} />
          <Testimonials></Testimonials>
        </div>
      </div>
    </div >
    <div className={styles.mobileFooterLeft}>
      <FooterLeft></FooterLeft>
    </div>
    <FooterRight></FooterRight>

  </>
}

export default HomeRight;
