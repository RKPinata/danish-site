import React from "react";
import styles from "./MenuSocials.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "animate.css";

function MenuSocials(props) {
  return (
    <div
      className={props.isToggled ? styles["is-toggled"] : ""}
      id={styles["menu-socials"]}
    >
      <Link href="https://github.com/RKPinata" className={styles.link}>
        <FontAwesomeIcon
          icon={faGithub}
          className={`${styles["link-icon"]} animate__animated animate__headShake`}
        ></FontAwesomeIcon>
      </Link>
      <Link href="www.linkedin.com/in/danishteuku/" className={styles.link}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${styles["link-icon"]} animate__animated animate__headShake`}
        ></FontAwesomeIcon>
      </Link>
      <Link href="https://twitter.com/teukudanish" className={styles.link}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={`${styles["link-icon"]} animate__animated animate__headShake`}
        ></FontAwesomeIcon>
      </Link>
      <Link
        href="https://www.instagram.com/teukudanish/"
        className={styles.link}
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className={`${styles["link-icon"]} animate__animated animate__headShake`}
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
}

export default MenuSocials;
