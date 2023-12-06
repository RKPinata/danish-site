import Image from "next/image";
import Link from "next/link";

import styles from "./Profile.module.css";

import myPic from "@/public/danish-img.webp";

import Button from "../UI/Button";
import Card from "../UI/Card";

import { wildWorld } from "@/public/fonts/font-provider";

function Profile() {
  return (
    <>
      <Card className={styles["profile-container"]}>
        <section className={styles["profile-name-img"]}>
          <Image
            src={myPic}
            alt="picture of danish"
            width="1368px"
            height="1368px"
            placeholder="blur"
            className={styles["profile-img"]}
          />
          <h1 style={wildWorld.style} className={styles["profile-name"]}>
            Danish
          </h1>
        </section>
        <section>
          <h1 className={styles["profile-intro"]}>
            I&apos;m a{" "}
            <span className={styles["profile-title"]}>Frontend Developer</span>{" "}
            based in Kuala Lumpur
          </h1>
        </section>
        <section>
          <h3>About Me</h3>
          <p className={styles["profile-paragraph"]}>
            I&apos;m a Frontend Developer who is enthusiastic about creating
            engaging web experiences that combine aesthetics with functionality.
            I&apos;m familiar with the different stages in Web Development:
            planning, prototyping, design and development. With excellent
            problem-solving skills and attention to detail, I&apos;m committed
            to creating intuitive and visually appealing interfaces that enhance
            user engagement.
          </p>
        </section>
        <section>
          <Link href="/works" className={styles["profile-button"]}>
            <Button label="View My Work" />
          </Link>
        </section>
        <section>
          <h3>Experiences</h3>
          <div className={styles["profile-experience"]}>
            <p>March - May 2023</p>
            <div>
              <h4>Junior Frontend Engineer</h4>
              <p className={styles["profile-paragraph"]}>
                I have contributed to multiple projects encompassing various
                domains, including a video call app and an e-commerce app. This
                involved implementing call functionality and designing
                enhancements to improve the overall video call experience.
                Furthermore, I collaborated closely with mobile engineering team
                to develop the Pet Mall app using React Native. This
                comprehensive application serves as a one-stop solution for pet
                owners, enhancing their experience in fulfilling their
                pets&apos; needs.
              </p>
            </div>
          </div>
          <div className={styles["profile-experience"]}>
            <p>2022 - Present</p>
            <div>
              <h4>Web Developer Freelancer</h4>
              <p className={styles["profile-paragraph"]}>
                As a freelance web developer specializing in React.js and
                Next.js, I provide creative and interactive solutions that
                deliver exceptional user experiences. From crafting responsive
                layouts to implementing complex functionalities, I am dedicated
                to bringing my clients&apos; visions to life.
              </p>
            </div>
          </div>
          <div className={styles["profile-experience"]}>
            <p>February - April 2022</p>
            <div>
              <h4>Web Developer Intern</h4>
              <p className={styles["profile-paragraph"]}>
                I am responsible for maintaining, updating, and managing a
                WordPress website. This includes tasks such as regularly
                monitoring the website for any issues, identifying and fixing
                problems that arise, such as broken links, typography errors,
                and broken layouts. Additionally, I ensure that the website is
                kept up to date with the latest software versions and security
                patches. By actively managing and troubleshooting the website, I
                help ensure its smooth functioning and optimal user experience.
              </p>
            </div>
          </div>
          <div className={styles["profile-experience"]}>
            <p>August - December 2021</p>
            <div>
              <h4>Frontend developer Intern</h4>
              <p className={styles["profile-paragraph"]}>
                I designed, developed, and deployed the front-end components of
                the UNS Telemedicine Web App. The app is hosted on the
                university server.
              </p>
            </div>
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
        <section>
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Bahasa Malaysia</li>
            <li>Indonesian</li>
            <li>Mandarin</li>
          </ul>
        </section>
      </Card>
    </>
  );
}

export default Profile;
