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

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden animate-pulse">
    <div className="h-48 sm:h-44 bg-[#e0d4cf]" />
    <div className="h-10 bg-[#c9b5ae]" />
  </div>
);

const Products = ({ excludeSlug }: ProductsProps) => {
  const { data, error, isLoading } = useSWR<Auction[]>(
    "https://admin.noanzo.pl/api/auctions",
    fetcher
  );

  return (
    <section id="products" className="container mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 px-4 pt-4 pb-10 md:pt-6 md:pb-14">

      {/* Section header */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span
            className="h-px w-8 rounded"
            style={{ background: "linear-gradient(90deg, transparent, #4C2922)" }}
          />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7a4438]">
            Oferta
          </span>
          <span
            className="h-px w-8 rounded"
            style={{ background: "linear-gradient(90deg, #4C2922, transparent)" }}
          />
        </div>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[1.2] pb-1"
          style={{ color: "#2a1510" }}
        >
          Nasze{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7a3d2e, #4C2922)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            produkty
          </span>
        </h2>
      </div>

      {/* Error state */}
      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-[#7a5a53]">
          <svg className="w-10 h-10 mb-3 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p className="font-semibold text-sm">Coś poszło nie tak...</p>
          <p className="text-xs mt-1 opacity-60">Spróbuj odświeżyć stronę</p>
        </div>
      )}

      {/* Loading skeleton */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Product grid */}
      {data && (() => {
        const filteredData = excludeSlug
          ? data.filter((item) => item.id !== excludeSlug)
          : data;

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
          if (thumb.length === 0) thumb = [item.image[0]];
          return {
            title: item.title,
            link: thumb[0].url,
            slug: item.id,
            promoted: item.promotion > 0,
          };
        });

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {thumbnails.map((badge) => (
              <Link key={badge.slug} href={`/produkt/${badge.slug}`} className="block">
                <div
                  className={`
                    relative rounded-2xl h-full transition-all duration-300 hover:-translate-y-1
                    ${badge.promoted
                      ? "p-[3px] hover:shadow-[0_8px_28px_rgba(200,120,10,0.40)]"
                      : "hover:shadow-[0_8px_28px_rgba(76,41,34,0.18)]"
                    }
                  `}
                  style={badge.promoted ? {
                    background: "linear-gradient(135deg, #f0b429, #d47c0a, #f0b429)",
                    boxShadow: "0 0 0 1px rgba(200,120,10,0.3), 0 6px 20px rgba(200,120,10,0.30)",
                  } : {
                    boxShadow: "0 2px 12px rgba(76,41,34,0.10)",
                  }}
                >
                  <div className="rounded-2xl bg-[#faf6f3] h-full overflow-hidden">
                    <Badge data={badge} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        );
      })()}

    </section>
  );
};

export default Products;