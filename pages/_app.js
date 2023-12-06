import "@/src/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import GoogleFontsProvider from "@/components/layouts/GoogleFontsProvider";


function MyApp({ Component, pageProps }) {
  return (
    <GoogleFontsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleFontsProvider>
  );
}

export default MyApp;
