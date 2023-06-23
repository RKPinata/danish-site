import React from "react";

import styles from "./MenuToggleButton.module.css";

function MenuToggleButton(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${styles["menu-toggle"]} ${
        props.isToggled ? styles["is-toggled"] : ""
      } `}
    >
      <span className={styles["line"]}></span>
      <span className={styles["line"]}></span>
      <span className={styles["line"]}></span>
      <div className={styles["menu-toggle-label"]}>
        <span className={styles["word"]}>Danish's</span>
        <span className={styles["word"]}>Works</span>
      </div>
    </button>
  );
}

export default MenuToggleButton;
