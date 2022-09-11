import Head from "next/head";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <Head>
        <title>Employee List | About</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div className="about">
        <h1>About</h1>
        <p>
          Hello, I{"'"}m <b>Ikram</b>. A Full-stack web developer and UI
          designer. I am someone who is very interested in the world of IT and
          the creative industry, where I can explore and imagine expressing my
          ideas visually. I am very happy to learn new things to add insight and
          feel challenged to learn it.
        </p>
      </div>
    </>
  );
};

export default About;
