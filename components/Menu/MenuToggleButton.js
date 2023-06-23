import React from "react";

import styles from "./MenuToggleButton.module.css";
import { useRouter } from "next/router";

import localFont from '@next/font/local'
const wildWorld = localFont({src:'../../fonts/wild-world.otf'})

function MenuToggleButton(props) {
  const router = useRouter();

  const pathName = router.pathname
  
  function getMenuTitle(pathName) {
    switch (pathName) {
      case '/works':
        return 'WORKS';
      case '/':
        return 'PROFILE';
      case '/contact':
        return 'CONTACT';
      default:
        return '';
    }
  }

  const menuLabel = getMenuTitle(pathName)
  
  

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
        <span style={wildWorld.style} className={styles["word"]}>{menuLabel}</span>
      </div>
    </button>
  );
}

export default MenuToggleButton;
