import Head from "next/head";
import Menu from "@/src/components/Menu/Menu";
import Footer from "../Footer";

import { skModernist } from "@/src/public/fonts/font-provider";

const Layout = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danish Portfolio</title>
      </Head>
      <Menu />
      <main className={skModernist.className}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
