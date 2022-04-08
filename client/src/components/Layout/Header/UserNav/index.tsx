import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SVGCart from "./cart";

import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./UserNav.module.scss";
import { useAppDispatch } from "app/hooks";
import { siteActions } from "features/site/siteSlice";
import { Link } from "react-router-dom";

export default function UserNav() {
  const dispatch = useAppDispatch();

  const handleShowSite = (showFor: string) => {
    dispatch(siteActions.show(showFor));
  };
  return (
    <div className={styles.util}>
      <div className={styles.utilUser}>
        <Link to="/login" className={styles.utilUserIcon}>
          <FontAwesomeIcon icon={faCircleUser} size="1x" />
        </Link>
      </div>
      <div className={styles.utilSearch}>
        <div
          className={styles.utilSearchIcon}
          onClick={() => handleShowSite("search")}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </div>
      </div>
      <div className={styles.utilCart} onClick={() => handleShowSite("cart")}>
        <div className={styles.utilCartIcon}>
          <SVGCart />
        </div>
        <div className={styles.utilCartCounter}>
          <span className={styles.utilCartCounterText}>0</span>
        </div>
      </div>
    </div>
  );
}
