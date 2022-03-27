import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SVGCart from "./cart";

import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./UserNav.module.scss";

export default function UserNav() {
  return (
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
  );
}
