import styles from "./Topbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContent}>
        <p>FREESHIP TOÀN QUỐC ĐƠN HÀNG TỪ 500K</p>
      </div>
      <div className={styles.topbarHotline}>
        <a
          className={clsx(styles.topbarHotline__phone, styles.shake)}
          href="tel:0798328798"
        >
          <FontAwesomeIcon icon={faPhone} size="xs" />
        </a>
        <span className={styles.topbarHotline__text}>
          Hotline: 079.832.8798
        </span>
      </div>
    </div>
  );
}
