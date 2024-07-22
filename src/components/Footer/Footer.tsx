import styles from "./Footer.module.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={styles.footerMain}>
        <div className={styles.socialMedias}>
          <div className={styles.logoMain}>
            <img src="/logoSmall.png" alt="logo" width={50} />{" "}
            <span>StreamIO</span>
          </div>
          <h5>Connect With Us</h5>
          <div className={styles.socialMediaIcons}>
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaInstagramSquare />
            <FaSquareYoutube />
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.categoryTitle}>Browse Categories</div>
          <div className={styles.categoriesList}>
            <p>Tv Series</p>
            <p>Original Shows</p>
            <p>Movies</p>
            <p>Drama Series</p>
            <p>Comedy Shows</p>
          </div>
        </div>
        <div className={styles.helpSection}>
          <div className={styles.helpTitle}>HELP</div>
          <p>About Us</p>
          <p>Pricing Plan</p>
          <p>Faq Page</p>
          <p>Account & Billing</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles.downloadApp}>
          <div className={styles.downloadTitle}>
            DOWNLOAD THE APP FOR STREAMING.
          </div>
          <div className={styles.downloadButtons}>
            <img
              src="/playStore.png"
              alt="play-store"
              width={100}
              height={50}
              className={styles.play}
            />
            <img
              src="/appStore.png"
              alt="app-store"
              width={100}
              height={50}
              className={styles.app}
            />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>© StreamIO 2024, Designed by Maya WebTech</div>
        <div style={{cursor: 'pointer'}}>Privacy Policy</div>
      </div>
    </>
  );
};

export default Footer;
