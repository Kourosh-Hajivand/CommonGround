import React from 'react'
import Man from "@/../public/images/man.png"
import Image from 'next/image'
export const CardMeetTheteam = () => {
    return (
        <div className="!min-w-[244.51px] max-w-[224.51px] h-[369.64px] rounded-[20px] border border-pink-200 px-[8px]" >
            <div className='mx-auto mt-[8px] rounded-[15px]  relative overflow-hidden h-[228.717px]' style={{ boxShadow: "0px 34px 26.2px -22px rgba(0, 0, 0, 0.35)" }}>
                <Image fill className='' src={Man} alt='man' />
            </div>
            <div className='px-[16px] mt-[11px]'>
                <h5 className="text-zinc-800 text-lg font-semibold">The Great Zuki</h5>
                <span className="text-fuchsia -mt-px block text-sm font-light ">Best editor For life</span>
                <p className="text-zinc-800 mt-[7px] text-sm font-normal">He is the one who always online and can make alot of Great Comments.</p>
            </div>
        </div>
    )
}
