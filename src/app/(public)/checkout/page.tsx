"use client"
import { Arrow_down_icon, Ticket_icon, Tier_icon } from '@/app/componets/common/icons'
import StepOne from '@/app/componets/checkout/StepOne'
import StepThree from '@/app/componets/checkout/StepThree'
import StepTwo from '@/app/componets/checkout/StepTwo'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [select, setSelect] = useState(0)
    const array = ["Select", "Assign", "Check out"]
    return (
        <div className='bg-[#F8F5F3]'>
            <div className='w-[90%] pt-10 lg:w-[792px]  mx-auto md:py-[78px] py-[4px]'>
                <div className='flex justify-between items-center gap-[30.89px] flex-col md:flex-row'>
                    <div className='flex items-center justify-between w-full flex-1 order-1 md:order-none px-[45px] md:px-0'>
                        <div className='flex gap-[7.6px] flex-1 items-center'>
                            <Tier_icon />
                            <p className="text-zinc-800 text-xl font-semibold">Select a tier</p>
                            {/* <Ticket_icon/> */}
                        </div>
                        <p className="text-zinc-800 text-base font-light">step {select + 1} of 3</p>
                    </div>
                    <div className="md:w-[399.52px] w-full flex items-center justify-between px-[36.86px] h-[36.11px] bg-white rounded-[20px] py-[25px] md:py-0" >
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

                </div>
                {
                    select === 0 && <StepOne setSelect={setSelect} />
                }
                {
                    select === 1 && <StepTwo setSelect={setSelect} />
                }
                {
                    select === 2 && <StepThree />
                }
            </div>
        </div>
    )
}

export default Page