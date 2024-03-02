import React from "react";

const ProductSection = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col lg:flex-row'>{children}</div>;
};

export default ProductSection;
