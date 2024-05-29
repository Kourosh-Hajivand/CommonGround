import React from 'react'
import { Edit_icon } from '../common/icons'
import Image from 'next/image'
import Man from "@/../public/images/man.png"
const UserInformation = () => {
    return (
        <div className='p-2 pr-0'>
            <div className='bg-profile relative'>
                <div className="absolute right-4 top-[10px] w-[125.38px] flex items-center justify-center gap-[6.64px] h-[28.74px] bg-white rounded-lg" >
                    <Edit_icon />
                    <span className="text-zinc-800 text-base font-light">edit banner</span>
                </div>
            </div>
            <div className='-mt-[70px] lg:mt-[26.44px] px-[0.70rem] flex flex-col lg:flex-row  items-center gap-[17.56px]'>
                <div className="w-[132px] h-[132px] lg:w-[68.86px] lg:h-[68.86px] relative">
                    <Image fill src={Man} alt='' className='object-cover  rounded-full overflow-hidden' />
                    <div className="w-[25.92px] h-[25.92px] flex items-center justify-center z-50 absolute bottom-2 lg:-bottom-2 right-0 bg-pink-200 rounded-full border-2 border-white">
                        <Edit_icon />
                    </div>
                </div>
                <div>
                    <h5 className="text-zinc-800 text-[25px] font-bold">Zuki Majuqwana</h5>
                    <p className="text-zinc-800 text-center lg:text-left -mt-1 text-base font-light">reshot80@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default UserInformation