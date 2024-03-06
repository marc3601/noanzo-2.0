import { MetadataRoute } from "next";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const products = await fetch(`${process.env.API_URL}/api/auctions`).then(
    (res) => res.json()
  );

  const pages = products.map((product: any) => ({
    url: `https://noanzo.pl/produkt/${product.id}`,
  }));
  pages.push({ url: "https://noanzo.pl" });

  return pages;
}
