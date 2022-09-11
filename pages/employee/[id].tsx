import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { getEmployeeData, getListId } from "../../utils/Employees";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getListId();

  const paths = res.map((employee: { id: number }) => {
    return {
      params: { id: employee.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string | string[] | undefined = params?.id;
  const res = await getEmployeeData(id);

  return {
    props: {
      employee: res,
    },
  };
};

interface Props {
  employee: {
    name: string;
    email: string;
    website: string;
    address: {
      city: string;
    };
  };
}

const Details: FC<Props> = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee List | {employee.name}</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <h1 className="pb-5">{employee.name}</h1>
        <p>{`Email: ${employee.email}`}</p>
        <p>
          Website:{" "}
          <a
            href={"http://" + employee.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {employee.website}
          </a>
        </p>
        <p>{`Adress: ${employee.address.city}`}</p>
      </div>
    </>
  );
};

export default Details;
