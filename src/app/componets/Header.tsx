import { header } from '@/helpers/utils/data'
import Link from 'next/link'
import React from 'react'
import Logo from "../../../public/images/logo.svg"
import Image from 'next/image'

const Header = () => {
    return (
        <div className='sticky top-0 bg-white z-[9999]'>

        <header className='w-[95%]   lg:w-[950px] mx-auto flex h-[70.069px] items-center justify-between'>
            <Link href="/" className='flex items-center gap-2'>
                <Image src={Logo} alt='logo' />
                <span className="text-fuchsia text-base font-normal leading-none">Common<br />Ground</span>
            </Link>
            <div className='flex items-center gap-10'>
                <div className='hidden lg:flex items-center gap-10'>
                    {
                        header.map((head) => (
                            <Link className='text-zinc-800 text-base font-normal' key={head.name} href={head.url}>{head.name}</Link>
                        ))
                    }
                </div>
                <Link href={"/auth"} className="w-36 h-8 flex justify-center items-center bg-fuchsia text-white text-base font-semibold rounded-xl" >
                    Sign up / Login
                </Link>
            </div>

        </header>
        </div>
    )
}

export default Header