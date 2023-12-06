import styles from "./Button.module.css";

import { wildWorld } from "@/src/public/fonts/font-provider";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft} />
      <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft} />
      <span style={wildWorld.style} className={styles.label}>
        {props.label}
      </span>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
      <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
    </button>
  );
}

export default Button;
