import React from 'react'
import { Facebook_icon, Instagram_icon, Twitter_icon, Youtube_icon } from './common/icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full py-3 md:py-10 mt-10 bg-stone-100 rounded-tl-2xl rounded-tr-2xl" >
            <div className='w-[95%] lg:w-[950px] mx-auto'>
                <div className=' container_footer pl-[54px] md:pl-[0]'>
                    <div>
                        <div className='mt-[50px] lg:mt-0'>
                            <h1 className="text-zinc-800 text-xl font-semibold  leading-snug mb-[19px] md:mb-0">Common Ground<br /></h1>
                            <ul  >
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Find an Experience</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Find Hosts</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Find Connections</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_border' />
                    <div className='mt-[35px] lg:mt-0'>
                        <div>
                            <h1 className="text-zinc-800 text-xl font-semibold  leading-snug mb-[19px] md:mb-0">Play Ground<br /></h1>
                            <ul>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Get Started</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Create an Experience</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_border' />
                    <div className='mt-[35px] lg:mt-0'>
                        <div className='lg:-ml-12'>
                            <h1 className="text-zinc-800 text-xl font-semibold  leading-snug mb-[19px] md:mb-0">You<br /></h1>
                            <ul>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Sign Up</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_border' />
                    <div>
                        <div className='mt-[35px] lg:mt-0'>
                            <h1 className="text-zinc-800 text-xl font-semibold  leading-snug mb-[19px] md:mb-0">Us<br /></h1>
                            <ul>
                                <li>
                                    <Link href="" className="text-zinc-800 text-[18px] font-light  leading-tight">Vibe Chek</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-zinc-800 text-[18px] font-light  leading-tight">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="text-zinc-800 text-[18px] font-light  leading-tight">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='custom_border' />
                    <div className='w-full lg:w-fit mt-[35px] lg:mt-0'>
                        <div className='flex-1'>
                            <h1 className="text-zinc-800 lg:text-center lg:ml-3 text-xl font-semibold  leading-snug">Let’s be friends:</h1>
                            <div className='grid grid-cols-2 lg:place-items-end w-full gap-y-4 mt-3'>
                                <Facebook_icon />
                                <Youtube_icon />
                                <Twitter_icon />
                                <Instagram_icon />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[0.01rem] bg-pink-200 my-8 lg:my-14 ' />
                <div className='flex flex-col lg:flex-row justify-between items-start gap-3 lg:items-center'>
                    <span className="text-zinc-500 text-base font-medium leading-tight tracking-tight">© 2023 Common Ground Social Network</span>
                    <div className='flex flex-col lg:flex-row  lg:items-center lg:gap-10'>
                        <span className="text-zinc-500 text-base font-medium leading-tight tracking-tight">Terms of Service  |  Privacy Policy </span>
                        <span className="text-zinc-500 text-base font-medium leading-tight tracking-tight">Cookie Policy  |  Help</span>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer