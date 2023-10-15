// import { IBook } from "@/types";

export const BASE_URL = "https://books-api.nomadcoders.workers.dev";

// export function getLists(): Promise<{ results: IBook[] }> {
//   return fetch(`${BASE_URL}/lists`).then((r) => r.json());
// }

export async function getLists() {
  const res = await fetch(`${BASE_URL}/lists`);
  const json = await res.json();
  return json;
}

export function getHardCover() {
  return fetch(`${BASE_URL}/lists?name=hardcover-fiction`).then((r) =>
    r.json()
  );
}
