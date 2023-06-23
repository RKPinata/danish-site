import "../styles/globals.css";

import NavLayout from "@/components/layouts/nav";

function MyApp({ Component, pageProps }) {

  return (
    <NavLayout>
      <Component {...pageProps} />
    </NavLayout>
  );
}

export default MyApp;
