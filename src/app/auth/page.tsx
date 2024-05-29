import React from 'react'
import Image from 'next/image'
import Logout from "@/../public/images/logout.svg"
import Input from '../componets/common/Input'
import { Checkbox, FormControlLabel } from '@mui/material'
import Google from "@/../public/images/goggle.svg"
import Link from 'next/link'
const Page = () => {
    return (
        <>
            <div className='lg:w-[334.89px] '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src={Logout} alt='' />
                        <span className="text-zinc-800 text-[22px] font-semibold ">Login </span>
                    </div>
                    <Link href={"/auth/signup"} className="w-[97px] text-center text-fuchsia bg-pink-200 rounded-2xl text-sm py-1 font-medium ">Sign Up</Link>
                </div>
                <div className='mt-[40px] lg:mt-[80px]'>
                    <Input title="Email:" />
                    <Input title="Pasword:" className="mt-[12px]" />
                    <FormControlLabel className='mt-[14px] lg:mt-[20px]' control={<Checkbox icon={<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.506348" y="0.833862" width="26.7627" height="26.7627" rx="13.3813" fill="#F8F5F3" stroke="#F1D7EA" />
                    </svg>
                    } />} label={<div className="text-zinc-800 text-lg font-light">Remember me</div>} />
                    <button className="flex w-full justify-center items-center gap-2 mt-[25px] lg:mt-[60px] h-[55.64px] bg-white rounded-[15px] border border-pink-200" >
                        <Image src={Google} alt='' />
                        <p className="text-zinc-800 text-lg font-medium ">Continue with Google</p>
                    </button>
                    <button className="w-full mt-[48px] lg:mt-[65px] h-[60.79px] bg-fuchsia rounded-[20px]" >
                        <p className=" text-center text-white text-[22px] font-semibold ">Login</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Page