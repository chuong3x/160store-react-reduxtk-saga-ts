import styles from "./Header.module.scss";
import SVGCart from "./cart";
import logo from "./logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <a href="/" className={styles.headerLogoLink}>
          <img className={styles.headerLogoLinkImg} src={logo} alt="Logo" />
        </a>
      </div>
      <Navbar />
      <div className={styles.util}>
        <div className={styles.utilUser}>
          <div className={styles.utilUserIcon}>
            <FontAwesomeIcon icon={faCircleUser} size="1x" />
          </div>
        </div>
        <div className={styles.utilSearch}>
          <div className={styles.utilSearchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
          </div>
        </div>
        <div className={styles.utilCart}>
          <div className={styles.utilCartIcon}>
            <SVGCart />
          </div>
          <a className={styles.utilCartCounter} href="/">
            <span className={styles.utilCartCounterText}>0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
