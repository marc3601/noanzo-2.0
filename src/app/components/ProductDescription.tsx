import React from "react";
import type { ProductPage } from "../produkt/[slug]/page";
import MainCTA from "./MainCTA";

const ProductDescription = ({ product }: { product: ProductPage }) => {
  return (
    <div className='flex flex-col pl-2 pr-2 overflow-hidden'>
      <h1 className='font-bold p-2 text-3xl	'>{product.title}</h1>
      <div className='grow'>
        <p className=' p-2'>{product.description}</p>
      </div>
      <div className='p-2 flex'>
        <MainCTA text={"+48601208409"} />
        <MainCTA text={product.price} />
      </div>
    </div>
  );
};

export default ProductDescription;
