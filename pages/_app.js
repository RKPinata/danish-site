import GoogleFontsProvider from "@/src/components/layouts/GoogleFontsProvider";
import Layout from "@/src/components/layouts/Layout";
import "@/src/styles/globals.css";

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
