import Link from "next/link";
import { BASE_URL } from "@/utils";
import { IListProps } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = ({ json }: InferGetServerSidePropsType<GetServerSideProps>) => {
  // console.log(json.results);
  return (
    <div className="container">
      <h1>The New York Times Best Seller Explorer</h1>
      <div className="bookListContainer">
        {json?.results?.map((book: IListProps) => (
          <Link
            href={{
              pathname: "/list/[id]",
              query: { id: book.list_name_encoded },
            }}
            key={book.list_name}
          >
            <div className="bookListName">{book.list_name} &rarr; </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        h1 {
          text-transform: uppercase;
          font-size: 42px;
          padding: 25px 40px;
          font-weight: 800;
        }
        .bookListContainer {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0 60px;
        }
        .bookListName {
          padding: 20px 15px;
          margin: 15px;
          font-size: 18px;
          box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
          &:hover {
            animation: scaleUpDown 0.8s ease-in-out infinite;
          }
        }
        @keyframes scaleUpDown {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/lists`);
  const json = await res.json();
  return { props: { json } };
};

export default Home;
