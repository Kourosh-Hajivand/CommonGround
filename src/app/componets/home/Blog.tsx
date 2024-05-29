"use client";
import Link from 'next/link'
import React from 'react'
import { Arrow_icon } from '../common/icons'
import CardBlog from '../common/CardBlog'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Blog = () => {
    return (
        <section className='mt-16'>
            <div className='flex items-center justify-between'>
                <h4 className="text-zinc-800 text-[22px] font-bold ml-[9px]">Blog</h4>
                <Link href={"#"} className="w-24 flex items-center justify-center gap-1 h-10 text-fuchsia text-md font-medium bg-stone-100 rounded-2xl" >
                    <span>more</span>
                    <Arrow_icon className='text-fuchsia' size='20' />
                </Link>
            </div>
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                modules={[Autoplay]}
                loop
                spaceBetween={20}
                className="mySwiper !mt-[32.8px]"
                breakpoints={{
                    640: {
                      spaceBetween: 20,
                    },
                    768: {
                      spaceBetween: 40,
                    },
                    1024: {
                      spaceBetween: 14,
                    },
                  }}
            >
                
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((event) => (
                    <SwiperSlide className='!min-w-[254px] !max-w-[254px]' key={event}>
                        <CardBlog />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Blog