import Gallery from "@/app/components/Gallery";
import ProductDescription from "@/app/components/ProductDescription";
import Navbar from "@/app/layout/Navbar";
import ProductSection from "@/app/layout/ProductSection";
import Products from "@/app/layout/Products";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Slug } from "@/app/types/types";
import { ProductPage } from "@/app/types/types";
import { getData } from "@/app/utils/getData";

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
    openGraph: {
      title: `${product[0]?.title} - noanzo.pl`,
      description: product[0]?.description,
      locale: "pl",
      images: [
        {
          url: (() => {
            const link = product[0]?.image.filter(
              (item: any) => item.thumbnail === true
            );
            if (!product[0]) {
              notFound();
            }
            if (link[0]?.url) {
              return link[0].url;
            } else {
              return product[0].image[0].url;
            }
          })(),
          alt: product[0]?.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Slug }) {
  const data = await getData(params);
  if (!data || data[0] === null) {
    notFound();
  }
  const product: ProductPage = {
    title: data[0].title,
    description: data[0].description,
    price: data[0].price,
    image: data[0].image,
    imageLarge: data[0].imageLarge,
  };

  return (
    <main>
      <Navbar />
      <div className='container mx-auto sm:w-4/5 lg:w-11/12 xl:sm:w-4/5 p-2'>
        <ProductSection>
          <Gallery product={product} />
          <ProductDescription product={product} />
        </ProductSection>
      </div>
      <Products />
    </main>
  );
}
