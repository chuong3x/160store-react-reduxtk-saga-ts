import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MemberButton.module.scss";

export default function MemberButton() {
  return (
    <div className={styles.memberButton}>
      <div className={styles.memberButtonIcon}>
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </div>
    </div>
  );
}
