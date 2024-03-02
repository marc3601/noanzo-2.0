import React from "react";

const ProductSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col mt-4 mb-4 lg:p-4 lg:flex-row'>{children}</div>
  );
};

export default ProductSection;
