"use client";
import React from "react";
import { ModalContextProvider } from "../context/ModalContextProvider";

const ProductSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalContextProvider>
      <div className='flex flex-col mt-4 mb-4 lg:p-4 lg:flex-row'>
        {children}
      </div>
    </ModalContextProvider>
  );
};

export default ProductSection;
