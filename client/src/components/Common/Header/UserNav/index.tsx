import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtdecode from "jwt-decode";
import SVGCart from "./cart";

import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./UserNav.module.scss";
import { useAppDispatch } from "app/hooks";
import { siteActions } from "features/site/siteSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "models";

export default function UserNav() {
  const dispatch = useAppDispatch();

  const initialUser: User = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [user, setUser] = useState(initialUser);

  const handleShowSite = (showFor: string) => {
    dispatch(siteActions.show(showFor));
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const data: User = jwtdecode(token);
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    }
  }, []);

  return (
    <div className={styles.util}>
      <div className={styles.utilUser}>
        {user.email ? (
          <>
            <div className={styles.utilUserIcon}>
              <FontAwesomeIcon icon={faCircleUser} size="1x" />
            </div>
            <div className={styles.utilUserInfo}>
              <div
                className={styles.utilUserInfoItem}
              >{`Chào, ${user.lastName} ${user.firstName}`}</div>
              <div className={styles.utilUserInfoItem}>Đăng xuất</div>
            </div>
          </>
        ) : (
          <Link to="/login" className={styles.utilUserIcon}>
            <FontAwesomeIcon icon={faCircleUser} size="1x" />
          </Link>
        )}
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
