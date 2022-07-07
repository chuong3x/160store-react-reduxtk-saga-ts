import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InstockStore.module.scss";
export default function InstockStore() {
  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>11 Cửa hàng còn sản phẩm này</h2>
        <div className={styles.titleIcon}>
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
    </div>
  );
}
