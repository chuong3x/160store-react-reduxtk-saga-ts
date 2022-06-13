import Gallery from "../Gallery";
import styles from "./Detail.module.scss";
export default function Detail() {
  return (
    <div className={styles.detail}>
      <div className={styles.wrapper}>
        <Gallery />
      </div>
    </div>
  );
}
