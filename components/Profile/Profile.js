import React from "react";

import styles from "./Profile.module.css";

import Link from "next/link";

import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Profile() {
  return (
    <div className={styles["profile-container"]}>
      {/* <div>
        <h1>Photo</h1>
        <h2>Muhammad Danish</h2>
      </div> */}
      <h1 className={styles["profile-intro"]}>
        I'm a{" "}
        <span className={styles["profile-title"]}>
          Frontend Developer
        </span>{" "}
        based in Kuala Lumpur
      </h1>
      <section>
        <h3>About Me</h3>
        <p>
          I'm a Frontend Developer and Multimedia Producer. I have 5 years of
          experience in the different stages in Web Development: planning,
          prototyping, Interface design and frontend development. Worked with
          multiple technologies, made multiple webs and apps of different
          industries as logistics, marketing agencies projects or fintechs.
        </p>

        <p>
          Likewise, I love tech and the power it has over people, that’s why I
          believe in continuous learning as a philosophy, the creation of unique
          experiences for the user and the transformation of the world through
          technology.
        </p>
      </section>
      <Link href='/works'>View Works</Link>
      <section>
        <h3>Experience</h3>
        <div className={styles['profile-experience']}>
          <p style={spaceGrotesk.style}>date</p>
          <p>Job</p>
        </div>
      </section>
      <section>
        <h3>Skills & Tech Stack</h3>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React.js & Next.jst</li>
          <li>CSS Modules, Styled Components,TailwindCss, PostCSS</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
