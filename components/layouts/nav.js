import Head from "next/head";
import Menu from "@/components/Menu/Menu";
import Footer from "../Footer";

const Layout = ({ skModernist, spaceGrotesk, children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danish Portfolio</title>
      </Head>
      <Menu />
      <main className={skModernist.className}>{children}</main>
      <Footer spaceGrotesk={spaceGrotesk}/>
    </>
  );
};

export default Layout;
