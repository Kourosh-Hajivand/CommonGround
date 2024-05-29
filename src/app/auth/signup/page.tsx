"use client"
import React from 'react'
import UserAdd from "@/../public/images/user-add.svg"
import Image from 'next/image'
import Input from '@/app/componets/common/Input'
import Google from "@/../public/images/goggle.svg"
import Link from 'next/link'
import PhoneInput from 'react-phone-input-2'
import '../../../../node_modules/react-phone-input-2/lib/material.css'


const Page = () => {
    return (
        <div className='lg:w-[334.89px] '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <Image src={UserAdd} alt='' />
                    <span className="text-zinc-800 text-[22px] font-semibold ">Sign Up</span>
                </div>
                <Link href={"/auth"} className="w-[97px] text-center text-fuchsia bg-pink-200 rounded-2xl text-sm py-1 font-medium ">Login</Link>
            </div>
            <div className='mt-[40px] lg:mt-[80px] auth '>

                <div className='flex items-center gap-[16px]'>
                    <Input title="First name:" />
                    <Input title="Last name:" />
                </div>
                <Input title="Email:" className='mt-[12px]' />
                <PhoneInput onChange={()=>{}}/>
                <Input title="Password:" className='mt-[17px]' />

                <button className="flex w-full justify-center items-center gap-2 mt-[10px] lg:mt-[22px] h-[55.64px] bg-white rounded-[15px] border border-pink-200" >
                    <Image src={Google} alt='' />
                    <p className="text-zinc-800 text-lg font-medium ">Continue with Google</p>
                </button>
                <button className="w-full mt-[48px] lg:mt-[29px] h-[60.79px] bg-fuchsia rounded-[20px]" >
                    <p className=" text-center text-white text-[22px] font-semibold ">Login</p>
                </button>
            </div>
        </div>
    )
}

export default Page