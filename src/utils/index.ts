import { IBook } from "@/types";

export const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export function getLists(): Promise<{ results: IBook[] }> {
  return fetch(`${BASE_URL}/lists`).then((r) => r.json());
}

export function getHardCover() {
  return fetch(`${BASE_URL}/lists?name=hardcover-fiction`).then((r) =>
    r.json()
  );
}
