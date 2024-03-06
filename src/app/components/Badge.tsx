import React from "react";
import Image from "next/image";
import { BadgeData } from "../layout/Products";
const Badge = ({ data }: { data: BadgeData }) => {
  return (
    <div className='m-2 cursor-pointer'>
      <div className='relative rounded-t-xl h-44 bg-outline-color '>
        <Image
          className='rounded-t-xl'
          src={data.link}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt={data.title}
          unoptimized={true}
        />
      </div>
      <div className='p-2 rounded-b-xl bg-main-color'>
        <h3 className='text-center text-white'>{data.title}</h3>
      </div>
    </div>
  );
};

export default Badge;
