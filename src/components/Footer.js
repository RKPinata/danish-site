import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import styles from "./Footer.module.css";

function Footer() {
  const [isPageScrollable, setIsPageScrollable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsPageScrollable(document.body.scrollHeight > window.innerHeight);
    };

    handleResize(); // Check initial scrollable state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.pathname]);

  return (
    <footer className={`${styles.footer} ${isPageScrollable ? '' : styles['no-scroll']}`}>
      &copy; {new Date().getFullYear()} Muhammad Danish. All Rights Reserved.
    </footer>
  );
}

export default Footer;
