import React from "react";

import styles from "./MenuNav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuNav(props) {
  const router = useRouter();
  return (
    <div
      className={`${styles["link-container"]} ${
        props.isToggled ? styles["is-toggled"] : ""
      } `}
    >
      <Link
        className={styles.link}
        href="/"
        onClick={router.asPath === "/" && props.onToggleMenu}
      >
        <span className={styles.anchor}></span>
        <span className={styles.index}>01</span>
        <span className={styles.label}>Profile</span>
      </Link>
      <Link
        className={styles.link}
        href="/works"
        onClick={router.asPath === "/works" && props.onToggleMenu}
      >
        <span className={styles.anchor}></span>
        <span className={styles.index}>02</span>
        <span className={styles.label}>Works</span>
      </Link>
      <Link
        className={styles.link}
        href="/contact"
        onClick={router.asPath === "/contact" && props.onToggleMenu}
      >
        <span className={styles.anchor}></span>
        <span className={styles.index}>03</span>
        <span className={styles.label}>Planet</span>
      </Link>
      <Link
        className={styles.link}
        href="/contact"
        onClick={router.asPath === "/contact" && props.onToggleMenu}
      >
        <span className={styles.anchor}></span>
        <span className={styles.index}>04</span>
        <span className={styles.label}>Contact</span>
      </Link>
    </div>
  );
}

export default MenuNav;
