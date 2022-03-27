import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";

interface PropsMenuItem {
  name: string;
  title: string;
  isDropRight: boolean;
}

export default function MenuItem({ name, title, isDropRight }: PropsMenuItem) {
  return isDropRight ? (
    <>
      <div className={styles.menuItemLink}>
        {title}
        <div className={styles.menuItemLinkIcon}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <ul className={styles.subMenu}>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuItemLink}>
            ÁO SƠ MI
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuItemLink}>
            ÁO THUN
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/" className={styles.menuItemLink}>
            ÁO KHOÁC PHAO NATIONAL
          </a>
        </li>
      </ul>
    </>
  ) : (
    <a className={styles.menuItemLink} href="/">
      {title}
    </a>
  );
}
