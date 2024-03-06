import { notFound, permanentRedirect } from "next/navigation";
import { getData } from "../utils/getData";
import { Slug } from "../types/types";

export async function generateStaticParams() {
  const params = await fetch(`${process.env.API_URL}/api/auctions`).then(
    (res) => res.json()
  );

  return params.map((slug: Slug) => ({
    slug: slug.slug,
  }));
}

export default async function Page({ params }: { params: Slug }) {
  const data = await getData(params);
  console.log(data);
  if (!data || data[0] === null) {
    notFound();
  } else {
    permanentRedirect(`/produkt/${params.slug}`);
  }
}
