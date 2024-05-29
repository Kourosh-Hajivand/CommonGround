"use client";
import Link from "next/link";
import React from "react";
import Arrow from "../../../../public/images/arrow.svg";
import Image from "next/image";
import CardEvent from "../common/CardEvent";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Arrow_down_icon, Arrow_icon, Arrow_left_icon } from "../common/icons";

const UpcomingEvents = () => {
  return (
    <section>
      <div className="w-full h-fit bg-stone-100 rounded-3xl mt-[69px] pt-[22.46px] pb-[43px] pl-[31px]">
        {/* title section */}
        <span className="flex justify-between items-center">
          <div>
            <h6 className="text-zinc-800 text-[22px]  ">Upcoming Events</h6>
            <div className="flex items-center gap-1">
              <span className="text-fuchsia block text-[22px] font-reqular">
                near
              </span>
              <span className="text-fuchsia text-xl font-bold"> Vancouver</span>
            </div>
          </div>
          <Link
            href={"#"}
            className="w-24 flex items-center justify-center gap-1 h-10 mr-[23.19px] text-fuchsia text-md font-medium bg-white rounded-[20px]"
          >
            <span>more</span>
            <Arrow_left_icon />
          </Link>
        </span>
        {/* cards */}
        <Swiper
          modules={[Autoplay]}
          className="mySwiper !mt-[32.8px]"
          slidesPerView={"auto"}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 25500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
        >
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ].map((event) => (
            <SwiperSlide
              className="!overflow-hidden !max-w-[226px] !min-w-[226px] !min-h-[407px]"
              key={event}
            >
              <CardEvent />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UpcomingEvents;
