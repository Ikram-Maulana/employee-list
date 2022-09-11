import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const NotFound: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Employee List | 404 Not Found</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
