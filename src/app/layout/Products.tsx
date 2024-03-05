"use client";

import React, { useEffect } from "react";
import Badge from "../components/Badge";
import useSWR from "swr";
import Link from "next/link";

interface Auction {
  description: string;
  gif: {
    width: Number;
    height: Number;
    url: string;
  };
  image: Array<string | any>;
  price: Number;
  title: string;
  id: string;
}
export type BadgeData = {
  title: string;
  link: string;
  slug: string;
};
const fetcher = (link: string) => fetch(link).then((res) => res.json());

const Products = () => {
  const { data, error, isLoading } = useSWR(
    "https://admin.noanzo.pl/api/auctions",
    fetcher
  );

  if (error)
    return (
      <div>
        <p className='text-center'>
          <b>Coś poszło nie tak...</b>
        </p>
      </div>
    );
  if (isLoading)
    return (
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 m-1 p-2'>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
        <div className='rounded-xl h-52 bg-outline-color m-2'></div>
      </div>
    );
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const shuffled = shuffle(data);
  const thumbnails = shuffled.map((item: Auction, id: string): BadgeData => {
    let thumb = item.image.filter((item) => item.thumbnail === true);
    if (thumb.length === 0) {
      thumb = [item.image[0]];
    }

    return { title: item.title, link: thumb[0].url, slug: item.id };
  });
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 m-1 p-2'>
      {thumbnails.map((data: BadgeData, i: number) => (
        <Link key={i} href={`/produkt/${data.slug}`}>
          <Badge data={data} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
