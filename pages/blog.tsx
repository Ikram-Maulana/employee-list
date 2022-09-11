import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getNewsData } from "../utils/Employees";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getNewsData();

  return {
    props: {
      news: res,
    },
  };
};

interface Article {
  summary: string;
  country: string;
  author: string;
  link: string;
  languange: string;
  media: string;
  title: string;
  published_date: string;
  _id: string;
}

interface NewsProps {
  news: {
    articles: Article[];
  };
}

const Blog: FC<NewsProps> = ({ news }) => {
  return (
    <>
      <Head>
        <title>Employee List | About</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <h1 className="pb-5">Blog</h1>
        <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-4">
          {news.articles.map((article) => (
            <a
              href={article.link}
              key={article._id}
              className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:shadow-md"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                loader={({ src }) => src}
                src={article.media}
                className="object-cover w-full h-56"
                width={300}
                height={200}
                alt={article.title}
                unoptimized
              />
              <div className="p-6">
                <h5 className="text-xl font-bold">
                  {article.title.length > 30
                    ? article.title.substring(0, 30) + "..."
                    : article.title}
                </h5>
                <p className="mt-2 text-sm text-gray-500">
                  {article.summary.length > 120
                    ? article.summary.substring(0, 120) + "..."
                    : article.summary}
                </p>
                <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                  Find out more
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
