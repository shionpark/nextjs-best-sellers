import { IBook, IBookProps } from "@/types";
import { BASE_URL } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id : ", id);

  const [data, setData] = useState<IBookProps | undefined>();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`${BASE_URL}/list?name=${id}`)
      ).json();
      setData(results);
    })();
  }, [id]);

  return (
    <div className="wrap">
      <h1 className="title">{id}</h1>
      <div className="bookContainer">
        {data?.books?.map((book: IBook, idx) => (
          <div className="bookItem" key={idx}>
            <Image
              src={book.book_image}
              width={260}
              height={320}
              alt={book.title}
            />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <div className="buyBtn">
              <Link href={book.amazon_product_url}>Buy now &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .bookContainer {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding-bottom: 30px;
        }
        .bookItem {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 0;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
        h2 {
          margin-top: 15px;
          font-size: 24px;
        }
        h3 {
          color: #1373d8;
          margin-top: 7px;
          font-size: 14px;
        }
        .buyBtn {
          padding: 8px;
          border: 1px solid black;
          border-radius: 10px;
          margin-top: 7px;
        }
      `}</style>
    </div>
  );
}
