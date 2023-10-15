import { BASE_URL } from "@/utils";
import { IBookProps } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = ({ json }: InferGetServerSidePropsType<GetServerSideProps>) => {
  console.log(json);
  return (
    <>
      {json?.results?.map((book: IBookProps) => (
        <div key={book.list_name}>{book.list_name}</div>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/lists`);
  const json = await res.json();
  return { props: { json } };
};

export default Home;
