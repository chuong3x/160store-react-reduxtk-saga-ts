import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Selected.module.scss";

const Selected = () => {
  return (
    <span className={styles.checked}>
      <FontAwesomeIcon
        className={styles.checkedIcon}
        icon={faCheck}
        size="xs"
        color="white"
      />
    </span>
  );
};

export default Selected;
