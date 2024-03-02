import Image from "next/image";
import React from "react";
import image from "../assets/psy_w_budzie_large.png";
import MainCTA from "../components/MainCTA";
import HouseIcon from "../assets/HouseIcon";
import ArrowIcon from "../assets/ArrowIcon";
const MainBanner = () => {
  return (
    <div className='container mx-auto sm:w-4/5 m-1 p-2 md:flex'>
      <div className='relative lg:mt-6'>
        <h1 className='text-4xl	font-bold	leading-normal mt-2 mb-2'>
          Budy dla psów wszystkich ras.
        </h1>
        <p className='text-base	leading-loose'>
          W tym miejscu powinien być jakiś krótki opis firmy i tego co robi.
          Ważne żeby były słowa kluczowe na które strona ma się pozycjonować.
        </p>
        <div>
          <MainCTA text={"+48601208409"} />
        </div>
      </div>

      <div className='relative md:w-[900px] lg:w-[1100px]'>
        <ArrowIcon />
        <span className='relative left-2/4 -translate-x-1/2	inline-block'>
          <HouseIcon />
          <Image
            src={image}
            width={346}
            height={360}
            alt='Noanzo.pl budy dla psów'
            priority={true}
            quality={75}
          />
        </span>
      </div>
    </div>
  );
};

export default MainBanner;
