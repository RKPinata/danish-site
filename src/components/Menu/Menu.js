import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Menu.module.css";

import MenuToggleButton from "./MenuToggleButton";
import MenuArcs from "./MenuArcs";
import MenuBackground from "./MenuBackground";
import MenuLinks from "./MenuLinks";

function Menu() {
  const [menuToggled, setMenuToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenuHandler = () => {
    setMenuToggled(!menuToggled);
  };

  useEffect(() => {
    setMenuToggled(true);

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      className={`${styles["menu-container"]} ${
        menuToggled ? styles["menu-toggled"] : ""
      }`}
    >
      
      <div className={`${styles["menu-bg"]} ${
        isScrolled ? styles["scrolled"] : ""
      }`}/>
      <div className={styles.menu}>
        <MenuToggleButton
          onClick={toggleMenuHandler}
          type="button"
          isToggled={menuToggled}
          isScrolled={isScrolled}
        />
        <MenuBackground isToggled={menuToggled} />
        <MenuArcs isToggled={menuToggled} />
        <MenuLinks isToggled={menuToggled} onToggleMenu={toggleMenuHandler} />
      </div>
    </div>
  );
}

export default Menu;
