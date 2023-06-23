import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./Menu.module.css";

import MenuToggleButton from "./MenuToggleButton";
import MenuArcs from "./MenuArcs";
import MenuBackground from "./MenuBackground";
import MenuLinks from "./MenuLinks";
import Link from "next/link";
import MenuSocials from "./MenuSocials";

function Menu() {
  const [menuToggled, setMenuToggled] = useState(false);
  const router = useRouter();

  const toggleMenuHandler = () => {
    setMenuToggled(!menuToggled)
  }

  /* useEffect(() => {
    if (router.asPath === "/") {
      setTimeout(setMenuToggled(true), 200)
    } else {
      setTimeout(setMenuToggled(false), 200)
    }
  },[router.asPath]) */

  useEffect(() => {
      setTimeout(setMenuToggled(true), 200)
  },[])

  useEffect(() => {
    toggleMenuHandler();
},[router.asPath])

  return (
    <div className={`${styles['menu-container']} ${menuToggled ? styles['menu-toggled'] : ''}`}>
      <div className={styles.menu}>
        <MenuToggleButton onClick={toggleMenuHandler} type="button" isToggled={menuToggled}/>
        <MenuBackground isToggled={menuToggled}/>
        <MenuArcs isToggled={menuToggled}/>
        <MenuLinks isToggled={menuToggled} onToggleMenu={toggleMenuHandler}/>
        {/* <MenuSocials isToggled={menuToggled}/> */}

      </div>
    </div>
  );
}

export default Menu;
