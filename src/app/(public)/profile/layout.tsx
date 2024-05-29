"use client"
import UserInformation from '@/app/componets/profile/UserInformation'
import { menu_profile } from '@/helpers/utils/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use } from 'react'
type Props = {
    children: React.ReactNode
}
const Layout = ({ children }: Props) => {
    const pathName = usePathname()
    return (
        <div className='bg-[#F8F5F3] lg:pb-[75.33px] lg:pt-[60px]'>
            <div className='w-full flex flex-col lg:flex-row gap-[8px]  lg:w-[950px] mx-auto lg:h-[625.34px] bg-white lg:rounded-[20px] lg:border border-pink-200 overflow-hidden'>
                <div className='lg:w-[360px] '>
                    <UserInformation />
                    <div className='hidden lg:p-2  mt-[33px] px-[0.70rem] lg:flex flex-col gap-[26.02px]'>
                        {
                            menu_profile.map((menu) => (
                                <Link className={`flex h-[53.75px] px-[19.29px] gap-[9.26px] items-center ${menu.url === pathName ? "bg-stone-100 rounded-[20px] border border-pink-200" : ""}`} href={menu.url} key={menu.name}>
                                    <menu.icon />
                                    <p className={` text-lg   leading-[33.66px] ${menu.url === pathName ? "text-fuchsia font-bold" : "font-medium text-zinc-800"}`}>{menu.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='flex-1 h-full p-[8px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout