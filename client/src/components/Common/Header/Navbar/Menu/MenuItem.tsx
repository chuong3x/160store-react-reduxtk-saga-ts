import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";
import Menu from ".";
import { Link } from "react-router-dom";

interface PropsMenuItem {
  name: string;
  title: string;
  isDropRight: boolean;
  linkTo: string;
}

export default function MenuItem({
  name,
  title,
  isDropRight,
  linkTo,
}: PropsMenuItem) {
  return isDropRight ? (
    <>
      <div className={styles.menuItemLink}>
        {title}
        <div className={styles.menuItemLinkIcon}>
          <FontAwesomeIcon icon={faAngleRight} size="sm" />
        </div>
      </div>
      <Menu menuFor={name} isDropRight={isDropRight} />
    </>
  ) : (
    <Link className={styles.menuItemLink} to={linkTo}>
      {title}
    </Link>
  );
}
