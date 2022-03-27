import { useAppDispatch, useAppSelector } from "app/hooks";
import clsx from "clsx";
import { menuActions, selectMenu } from "features/menu/menuSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

interface PropsMenu {
  menuFor: string;
  isDropRight?: boolean;
}

export default function Menu({ menuFor, isDropRight }: PropsMenu) {
  const categories = useAppSelector(selectMenu);
  const menuState = categories.find((category) => category.name === menuFor);

  return (
    <ul className={clsx(styles.menu, { [styles.subMenu]: isDropRight })}>
      {menuState &&
        menuState.data.map((menuItem) => {
          return (
            <li
              key={menuItem.name}
              className={clsx(styles.menuItem, {
                [styles.menuItemDropright]: menuItem.isDropRight,
              })}
            >
              {menuItem.isDropRight ? (
                <MenuItem
                  name={menuItem.name}
                  title={menuItem.title}
                  isDropRight={true}
                  linkTo={menuItem.linkTo}
                />
              ) : (
                <Link className={styles.menuItemLink} to={menuItem.linkTo}>
                  {menuItem.title}
                </Link>
              )}
            </li>
          );
        })}
    </ul>
  );
}
