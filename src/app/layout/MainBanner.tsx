import Image from "next/image";
import React from "react";
import image from "../assets/psy_w_budzie_large.png";
import MainCTA from "../components/MainCTA";
import HouseIcon from "../assets/HouseIcon";
import ArrowIcon from "../assets/ArrowIcon";
const MainBanner = () => {
  return (
    <div className='container mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 m-1 p-2 md:flex'>
      <div className='relative lg:mt-6'>
        <h1 className='text-4xl	font-bold	leading-normal mt-2 mb-2'>
          Noanzo.pl - Budy dla psów
        </h1>
        <p className='text-base	leading-loose'>
          Witaj! Szukasz budy dla psa? Cieszymy się, że znalazłeś chwilę, aby
          odwiedzić naszą stronę. Z przyjemnością poświęcimy ten czas na
          zaprezentowanie Ci naszych najnowszych ofert. Prosimy, usiądź wygodnie
          i pozwól nam zabrać Cię w podróż po naszych wyrobach.
        </p>
        <p className='pt-2 font-bold'>
          Deweloper dla zwierząt zaprasza do odkrywania!
        </p>
        <div>
          <MainCTA text={"+48601208409"} />
        </div>
      </div>

      <div className='relative md:w-[1200px] lg:w-[1400px]'>
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
