import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwtdecode from "jwt-decode";
import clsx from "clsx";
import SVGCart from "./cart";

import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./UserNav.module.scss";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { siteActions } from "features/site/siteSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "models";
import { authActions, selectIsLoggedIn } from "features/auth/authSlice";

export default function UserNav() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
    if (isLoggedIn && token) {
      const data: User = jwtdecode(token);
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    } else {
      setUser(initialUser);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(authActions.logout(user));
  };

  return (
    <div className={styles.util}>
      <div className={clsx(styles.utilUser, { [styles.loggedIn]: isLoggedIn })}>
        {isLoggedIn ? (
          <>
            <div className={styles.utilUserIcon}>
              <FontAwesomeIcon icon={faCircleUser} size="1x" />
            </div>
            <div className={styles.utilUserInfo}>
              <Link
                to="/dashboard"
                className={styles.utilUserInfoItem}
              >{`Chào, ${user.lastName} ${user.firstName}`}</Link>
              <div className={styles.utilUserInfoItem} onClick={handleLogout}>
                Đăng xuất
              </div>
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
