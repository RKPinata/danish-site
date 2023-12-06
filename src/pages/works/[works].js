import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./works.module.css";

import Card from "@/src/components/UI/Card";
import worksData from "@/src/data/works-data";

import Button from "@/src/components/UI/Button";

function Works() {
  const router = useRouter();
  const { works } = router.query;

  const formatString = (string) => {
    if (string) {
      return string.toLowerCase().replace(/-|\s/g, "");
    }
    return "";
  };

  const workPath = formatString(works);
  const workData = worksData[workPath];
  console.log(workData);

  const backHandler = () => {
    router.back();
  };

  return (
    <>
      {workData && (
        <Card className={styles.container}>
          <section>
            <h1>{workData.title}</h1>
            <p>{workData.description}</p>
            <ul>
              {workData.stack && <li>{`Stack: ${workData.stack}`}</li>}
              {workData.github && (
                <li>
                  Link: <Link href={workData.github}>{workData.github}</Link>
                </li>
              )}
              {workData.link && (
                <li>
                  Link: <Link href={workData.link}>{workData.link}</Link>
                </li>
              )}
            </ul>
          </section>
          {workData.images && (
            <section className={styles["image-section"]}>
              {workData.images.mobile && (
                <>
                  <h2>Mobile Images</h2>
                  <div className={styles["image-container"]}>
                    {Object.values(workData.images.mobile).map(
                      (image, index) => (
                        <Image
                          height="600px"
                          width="300px"
                          src={image}
                          alt={`Mobile Image ${index + 1}`}
                          key={index}
                          className={styles["image-mobile"]}
                        />
                      )
                    )}
                  </div>
                </>
              )}
              {workData.images.desktop && (
                <>
                  <h2>Desktop Images</h2>
                  <div className={styles["image-container"]}>
                    {Object.values(workData.images.desktop).map(
                      (image, index) => (
                        <Image
                          height="1080px"
                          width="1920px"
                          src={image}
                          alt={`Desktop Image ${index + 1}`}
                          key={index}
                          className={styles["image-desktop"]}
                        />
                      )
                    )}
                  </div>
                </>
              )}
            </section>
          )}
          <Button label="Back to Works" onClick={backHandler} />
        </Card>
      )}
    </>
  );
}
export default Works;
