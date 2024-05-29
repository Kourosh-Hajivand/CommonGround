"use client"
import { Arrow_down_icon, Ticket_icon, Tier_icon } from '@/app/componets/common/icons'
import StepOne from '@/app/componets/tier/StepOne'
import StepThree from '@/app/componets/tier/StepThree'
import StepTwo from '@/app/componets/tier/StepTwo'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [select, setSelect] = useState(0)
    const array = ["Select", "Assign", "Check out"]
    return (
        <div className='bg-[#F8F5F3]'>
            <div className='lg:w-[950px] flex justify-between items-center gap-[30.89px] mx-auto py-[78px]'>
                <div className='flex gap-[7.6px] flex-1 items-center'>
                    <Tier_icon />
                    <p className="text-zinc-800 text-xl font-semibold">Select a tier</p>
                    {/* <Ticket_icon/> */}
                </div>
                <p className="text-zinc-800 text-base font-light">step {select + 1} of 3</p>
                <div className="w-[399.52px] flex items-center justify-between px-[36.86px] h-[36.11px] bg-white rounded-[20px]" >
                    {array.map((option, idx) => (
                        <React.Fragment key={option}>
                            <p className={` text-sm  ${select === idx ? "text-fuchsia font-bold" : "text-zinc-800 font-normal"}`}>{option}</p>
                            {
                                idx !== 2 &&
                                <Arrow_down_icon className={`-rotate-90 ${select === idx ? "text-fuchsia" : "text-zinc-800"}`} />
                            }
                        </React.Fragment>
                    ))}
                </div>

                {
                    select === 0 && <StepOne />
                }
                {
                    select === 1 && <StepTwo />
                }
                {
                    select === 2 && <StepThree />
                }
            </div>
        </div>
    )
}

export default Page