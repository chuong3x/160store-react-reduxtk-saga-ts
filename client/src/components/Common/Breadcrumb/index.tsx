import clsx from "clsx";
import styles from "./Breadcrumb.module.scss";
export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <ol className={styles.menu}>
        <li className={clsx(styles.menuItem, styles["menuItem--first"])}>
          Trang chủ
        </li>
        <li className={styles.menuItem}>Sản phẩm mới</li>
        <li className={styles.menuItem}>Áo sơ mi</li>
      </ol>
    </div>
  );
}
