import { MetadataRoute } from "next";

export const preferredRegion = ["fra1"];
export const dynamic = "force-dynamic";
export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const products = await fetch(`https://admin.noanzo.pl/api/auctions`).then(
    (res) => res.json()
  );

  const pages = products.map((product: any) => ({
    url: `https://noanzo.pl/produkt/${product.id}`,
  }));
  pages.push({ url: "https://noanzo.pl" });

  return pages;
}
