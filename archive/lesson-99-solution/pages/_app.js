import Head from "next/head";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
