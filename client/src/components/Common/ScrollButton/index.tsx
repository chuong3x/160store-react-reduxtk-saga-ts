import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ScrollButton.module.scss";

export default function ScrollButton() {
  return (
    <div className={styles.scrollButton}>
      <div className={styles.scrollButtonIcon}>
        <FontAwesomeIcon icon={faAngleUp} size="1x" />
      </div>
    </div>
  );
}
