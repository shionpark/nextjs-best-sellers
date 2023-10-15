import { getHardCover, getLists } from "@/utils";

export default async function Home() {
  const data = await getLists();
  return (
    <>
      <h1>Home</h1>
      <ul>
        {data.results.map((list, idx) => (
          <li style={{ border: "1px solid white", margin: "10px" }} key={idx}>
            {list.list_name} &rarr;
          </li>
        ))}
      </ul>
    </>
  );
}
