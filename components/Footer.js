import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import styles from "./Footer.module.css";

import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <footer style={spaceGrotesk.style} className={`${styles.footer} ${isPageScrollable ? '' : styles['no-scroll']}`}>
      &copy; {new Date().getFullYear()} Muhammad Danish. All Rights Reserved.
    </footer>
  );
}

export default Footer;
