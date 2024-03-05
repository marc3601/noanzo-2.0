"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ArrowEnabled from "../assets/ArrowEnabled";
import { ModalContext } from "../context/ModalContextProvider";
import { ProductPage } from "../produkt/[slug]/page";
import { isMobile } from "react-device-detect";
import "swiper/css/navigation";
import CloseIcon from "../assets/CloseIcon";
const Gallery = ({
  images,
  product,
}: {
  images: Array<any>;
  product: ProductPage;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const { modal, setModal } = useContext(ModalContext);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  useEffect(() => {
    if (modal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modal]);

  return (
    <div className='p-2 w-full lg:w-1/2 m-w-full transition-none'>
      <div
        onClick={!isMobile ? () => setModal(!modal) : null}
        className='cursor-pointer'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            prevEl: navPrevRef.current,
            nextEl: navNextRef.current,
          }}
          modules={[Navigation, Thumbs]}
          className='h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-md'>
          {images.map((image, id) => {
            return (
              <SwiperSlide key={id}>
                <div className='flex h-full w-full items-center justify-center select-none bg-outline-color'>
                  <Image
                    priority
                    unoptimized
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt='sample alt'
                    className='block h-full w-full object-cover rounded-md'
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='mt-5'>
        <div className='flex'>
          <div
            className='flex items-center justify-center cursor-pointer'
            ref={navPrevRef}>
            {" "}
            <ArrowEnabled left />{" "}
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation, Thumbs]}
            className='thumb h-16 w-2/3 lg:w-2/5'>
            {images.map((image, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className='flex h-full w-full rounded-lg items-center justify-center select-none cursor-pointer bg-outline-color'>
                    <Image
                      priority
                      unoptimized
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt='sample alt'
                      className='block h-full w-full object-cover rounded'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            className='flex items-center justify-center cursor-pointer'
            ref={navNextRef}>
            {" "}
            <ArrowEnabled />{" "}
          </div>
        </div>
      </div>
      {modal && (
        <div className='fixed inset-0 z-20 flex flex-row bg-white'>
          <div className=' h-full ' style={{ maxWidth: "calc(100% - 400px)" }}>
            <div className='size-full flex items-center justify-center'>
              <div className='w-full h-full m-2 bg-main-color '>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={1}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  navigation
                  className='h-full'>
                  {images.map((image, id) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className='flex h-full w-full items-center justify-center select-none'>
                          <Image
                            priority
                            unoptimized
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt='sample alt'
                            className='block h-full w-full object-contain'
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className='h-full w-[400px]'>
            <div className='p-4 flex justify-end'>
              <span className='cursor-pointer' onClick={() => setModal(!modal)}>
                <CloseIcon />
              </span>
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-2xl'>{product.title}</h1>
              <p className='pt-4'>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
