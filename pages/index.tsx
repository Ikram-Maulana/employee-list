import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// Styles
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Employee List | Home</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illo
          aut nulla deserunt. Nulla excepturi, aliquid quas quasi ea ullam!
          Maiores ducimus magni consectetur. Pariatur perferendis cum placeat
          recusandae aut!
        </p>
        <Link href="/employee">
          <a className={styles.btn}>See Employee Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
