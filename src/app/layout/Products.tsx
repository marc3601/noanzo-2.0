"use client";

import React from "react";
import Badge from "../components/Badge";
import useSWR from "swr";
import Link from "next/link";
import { shuffle } from "../utils/shuffle";

interface ImageItem {
  url: string;
  thumbnail?: boolean;
}

interface Auction {
  description: string;
  gif: {
    width: number;
    height: number;
    url: string;
  };
  image: ImageItem[];
  price: number;
  title: string;
  id: string;
  promotion: number;
}

export type BadgeData = {
  title: string;
  link: string;
  slug: string;
  promoted: boolean;
};

type ProductsProps = {
  excludeSlug?: string;
};

const fetcher = (link: string) => fetch(link).then((res) => res.json());

const Products = ({ excludeSlug }: ProductsProps) => {
  const { data, error, isLoading } = useSWR<Auction[]>(
    "https://admin.noanzo.pl/api/auctions",
    fetcher
  );

  if (error)
    return (
      <div>
        <p className="text-center">
          <b>Coś poszło nie tak...</b>
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 gap-4 md:gap-5 lg:gap-6 p-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl h-52 bg-outline-color"
          ></div>
        ))}
      </div>
    );

  // Filter out current product if excludeSlug is provided
  const filteredData = excludeSlug
    ? data.filter((item) => item.id !== excludeSlug)
    : data;

  // Promotion logic
  const promoted = filteredData.filter((item) => item.promotion > 0);
  const regular = filteredData.filter((item) => item.promotion === 0);

  let orderedItems: Auction[];

  if (promoted.length > 0) {
    const sortedPromoted = [...promoted].sort((a, b) => a.promotion - b.promotion);
    orderedItems = [...sortedPromoted, ...shuffle(regular)];
  } else {
    orderedItems = shuffle(filteredData);
  }

  const thumbnails: BadgeData[] = orderedItems.map((item) => {
    let thumb = item.image.filter((img) => img.thumbnail === true);
    if (thumb.length === 0) {
      thumb = [item.image[0]];
    }

    return {
      title: item.title,
      link: thumb[0].url,
      slug: item.id,
      promoted: item.promotion > 0,
    };
  });

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 gap-4 md:gap-5 lg:gap-6 p-2">
      {thumbnails.map((data) => (
        <Link key={data.slug} href={`/produkt/${data.slug}`}>
          <div
            className={`
              relative rounded-2xl transition-all duration-300
              ${data.promoted
                ? `
                  p-[1px]
                  bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400
                  shadow-[0_0_10px_rgba(255,165,0,0.4)]
                  hover:shadow-[0_0_16px_rgba(255,165,0,0.65)]
                  hover:-translate-y-0.5
                `
                : ""
              }
            `}
          >
            <div className="rounded-2xl bg-background-color h-full overflow-hidden">
              <Badge data={data} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;