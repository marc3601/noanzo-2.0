"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ArrowEnabled from "../assets/ArrowEnabled";
import { ModalContext } from "../context/ModalContextProvider";
import { ProductPage } from "../types/types";
import CloseIcon from "../assets/CloseIcon";
import TextWithBreaks from "./TextWithBreaks";

const Gallery = ({ product }: { product: ProductPage }) => {
  const isSingleImage = product.image.length === 1;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [swiperReady, setSwiperReady] = useState(isSingleImage); // single image never needs Swiper
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const { modal, setModal } = useContext(ModalContext);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const modalSwiperRef = useRef<SwiperType | null>(null);

  // Detect mobile client-side only to avoid hydration mismatch
  useEffect(() => {
    setIsMobileDevice(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const sortedImages = [...product.image].sort((a, b) => {
    if (a.thumbnail && !b.thumbnail) return -1;
    if (!a.thumbnail && b.thumbnail) return 1;
    return 0;
  });

  const sortedEnlargedImages =
    product.imageLarge?.length > 0
      ? sortedImages
          .map((img) => product.imageLarge.find((l) => l.id === img.id))
          .filter((img): img is NonNullable<typeof img> => img !== undefined)
      : sortedImages;

  const galleryDesktopClass = isSingleImage ? "lg:w-1/2" : "lg:w-3/5 xl:w-1/2";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", modal);
    return () => { document.body.classList.remove("overflow-hidden"); };
  }, [modal]);

  const isInitialized = useRef(false);

  useEffect(() => {
    // No setTimeout update — that was causing Swiper to re-measure
    // and animate its slide width on mount.
  }, []);

  const handleMainSlideChange = (swiper: SwiperType) => {
    if (modalSwiperRef.current && modal) {
      modalSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  const handleModalSlideChange = (swiper: SwiperType) => {
    mainSwiperRef.current?.slideTo(swiper.activeIndex);
  };

  useEffect(() => {
    if (modal && modalSwiperRef.current && mainSwiperRef.current) {
      const idx = mainSwiperRef.current.activeIndex;
      requestAnimationFrame(() => {
        modalSwiperRef.current?.update();
        modalSwiperRef.current?.slideTo(idx, 0);
      });
    }
  }, [modal]);

  return (
    <div
      className={`p-2 w-full transition-none ${galleryDesktopClass} ${!isSingleImage ? "lg:flex-none" : ""}`}
    >

      {/* Main image — explicit aspect ratio reserves space before Swiper hydrates */}
      <div
        onClick={!isMobileDevice ? () => setModal(!modal) : undefined}
        className="cursor-pointer"
      >
        <div
          className="h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-2xl overflow-hidden bg-[#e8ddd8]"
          style={{ boxShadow: "0 4px 20px rgba(76,41,34,0.12)" }}
        >
          {!isSingleImage && !swiperReady && (
            /* Skeleton placeholder — holds exact layout space while Swiper initialises.
               Prevents the layout shift on desktop by reserving the right height
               before the carousel mounts. Invisible once Swiper fires onSwiper. */
            <div className="h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-2xl overflow-hidden bg-[#e8ddd8] animate-pulse" />
          )}

          <div className={`h-full ${!isSingleImage && !swiperReady ? "hidden" : ""}`}>
            {isSingleImage ? (
              /* No Swiper for single image — eliminates the internal
                 resize-then-animate cycle that caused the widening effect */
              <Image
                priority unoptimized
                src={sortedImages[0].url}
                width={sortedImages[0].width}
                height={sortedImages[0].height}
                alt={product.title}
                className="block h-full w-full object-cover"
              />
            ) : (
              <Swiper
                onSwiper={(s) => { mainSwiperRef.current = s; setSwiperReady(true); }}
                onSlideChange={handleMainSlideChange}
                slidesPerView={1}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                navigation={{ prevEl: navPrevRef.current, nextEl: navNextRef.current }}
                modules={[Navigation, Thumbs]}
                className="h-full w-full rounded-2xl"
                watchOverflow observer observeParents updateOnWindowResize
              >
                {sortedImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="flex h-full w-full items-center justify-center select-none">
                      <Image
                        priority unoptimized
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={product.title}
                        className="block h-full w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnails — reserve height so layout doesn't shift when swiper mounts */}
      {product.image.length > 1 && (
        <div className="mt-3 h-16">
          <div className="flex items-center gap-2 h-full">
            <button
              ref={navPrevRef}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#4C2922]/8 transition-colors"
            >
              <ArrowEnabled left />
            </button>
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={8}
              modules={[Navigation, Thumbs]}
              className="h-full flex-1 rounded-xl"
              watchOverflow
            >
              {sortedImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex h-full w-full rounded-lg items-center justify-center select-none cursor-pointer bg-[#e8ddd8] overflow-hidden ring-1 ring-[#4C2922]/10 hover:ring-[#4C2922]/30 transition-all">
                    <Image
                      priority unoptimized
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt={product.title}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={navNextRef}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg hover:bg-[#4C2922]/8 transition-colors"
            >
              <ArrowEnabled />
            </button>
          </div>
        </div>
      )}

      {/* Modal — z-[60] covers sticky navbar (z-50) */}
      {modal && (
        <div className="fixed inset-0 z-[60] flex" style={{ background: "#111" }}>

          {/* Full-bleed image swiper — no padding, images fill entire pane */}
          <div className="flex-1 min-w-0 relative bg-[#111]">
            <Swiper
              onSwiper={(s) => { modalSwiperRef.current = s; }}
              onSlideChange={handleModalSlideChange}
              slidesPerView={1}
              spaceBetween={0}
              modules={[Navigation, Thumbs]}
              navigation
              className="h-full w-full"
              observer observeParents updateOnWindowResize watchOverflow
            >
              {sortedEnlargedImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex h-full w-full items-center justify-center select-none">
                    <Image
                      priority unoptimized
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt={product.title}
                      className="block w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Info panel — warm light background */}
          <div
            className="w-full max-w-[320px] lg:max-w-sm h-full overflow-y-auto flex-shrink-0 flex flex-col"
            style={{
              background: "linear-gradient(180deg, #fdf8f5 0%, #f5ede7 100%)",
              borderLeft: "1px solid rgba(76,41,34,0.12)",
            }}
          >
            {/* Sticky close navbar */}
            <div
              className="sticky top-0 z-10 flex items-center justify-end px-5 h-14 flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(76,41,34,0.10)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.8), 0 2px 12px rgba(76,41,34,0.06)",
              }}
            >
              <button
                onClick={() => setModal(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full text-[#4C2922] transition-all duration-150 active:scale-95"
                style={{
                  background: "rgba(76,41,34,0.06)",
                  border: "1px solid rgba(76,41,34,0.10)",
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "linear-gradient(160deg, #7a3d2e 0%, #4C2922 100%)";
                  b.style.color = "white";
                  b.style.borderColor = "transparent";
                  b.style.boxShadow = "0 4px 12px rgba(76,41,34,0.30), inset 0 1px 0 rgba(255,210,180,0.15)";
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = "rgba(76,41,34,0.06)";
                  b.style.color = "#4C2922";
                  b.style.borderColor = "rgba(76,41,34,0.10)";
                  b.style.boxShadow = "none";
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-8 flex flex-col gap-4">
              <div
                className="h-px w-10 rounded"
                style={{ background: "linear-gradient(90deg, #4C2922, transparent)" }}
              />
              <h1
                className="text-xl font-bold leading-snug"
                style={{ color: "#2a1510" }}
              >
                {product.title}
              </h1>
              <p className="text-sm leading-relaxed text-[#5a3a30]/80">
                <TextWithBreaks text={product.description} />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;