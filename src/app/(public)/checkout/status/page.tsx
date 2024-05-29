import SuccessInfoStep from '@/app/componets/checkout/SuccessInfoStep'
import UpcomingEvents from '@/app/componets/home/UpcomingEvents'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <div className='bg-[#F8F5F3] pb-[34px] pt-[54px]'>
                <div className=' w-[953px] mx-auto'>
                    <div className='mx-auto w-full'>
                        <span className='text-fuchsia block text-center text-[34px] font-[600]'>{"You're in! 🥳"}</span>
                        <p className='text-[18px] text-center font-[300]'>
                            You can find your ticket in your <br />
                            <Link href="/profile" className='text-fuchsia underline'>profile</Link>
                            & your email.
                        </p>
                    </div>
                    <SuccessInfoStep />
                </div>
            </div>
            <div className='w-[954px] mx-auto'>
            <UpcomingEvents />
            </div>
        </div>
    )
}

export default page