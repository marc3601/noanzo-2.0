import React from "react";
import Image from "next/image";
const Badge = ({ image }: { image: string }) => {
  return (
    <div className='m-2 cursor-pointer'>
      <div className='relative rounded-t-xl h-44 bg-outline-color '>
        <Image
          className='rounded-t-xl'
          src={image}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          alt='image'
          unoptimized={true}
        />
      </div>
      <div className='p-2 rounded-b-xl bg-main-color'>
        <h3 className='text-center text-white'>Buda dla psa</h3>
      </div>
    </div>
  );
};

export default Badge;
