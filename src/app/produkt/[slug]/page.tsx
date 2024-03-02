import Gallery from "@/app/components/Gallery";
import ProductDescription from "@/app/components/ProductDescription";
import Navbar from "@/app/layout/Navbar";
import ProductSection from "@/app/layout/ProductSection";
import Products from "@/app/layout/Products";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Slug {
  slug: string;
}

export interface ProductPage {
  price: string;
  title: string;
  description: string;
}

async function getData(data: Slug) {
  const res = await fetch(
    `${process.env.API_URL}/api/auctions?id=${data.slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export async function generateStaticParams() {
  const params = await fetch(`${process.env.API_URL}/api/auctions`).then(
    (res) => res.json()
  );

  return params.map((slug: Slug) => ({
    slug: slug.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Slug },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getData(params);
  return {
    title: `${product[0]?.title} - noanzo.pl`,
    description: product[0]?.description,
    robots: "index, follow",
  };
}

// export const dynamicParams = false;

export default async function Page({ params }: { params: Slug }) {
  const data = await getData(params);
  if (!data || data[0] === null) {
    notFound();
  }
  const product: ProductPage = {
    title: data[0].title,
    description: data[0].description,
    price: data[0].price,
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto sm:w-4/5 p-2'>
        <ProductSection>
          <Gallery images={data[0].image} />
          <ProductDescription product={product} />
        </ProductSection>
      </div>
      <Products />
    </>
  );
}
