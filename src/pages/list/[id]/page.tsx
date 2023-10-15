// export async function generateStaticParams() {
//   const data = await fetch(GET_LIST).then((res) => res.json());
//   //   console.log(data.results);
//   return data.results.map((book: any) => ({
//     id: book.list_name,
//   }));
// }

export default function Page({ params }: { params: { id: string } }) {
  //   console.log(params.id);
  return <div>My Post: {params.id}</div>;
}
