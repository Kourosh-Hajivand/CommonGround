import { category } from '@/helpers/utils/data'
import Image from 'next/image'
import React from 'react'

const Category = () => {
    return (
        <section className='mt-[46px]'>
            <div>
                <h2 className=" text-fuchsia text-[25px] font-bold   ">Welcome to Common Ground</h2>
                <span className=" block  text-zinc-800 text-[18px] font-normal leading-7 tracking-wide">Experiences designed to foster new friendships in Canada’s coldest city. Join an experience, host your own,<br />and find your people.</span>
            </div>
            <div className=' flex justify-between items-center gap-[29.6px] mt-[35px] md:mt-[60px] overflow-x-auto hide-scroll'>
                {category.map((category) => (
                    <div key={category.name} className="w-20 h-28 relative">
                        <div className='w-20 h-20 flex justify-center items-center bg-stone-100 rounded-3xl'>
                            <Image alt={category.name} src={category.src} />
                        </div>
                        <p className="text-center mt-[6.41px] text-zinc-800 text-[18px] font-light">{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Category