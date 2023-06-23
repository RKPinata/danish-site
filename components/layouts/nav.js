import Head from "next/head";
import Menu from "@/components/Menu/Menu"
import Footer from "../Footer";

const Layout = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danish Portfolio</title>
      </Head>
      <Menu/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
