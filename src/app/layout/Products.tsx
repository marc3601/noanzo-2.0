import React from "react";
import Badge from "../components/Badge";

const imgs = [
  "https://admin.noanzo.pl/images/42130fcf2b7c8b042e6a400cb6f4c160",
  "https://admin.noanzo.pl/images/7b31cf5304cc28d24e1537c6d532a10b",
  "https://admin.noanzo.pl/images/c897a82d56448e06bd37fd1287919b46",
  "https://admin.noanzo.pl/images/8d1cbd4a437f5cd9bed78dcbf7ab765d",
  "https://admin.noanzo.pl/images/74c76cc203ce0188411a9f5dfacfca49",
  "https://admin.noanzo.pl/images/6d2f77bcf4213a7733e8cee3e403c01d",
  "https://admin.noanzo.pl/images/914e6c2937f010e8580a2c1bc7dcce59",
  "https://admin.noanzo.pl/images/693d90972c3d8dae3f5db7787bf21fa0",
];
const Products = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  mx-auto sm:w-4/5 m-1 p-2'>
      {imgs.map((link, i) => (
        <Badge key={i} image={link} />
      ))}
    </div>
  );
};

export default Products;
