import Image from "next/image";
import React from "react";
import image from "../assets/psy_w_budzie_large.png";
import MainCTA from "../components/MainCTA";
import HouseIcon from "../assets/HouseIcon";

const MainBanner = () => {
  return (
    <div className='container mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 m-1 p-2 md:flex'>
      <div className='relative lg:mt-6'>
        <h1 className='text-4xl font-bold leading-normal mt-2 mb-2'>
          Noanzo.pl - Budy dla psów
        </h1>
        <p className='text-base leading-loose'>
          Witaj! Szukasz budy dla psa? Cieszymy się, że znalazłeś chwilę, aby
          odwiedzić naszą stronę. Z przyjemnością poświęcimy ten czas na
          zaprezentowanie Ci naszych najnowszych ofert. Prosimy, usiądź wygodnie
          i pozwól nam zabrać Cię w podróż po naszych wyrobach.
        </p>
        <p className='pt-2 font-bold'>
          Deweloper dla zwierząt zaprasza do odkrywania!
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <MainCTA text={"+48601208409"} />
          <a
            href="https://www.tiktok.com/@noanzo.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all duration-200 active:scale-[0.96]"
            style={{
              background: "linear-gradient(160deg, #1a1a1a 0%, #000000 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 14px rgba(0,0,0,0.35)",
            }}
          >
            <svg className="w-4 h-4 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] font-semibold tracking-widest uppercase text-white/50">Obserwuj nas</span>
              <span className="text-xs font-bold text-white">@noanzo.pl</span>
            </div>
          </a>
        </div>
      </div>

      <div className='relative md:w-[1200px] lg:w-[1400px]'>
        <span className='relative left-2/4 -translate-x-1/2 inline-block'>
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