import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Profile.module.css";

import myPic from "@/public/danish-img.webp"

import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Profile() {
  return (
    <div className={styles["profile-container"]}>
      <section>
        <Image src={myPic} alt='picture of danish' width='1368px' height='1368px' placeholder="blur" className={styles['profile-img']} />
      </section>
      <section>
        <h1 className={styles["profile-intro"]}>
          I&apos;m a <span className={styles["profile-title"]}>Frontend Developer</span>{" "}
          based in Kuala Lumpur
        </h1>
      </section>
      <section>
        <h3>About Me</h3>
        <p>
          I&apos;m a Frontend Developer who is enthusiastic about creating engaging web experiences that combine aesthetics with functionality. I have 
          experience in the different stages in Web Development: planning,
          prototyping, design and development. With excellent problem-solving skills and attention to detail, I&apos;m committed to creating intuitive and visually appealing interfaces that enhance user engagement.
        </p>

      </section>
      <Link href="/works">View Works</Link>
      <section>
        <h3>Experience</h3>
        <div className={styles["profile-experience"]}>
          <p style={spaceGrotesk.style}>date</p>
          <p>Job</p>
        </div>
      </section>
      <section>
        <h3>Skills & Tech Stack</h3>
        <ul>
          <li>HTML5, CSS3, JavaScript, Typescript</li>
          <li>React.js & Next.js, React Native</li>
          <li>CSS Modules, Styled Components, TailwindCss, PostCSS</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
