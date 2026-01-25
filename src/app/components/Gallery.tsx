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
import { isMobile } from "react-device-detect";
import "swiper/css/navigation";
import CloseIcon from "../assets/CloseIcon";
import TextWithBreaks from "./TextWithBreaks";

const Gallery = ({ product }: { product: ProductPage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [modalThumbsSwiper, setModalThumbsSwiper] = useState<SwiperType | null>(null);
  const { modal, setModal } = useContext(ModalContext);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const modalSwiperRef = useRef<SwiperType | null>(null);

  // Sort images to put thumbnail first
  const sortedImages = [...product.image].sort((a, b) => {
    if (a.thumbnail && !b.thumbnail) return -1;
    if (!a.thumbnail && b.thumbnail) return 1;
    return 0;
  });

  // Sort large images based on the sorted order of regular images
  const sortedEnlargedImages = product.imageLarge?.length > 0 
    ? sortedImages.map(img => 
        product.imageLarge.find(largeImg => largeImg.id === img.id)
      ).filter((img): img is NonNullable<typeof img> => img !== undefined)
    : sortedImages;
  
  const isSingleImage = product.image.length === 1;
  const galleryWidthClass = isSingleImage 
    ? 'lg:w-2/3 min-w-0' 
    : 'lg:w-3/5 xl:w-1/2';

  useEffect(() => {
    if (modal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modal]);

  useEffect(() => {
    if (mainSwiperRef.current) {
      setTimeout(() => {
        mainSwiperRef.current?.update();
      }, 0);
    }
  }, []);

  // Sync main gallery with modal gallery
  const handleMainSlideChange = (swiper: SwiperType) => {
    if (modalSwiperRef.current && modal) {
      modalSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  // Sync modal gallery with main gallery
  const handleModalSlideChange = (swiper: SwiperType) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  // When modal opens, sync to current slide
  useEffect(() => {
    if (modal && modalSwiperRef.current && mainSwiperRef.current) {
      const currentIndex = mainSwiperRef.current.activeIndex;
      // Wait for next frame to ensure modal is fully rendered
      requestAnimationFrame(() => {
        if (modalSwiperRef.current) {
          modalSwiperRef.current.update();
          modalSwiperRef.current.slideTo(currentIndex, 0);
        }
      });
    }
  }, [modal]);

  return (
    <div className={`p-2 w-full transition-none ${galleryWidthClass}`}>
      <div
        onClick={!isMobile ? () => setModal(!modal) : undefined}
        className='cursor-pointer'>
        <div className='h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-md'>
          <Swiper
            key="main-swiper"
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            onSlideChange={handleMainSlideChange}
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
            className='h-full w-full rounded-md'
            watchOverflow={true}
            observer={true}
            observeParents={true}
            updateOnWindowResize={true}>
            {sortedImages.map((image) => {
              return (
                <SwiperSlide key={image.id}>
                  <div className='flex h-full w-full items-center justify-center select-none bg-outline-color'>
                    <Image
                      priority
                      unoptimized
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      alt={product.title}
                      className='block h-full w-full object-cover rounded-md'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {product.image.length > 1 && (
        <div className='mt-5'>
          <div className='flex'>
            <div
              className='flex items-center justify-center cursor-pointer'
              ref={navPrevRef}
              key="nav-prev">
              <ArrowEnabled left />
            </div>
            <Swiper
              key="thumb-swiper"
              onSwiper={setThumbsSwiper}
              slidesPerView={3}
              spaceBetween={10}
              modules={[Navigation, Thumbs]}
              className='thumb h-16 w-2/3 lg:w-2/5'
              watchOverflow={true}>
              {sortedImages.map((image) => {
                return (
                  <SwiperSlide key={image.id}>
                    <div className='flex h-full w-full rounded-lg items-center justify-center select-none cursor-pointer bg-outline-color'>
                      <Image
                        priority
                        unoptimized
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={product.title}
                        className='block h-full w-full object-cover rounded'
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              className='flex items-center justify-center cursor-pointer'
              ref={navNextRef}
              key="nav-next">
              <ArrowEnabled />
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className='fixed inset-0 z-20 flex flex-row bg-white'>
          <div className='h-full min-w-0' style={{ width: "calc(100% - 400px)" }}>
            <div className='size-full flex items-center justify-center'>
              <div className='w-full h-full m-2 bg-main-color'>
                <Swiper
                  key="modal-swiper"
                  onSwiper={(swiper) => {
                    modalSwiperRef.current = swiper;
                  }}
                  onSlideChange={handleModalSlideChange}
                  slidesPerView={1}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  navigation
                  className='h-full w-full'
                  observer={true}
                  observeParents={true}
                  updateOnWindowResize={true}
                  watchOverflow={true}>
                  {sortedEnlargedImages.map((image) => {
                    return (
                      <SwiperSlide key={image.id}>
                        <div className='flex h-full w-full items-center justify-center select-none'>
                          <Image
                            priority
                            unoptimized
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt={product.title}
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
          <div className='h-full w-[400px] overflow-y-scroll'>
            <div className='p-4 flex justify-end'>
              <span className='cursor-pointer' onClick={() => setModal(!modal)}>
                <CloseIcon />
              </span>
            </div>
            <div className='m-{70px} p-4'>
              <h1 className='font-bold text-2xl'>{product.title}</h1>
            </div>
            <div className='p-4'>
              <p>
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