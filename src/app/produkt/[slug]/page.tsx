import { Metadata, ResolvedMetadata } from "next";

interface Slug {
  slug: string;
}

interface ProductPage {
  title: string;
  description: string;
}

async function getData(data: Slug) {
  const res = await fetch(
    `https://admin.noanzo.pl/api/auctions?id=${data.slug}`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function generateStaticParams() {
  const params = await fetch("https://admin.noanzo.pl/api/auctions").then(
    (res) => res.json()
  );

  return params.map((slug: Slug) => ({
    slug: slug.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Slug },
  parent: ResolvedMetadata
): Promise<Metadata> {
  const product = await getData(params);

  return {
    title: product[0].title,
    description: product[0].description,
    robots: "index, follow",
  };
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Slug }) {
  const data = await getData(params);
  const product: ProductPage = {
    title: data[0].title,
    description: data[0].description,
  };

  return (
    <div>
      <h1 className='font-bold	'>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
