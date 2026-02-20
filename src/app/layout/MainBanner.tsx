import Image from "next/image";
import React from "react";
import image from "../assets/psy_w_budzie_large.png";
import MainCTA from "../components/MainCTA";
import HouseIcon from "../assets/HouseIcon";
import ArrowIcon from "../assets/ArrowIcon";

const MainBanner = () => {
  return (
    <section className="container mx-auto sm:w-4/5 lg:w-11/12 xl:w-4/5 px-4 pt-6 pb-10 md:pt-10 md:pb-14">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">

        {/* ── Text column ── */}
        <div className="flex-1 order-2 md:order-1 mt-6 md:mt-0">

          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="h-px w-8 rounded"
              style={{ background: "linear-gradient(90deg, #4C2922, transparent)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: "#7a4438" }}
            >
              Budy dla psów premium
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.2] mb-4 pb-1"
            style={{ color: "#2a1510" }}
          >
            Noanzo.pl{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #7a3d2e, #4C2922)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Budy dla psów
            </span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[#5a3a30]/80 mb-3 max-w-lg">
            Witaj! Szukasz budy dla psa? Cieszymy się, że znalazłeś chwilę, aby
            odwiedzić naszą stronę. Z przyjemnością poświęcimy ten czas na
            zaprezentowanie Ci naszych najnowszych ofert.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-[#5a3a30]/80 mb-5 max-w-lg">
            Prosimy, usiądź wygodnie i pozwól nam zabrać Cię w podróż po naszych wyrobach.
          </p>

          {/* Trust line */}
          <p className="text-sm font-bold text-[#4C2922] mb-6 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Deweloper dla zwierząt zaprasza do odkrywania!
          </p>

          {/* CTA */}
          <MainCTA text="+48601208409" />

          {/* Social proof strip */}
          <div className="mt-6 flex items-center gap-6">
            <div className="text-center">
              <p className="text-xl font-bold text-[#4C2922]">15+</p>
              <p className="text-[10px] uppercase tracking-wider text-[#7a5a53]">lat doświadczenia</p>
            </div>
            <div className="w-px h-8 bg-[#4C2922]/15" />
            <div className="text-center">
              <p className="text-xl font-bold text-[#4C2922]">30+</p>
              <p className="text-[10px] uppercase tracking-wider text-[#7a5a53]">schronisk</p>
            </div>
            <div className="w-px h-8 bg-[#4C2922]/15" />
            <div className="text-center">
              <p className="text-xl font-bold text-[#4C2922]">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-[#7a5a53]">naturalne drewno</p>
            </div>
          </div>
        </div>

        {/* ── Image column ── */}
        <div className="order-1 md:order-2 flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative background blob */}
            <div
              className="absolute inset-0 rounded-3xl scale-90 translate-y-4 blur-2xl opacity-30"
              style={{ background: "radial-gradient(ellipse, #c97a10 0%, #4C2922 60%, transparent 100%)" }}
            />

            {/* Card frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 8px 24px rgba(76,41,34,0.08), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Image
                src={image}
                width={346}
                height={360}
                alt="Noanzo.pl budy dla psów"
                priority={true}
                quality={75}
                className="block"
              />
            </div>

            {/* HouseIcon — keep original positioning */}
            <HouseIcon />

            {/* ArrowIcon — desktop only so it doesn't clutter mobile */}
            <span className="hidden md:block">
              <ArrowIcon />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainBanner;