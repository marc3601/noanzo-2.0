"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ArrowEnabled from "../assets/ArrowEnabled";
const Gallery = ({ images }: { images: Array<any> }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <div className='p-2 w-full lg:w-1/2'>
      <div>
        <Swiper
          slidesPerView={1}
          // navigation
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
          className='h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 '>
          {images.map((image, id) => {
            return (
              <SwiperSlide key={id}>
                <div className='flex h-full w-full items-center justify-center'>
                  <Image
                    priority
                    unoptimized
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt='sample alt'
                    className='block h-full w-full object-cover'
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='mt-5'>
        <div className='flex'>
          <div className='flex items-center justify-center' ref={navPrevRef}>
            {" "}
            <ArrowEnabled left />{" "}
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Navigation, Thumbs]}
            className='thumb h-16  w-2/3 md:w-2/5'>
            {images.map((image, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className='flex h-full w-full rounded-lg items-center justify-center'>
                    <Image
                      priority
                      unoptimized
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt='sample alt'
                      className='block h-full w-full object-cover'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className='flex items-center justify-center' ref={navNextRef}>
            {" "}
            <ArrowEnabled />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;