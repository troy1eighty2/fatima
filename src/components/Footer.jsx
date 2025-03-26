import styles from "./Footer.module.css"
import FooterLeft from "./FooterLeft"
import FooterRight from "./FooterRight"
function Footer() {
  return <>
    <div className={styles.container}>
      <div className={styles.one}>
        <FooterLeft></FooterLeft>
      </div>
      <div className={styles.two}>
        <FooterRight></FooterRight>
      </div>
    </div>
  </>

}
export default Footer
