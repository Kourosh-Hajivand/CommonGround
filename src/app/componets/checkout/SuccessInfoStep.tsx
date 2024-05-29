import Image from 'next/image'
import React from 'react'
import success from '@/../public/images/Rectangle 67.png'
import HostProfile from "../../../../public/images/Male.png";

function SuccessInfoStep() {
    const IdTicket = 252353
    return (
        <div className='pt-[54px] flex justify-center items-center'>
            <div className='flex items-center'>
                <div>
                    <Image src={success} alt='info-success' className='object-cover w-[397px] h-[356px] ' />
                </div>
                <div className='bg-[url("/images/Rectangle-154.png")]  bg-contain w-[433px] h-[400px] pt-[30px] px-[14px] -translate-x-[50px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[8px]'>
                            <Image
                                src={HostProfile}
                                alt="HostProfile"
                                className="w-[33px] h-[33px] object-contain"
                            />
                            <h6 className='text-[#342D32] text-[18px] font-[500] '>From your Host:</h6>
                        </div>
                        <div>
                            <p className='text-[#342D32] text-[14px] font-[300] '>your Ticket ID: {IdTicket}</p>
                        </div>
                    </div>
                    <div className='bg-[#F8F5F3] rounded-[10px] rounded-tl-[2px] px-[12px] py-[10px] mt-[16px]'>
                        <p className='text-[#342D32] text-[16px] font-[400] '>
                            I just wanted to say a huge thank you for reserving a place for the experience on Friday, December 14th at 8:00 pm in Vancouver. I really appreciate it! Just a friendly reminder to bring the following three things with you:
                            <br />
                            <p>1. Your ID or any necessary identification for entry.</p>
                            <p>2. Any tickets or confirmation emails you received for the event.</p>
                            <p>3. Any additional requirements specific to the experience, such as comfortable shoes or a camera.</p>
                        </p>
                    </div>
                    <div className='flex items-center justify-between mt-[12px]'>
                        <button className='text-fuchsia border-fuchsia border-[1px] rounded-[10px] w-[195px] h-[35px]'>
                            Experience Details
                        </button>
                        <button className='bg-fuchsia text-white rounded-[10px] w-[195px] h-[35px] flex items-center justify-center'>
                            Explore Experience
                        </button>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default SuccessInfoStep