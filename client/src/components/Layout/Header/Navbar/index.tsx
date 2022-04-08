import { useAppDispatch, useAppSelector } from "app/hooks";
import { menuActions } from "features/menu/menuSlice";
import {
  navigationActions,
  selectNavigation,
} from "features/navigation/navigationSlice";
import { Navigation } from "models";
import { useEffect } from "react";
import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navState = useAppSelector(selectNavigation);

  useEffect(() => {
    dispatch(navigationActions.getNavigation());
  }, [dispatch]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navState.map((item: Navigation) => (
          <NavbarItem
            key={item.key}
            name={item.key}
            title={item.title}
            isDropDown={item.isDropDown}
            isActive={item.isActive}
            linkTo={item.linkTo}
          />
        ))}
      </ul>
    </nav>
  );
}
