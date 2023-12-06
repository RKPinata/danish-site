import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "@/src/public/assets/works/img_furtory-vet-on-call.PNG";
import slide_image_2 from "@/src/public/assets/works/img_furtory-pet-mall.JPG";
import slide_image_3 from "@/src/public/assets/works/img_dini.png";
import slide_image_4 from "@/src/public/assets/works/img_nft.png";
import slide_image_5 from "@/src/public/assets/works/img_voice-call.png";
import slide_image_6 from "@/src/public/assets/works/img_ordering.PNG";
import slide_image_7 from "@/src/public/assets/works/img_blog.png";

import { useRouter } from "next/router";

function Works() {
  const router = useRouter();

  const clickHandler = (slide) => {
    console.log(slide);
    console.log(router);
    router.push(`/works/${slide}`);
  };

  return (
    <Card className={styles.container}>
      <Swiper
        loop={true}
        speed={1000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles["swiper-container"]}
      >
        <SwiperSlide
          onClick={() => clickHandler("furtory-vet-on-call")}
        >
          <div className={styles["image-title"]}>
            <h1>Furtory Vet on Call</h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_1}
            width="600px"
            height="300px"
          />
        </SwiperSlide>
        <SwiperSlide
        onClick={() => clickHandler("furtory-pet-mall")}>
          <div className={styles["image-title"]}>
            <h1>Furtory Pet Mall</h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_2}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
        onClick={() => clickHandler("dini-videographer-portfolio")}>
          <div className={styles["image-title"]}>
            <h1>Dini Videograper Portfolio</h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_3}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
         onClick={() => clickHandler("nft-drop")}>
          <div className={styles["image-title"]}>
            <h1>NFT Drop Site {"(mock)"}</h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_4}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
         onClick={() => clickHandler("voice-call-app")}>
          <div className={styles["image-title"]}>
            <h1>Voice Call App {"(mock)"} </h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_5}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
         onClick={() => clickHandler("ordering")}>
          <div className={styles["image-title"]}>
            <h1>Ordering Site {"(mock)"} </h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_6}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
        <SwiperSlide
         onClick={() => clickHandler("my-blog")}>
          <div className={styles["image-title"]}>
            <h1>My Blog</h1>
            <p>more info</p>
          </div>
          <Image
            className={styles.image}
            src={slide_image_7}
            width="600px"
            height="300px"
          />{" "}
        </SwiperSlide>
      </Swiper>
      <h2>Swipe</h2>
    </Card>
  );
}

export default Works;
