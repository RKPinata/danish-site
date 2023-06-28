export const furtoryVetOnCall = {
  title: "Furtory Vet On Call",
  description:
    "Vet On Call is an app that connects vets and client through video call service provided by Furtory. The app was built upon Sendbird SDK as an API solution that handles the video call infrastructure. I worked with the furtory engineering team for the implementation of the call functionality, designed improvements for video call experience, and supported in deployment on Alibaba Cloud and Vercel. Unfortunately, the app is no longer working as operations has seized. The link below is my fork when I was working on the project.",
  stack: "React, Typescript, styled-components, Sendbird  ",
  github: "https://github.com/RKPinata/furtory-vet-on-call-client-webapp",
  link: "https://furtory-vet-on-call-client-webapp.vercel.app",
  /* images: {
    mobile: {
      image1: "",
      image2: "",
      image3: "",
    },
    desktop: {
      image1: "",
      image2: "",
      image3: "",
    },
  }, */
  video: "",
};

import diniMobile1 from "@/public/assets/works/dini-notebook/IMG_1.png";
import diniMobile2 from "@/public/assets/works/dini-notebook/IMG_2.png";
import diniMobile3 from "@/public/assets/works/dini-notebook/IMG_3.png";
import dini1 from "@/public/assets/works/dini-notebook/IMG_4.png";
import dini2 from "@/public/assets/works/dini-notebook/IMG_5.png";
import dini3 from "@/public/assets/works/dini-notebook/IMG_6.png";

export const diniVideographerPortfolio = {
  title: "Dini Videographer Portfolio",
  description:
    "This portfolio was made for a client - Dini Tan to showcase her works as a local videographer/video editer.",
  stack: "React + Vite, TailwindCss",
  github: "https://github.com/RKPinata/dini-portfolio",
  link: "https://dininotebook.vercel.app",
  images: {
    mobile: {
      image1: diniMobile1,
      image2: diniMobile2,
      image3: diniMobile3,
    },
    desktop: {
      image1: dini1,
      image2: dini2,
      image3: dini3,
    },
  },
};

import petMallMobile1 from "@/public/assets/works/furtory-pet-mall/IMG_1.JPG";

export const furtoryPetMall = {
  title: "Furtory Pet Mall",
  description:
    "Furtory Pet Mall is an e-commerce web/mobile app for pet owners to shop for their pet needs. I have contributed to the improvement of the app UX improvements and collaborated with the mobile engineer and brought the app to ios and android platforms with React Native. Unfortunately, the app is no longer working as operations has seized.",
  stack: "Shopify, React Native",
  github: "https://github.com/furtoryapp/furtory-mobile",
  images: {
    mobile: {
      image1: petMallMobile1,
    },
  },
};

import nftDrop1 from "@/public/assets/works/nftdrop/IMG_1.png";
import nftDrop2 from "@/public/assets/works/nftdrop/IMG_2.png";
import nftDrop3 from "@/public/assets/works/nftdrop/IMG_3.png";
import nftDrop4 from "@/public/assets/works/nftdrop/IMG_4.png";

export const nftDrop = {
  title: "NFT Drop Site (Mock)",
  description:
    "This project is a mock site I made when I was learning to integrate crypto wallet auth to the frontend. The wallet connection works, but the NFT drop function(ownership transfer) has not been implemented.",
  stack: "React + Nextjs, TailwindCss, Typescript",
  github: "https://github.com/RKPinata/nftdrop",
  link: "https://danishnftdrop.vercel.app/",
  images: {
    mobile: {
      image1: nftDrop1,
    },
    desktop: {
      image1: nftDrop2,
      image2: nftDrop3,
      image3: nftDrop4,
    },
  },
};

import voiceCall1 from "@/public/assets/works/voice-call-app/IMG_1.png";
import voiceCall2 from "@/public/assets/works/voice-call-app/IMG_2.png";
import voiceCall3 from "@/public/assets/works/voice-call-app/IMG_3.png";
import voiceCall4 from "@/public/assets/works/voice-call-app/IMG_4.png";

export const voiceCallApp = {
  title: "Voice Call App",
  description:
    "I developed a simple web app that enables communication through voice calls and messaging features. Users are able to join as a listener, speaker, or moderator. The app was built upon 100ms SDK as an API solution that handles the voice call infrastructure.",
  stack: "React, TailwindCss",
  github: "https://github.com/RKPinata/voice-call-app",
  link: "https://danishvoice.vercel.app/",
  images: {
    mobile: {
      image1: voiceCall1,
      image2: voiceCall2,
      image3: voiceCall3,
    },
    desktop: {
      image1: voiceCall4,
    },
  },
};

import ordering1 from "@/public/assets/works/food-ordering/IMG_1.png";
import ordering2 from "@/public/assets/works/food-ordering/IMG_2.png";

export const ordering = {
  title: "Food Ordering Site (mock)",
  description:
    "I made this site as a practice for handling various react hooks. The cart mechanism works but it lacks connection to any real backend. ",
  stack: "React",
  github: "https://github.com/RKPinata/ordering-app",
  link: "https://danishordering.vercel.app/",
  images: {
    desktop: {
      image1: ordering1,
      image2: ordering2,
    },
  },
};

import myBlog1 from "@/public/assets/works/blog/IMG_1.png";
import myBlog2 from "@/public/assets/works/blog/IMG_2.png";
import myBlog3 from "@/public/assets/works/blog/IMG_3.png";
import myBlog4 from "@/public/assets/works/blog/IMG_4.png";
import myBlog5 from "@/public/assets/works/blog/IMG_5.png";
import myBlog6 from "@/public/assets/works/blog/IMG_6.png";

export const myBlog = {
  title: "My Blog",
  description:
    "I made this blog for me to share my thought and experiences.It has a light and dark mode, for readers with preferances.",
  stack: "React + Nextjs, TailwindCss",
  github: "https://github.com/RKPinata/danishblog",
  link: "https://danishblog.netlify.app/",
  images: {
    mobile: {
      image1: myBlog1,
      image2: myBlog2,
      image3: myBlog3,
    },
    desktop: {
      image1: myBlog4,
      image2: myBlog5,
      image3: myBlog6,
    },
  },
};

const worksData = {
  dinivideographerportfolio: diniVideographerPortfolio,
  furtoryvetoncall: furtoryVetOnCall,
  furtorypetmall: furtoryPetMall,
  nftdrop: nftDrop,
  voicecallapp: voiceCallApp,
  ordering: ordering,
  myblog: myBlog,
};

export default worksData;
