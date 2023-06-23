import React from "react";

import styles from "./MenuArcs.module.css";

function MenuArcs(props) {
  return (
    <div
      className={`${styles["menu-arcs-wrapper"]} ${
        props.isToggled ? styles["is-toggled"] : ""
      } `}
    >
      <svg className={styles["menu-arcs"]}>
        <circle
          className={styles["menu-arc"]}
          cx="50%"
          cy="50%"
          r="18%"
        ></circle>
        <circle
          className={styles["menu-arc"]}
          cx="50%"
          cy="50%"
          r="30%"
        ></circle>
        <circle
          className={styles["menu-arc"]}
          cx="50%"
          cy="50%"
          r="42%"
        ></circle>
      </svg>
    </div>
  );
}

export default MenuArcs;
