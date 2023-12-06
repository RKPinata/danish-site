import { Head, Html, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Hi! I'm Danish, a web wizard🪄" />
        <meta
          name="keywords"
          content="portfolio, web development, programming"
        />
        <meta name="author" content="Danish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
