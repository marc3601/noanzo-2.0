import { Slug } from "../types/types";

export async function getData(data: Slug) {
  const res = await fetch(
    `${process.env.API_URL}/api/auctions?id=${data.slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
