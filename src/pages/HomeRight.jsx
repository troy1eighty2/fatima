import styles from "./HomeRight.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Intro from "../parts/Intro.jsx";
import Logo from "../parts/Logo.jsx";
import gif from "../assets/Assets/Assets/Deliverables/Graphics Animation/Graphics-Animation.gif"
import FooterRight from "../components/FooterRight.jsx";

import jawn from "../assets/Assets/Assets/temp/jawn.png"
import jawn1 from "../assets/Assets/Assets/temp/jawn1.png"

import axios from "axios";

function HomeRight() {
  const location = useLocation();
  const [page, setPage] = useState(<Intro></Intro>);
  const [homeRightPictures, setHomeRightPictures] = useState([])
  const [testimonials, setTestimonials] = useState([])
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
        setTestimonials(config.testimonials)

      })

  }, [location])
  return <>
    <div className={styles.container}>
      {page}
      <div className={styles.container2}>
        <div className={styles.left}>
          <div className={styles.gallery}>
            {homeRightPictures.map((item, index) => (<img key={index} src={item} className={styles.display} />))}
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.gif} src={gif} />
          <div className={styles.container3}>
            <div className={styles.quote}>Lorem ipsum dolor sit amet consectetur. Pharetra lacinia massa tempor praesent. Mattis pellentesque ut nec sapien in tellus diam.</div>
            <div className={styles.customer}>-Johnny Tran</div>
          </div>
        </div>
      </div>
      <FooterRight></FooterRight>
    </div >

  </>
}

export default HomeRight;
