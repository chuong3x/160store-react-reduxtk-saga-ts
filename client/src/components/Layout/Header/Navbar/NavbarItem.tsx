import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import Menu from "./Menu";

interface PropsNavbarItem {
  name: string;
  title: string;
  isDropDown: boolean;
  linkTo: string;
  isActive: boolean;
}

export default function NavbarItem({
  name,
  title,
  isDropDown,
  linkTo,
  isActive,
}: PropsNavbarItem) {
  return (
    <li
      className={clsx(styles.navListItem, {
        [styles.navListItemDropdown]: isDropDown,
        [styles.navListItemActive]: isActive,
      })}
      key={title}
    >
      {isDropDown ? (
        <>
          <div className={styles.navListItemLink}>
            {title}
            <div className={styles.navListItemLinkIcon}>
              <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </div>
          </div>
          <Menu menuFor={name} />
        </>
      ) : (
        <Link className={styles.navListItemLink} to={linkTo}>
          {title}
        </Link>
      )}
    </li>
  );
}
