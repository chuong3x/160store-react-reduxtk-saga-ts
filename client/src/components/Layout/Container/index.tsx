import { faArrowsRotate, faGift } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Container.module.scss";

export default function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <div className={styles.containerItemIcon}>
          <FontAwesomeIcon icon={faGift} size="3x" />
        </div>
        <span className={styles.containerItemTitle}>
          Kiểm tra hàng trước khi thanh toán
        </span>
      </div>
      <div className={styles.containerItem}>
        <div className={styles.containerItemIcon}>
          <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        </div>
        <span className={styles.containerItemTitle}>
          Kiểm tra hàng trước khi thanh toán
        </span>
      </div>
      <div className={styles.containerItem}>
        <div className={styles.containerItemIcon}>
          <FontAwesomeIcon icon={faArrowsRotate} size="3x" />
        </div>
        <span className={styles.containerItemTitle}>
          Kiểm tra hàng trước khi thanh toán
        </span>
      </div>
    </div>
  );
}
