import Image from 'next/image'
import React from 'react'
import Slide2 from "@/../public/images/slide3.png"
import { Book_icon } from './icons'
const CardBlog = () => {
    return (
        <div className="min-w-[16rem]  bg-white rounded-[20px] p-[9px] border border-neutral-200" >
            <div style={{ boxShadow: "0px 25px 26.6px -15px rgba(0, 0, 0, 0.25)" }}>
                <Image className="w-full h-32 rounded-[14px] object-cover shadow" src={Slide2} alt='' />
            </div>
            <div className='px-2'>
                <h4 className="mt-[14px] text-zinc-800 text-[22px] font-medium">how to create an enent?</h4>
                <p className="text-zinc-800 text-[16px] font-light font-['Bornia'] mt-[5px]">We’ve seen a lot of organizations’ events over the years. And while we can’t identify every last detai....</p>
                <button className="h-7 mt-2 flex items-center  gap-1 bg-stone-100 rounded-3xl" >
                    <Book_icon className='text-fuchsia pl-[7.12px]' size='19' />
                    <span className="text-fuchsia text-sm pr-[8.67px] font-medium">8 min reading</span>
                </button>
            </div>
        </div>
    )
}

export default CardBlog