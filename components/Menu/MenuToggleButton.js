import React, { useEffect } from "react";

import styles from "./MenuToggleButton.module.css";
import { useRouter } from "next/router";

import localFont from "@next/font/local";
const wildWorld = localFont({ src: "../../src/fonts/wild-world.otf" });

function MenuToggleButton(props) {
  const router = useRouter();

  const pathName = router.pathname;

  function getMenuTitle(pathName) {
    const regex = /^\/(\w+)?/;
    const match = pathName.match(regex);
    if (match && match[1]) {
      switch (match[1]) {
        case "works":
          return "WORKS";
        case "contact":
          return "CONTACT";
        default:
          return "PROFILE";
      }
    }
    return "PROFILE";
  }

  const menuLabel = getMenuTitle(pathName);

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${styles["menu-toggle"]} ${
        props.isToggled ? styles["is-toggled"] : ""
      } ${props.isScrolled ? styles["scrolled"] : ""}`}
    >
      <span className={styles["line"]}></span>
      <span className={styles["line"]}></span>
      <span className={styles["line"]}></span>
      <div className={styles["menu-toggle-label"]}>
        <span style={wildWorld.style} className={styles["word"]}>
          {menuLabel}
        </span>
      </div>
    </button>
  );
}

export default MenuToggleButton;
