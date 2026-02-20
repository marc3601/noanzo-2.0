"use client";

import React, { useContext } from "react";
import type { ProductPage } from "../types/types";
import MainCTA from "./MainCTA";
import { ModalContext } from "../context/ModalContextProvider";
import TextWithBreaks from "./TextWithBreaks";

const ProductDescription = ({ product }: { product: ProductPage }) => {
  const { modal, setModal } = useContext(ModalContext);

  let isTrimmed = false;
  let desc = product.description;
  if (desc.length > 200) {
    isTrimmed = true;
    desc = desc.slice(0, 200).concat("...");
  }

  return (
    <div className="flex flex-col w-full px-2 lg:px-0 min-w-0 flex-1">

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl font-bold leading-tight mb-4 pb-1"
        style={{ color: "#2a1510" }}
      >
        {product.title}
      </h1>

      {/* Divider */}
      <div
        className="h-px w-16 rounded mb-5"
        style={{ background: "linear-gradient(90deg, #4C2922, transparent)" }}
      />

      {/* Description */}
      <div className="flex-1 mb-6">
        {/* Desktop: trimmed */}
        <div className="hidden lg:block text-sm leading-relaxed text-[#5a3a30]/80">
          <p>
            {desc}
            {isTrimmed && (
              <>
                <br />
                <button
                  onClick={() => setModal(!modal)}
                  className="mt-2 inline-flex items-center gap-1 text-[#4C2922] font-semibold text-xs tracking-wide hover:opacity-70 transition-opacity"
                >
                  Czytaj więcej
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </p>
        </div>

        {/* Mobile: full text */}
        <div className="lg:hidden text-sm leading-relaxed text-[#5a3a30]/80">
          <TextWithBreaks text={product.description} />
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3 mt-auto">
        <MainCTA text="+48 601208409" />
        <MainCTA text={`${product.price} zł`} noaction />
      </div>
    </div>
  );
};

export default ProductDescription;