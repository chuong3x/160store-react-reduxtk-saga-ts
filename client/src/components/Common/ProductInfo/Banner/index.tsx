import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Banner.module.scss";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.item}>
        <div className="product-banner-item__icon">
          <FontAwesomeIcon icon={faGift} size="2x" />
        </div>
        <span className={styles.itemText}>FREESHIP đơn hàng trên 500K</span>
      </div>
      <div className={styles.item}>
        <div className="product-banner-item__icon">
          <FontAwesomeIcon icon={faCircleCheck} size="2x" />
        </div>
        <span className={styles.itemText}>
          Kiểm tra hàng trước khi thanh toán
        </span>
      </div>
      <div className={styles.item}>
        <div className="product-banner-item__icon">
          <FontAwesomeIcon icon={faArrowsRotate} size="2x" />
        </div>
        <span className={styles.itemText}>Đổi trả trong vòng 7 ngày</span>
      </div>
    </div>
  );
}
