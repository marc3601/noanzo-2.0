import React from "react";
import type { ProductPage } from "../produkt/[slug]/page";
import MainCTA from "./MainCTA";

const ProductDescription = ({ product }: { product: ProductPage }) => {
  let isTrimmed = false;
  let desc = product.description;
  if (desc.length > 200) {
    isTrimmed = true;
    desc = desc.slice(0, 200);
    desc = desc.concat("...");
  }

  return (
    <div className='flex flex-col pl-2 pr-2 overflow-hidden w-full	'>
      <h1 className='font-bold p-2 text-3xl	'>{product.title}</h1>
      <div className='grow'>
        <p className='p-2 hidden lg:block'>
          {desc}
          {isTrimmed && <br></br>}
          {isTrimmed && (
            <span className='text-main-color font-bold underline cursor-pointer'>
              Czytaj więcej
            </span>
          )}
        </p>
        <p className='p-2 lg:hidden'>{product.description}</p>
      </div>
      <div className='p-2 flex justify-between'>
        <MainCTA text={"+48 601208409"} colors={["#c7929a", "#d27303"]} />
        <MainCTA text={`${product.price} zł`} colors={["#c7929a", "#d27303"]} />
      </div>
    </div>
  );
};

export default ProductDescription;
