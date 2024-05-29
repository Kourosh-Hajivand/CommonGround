import React from 'react'

const Factors = () => {
    return (
        <div className='factors px-[20px] pt-[15px] relative'>
            <div className='absolute -right-2 bg-[#F8F5F3] w-5 h-5 rounded-full overflow-auto bottom-[4.4rem]'/>
            <div className='absolute -left-2 bg-[#F8F5F3] w-5 h-5 rounded-full overflow-auto bottom-[4.4rem]'/>
            {/* title */}
            <div className='flex items-center justify-between'>
                <p className="text-zinc-800 text-base font-light">Tickets</p>
                <p className="text-zinc-800 text-base font-light">Price</p>
            </div>

            <div className='flex items-center justify-between mt-[11px]'>
                <p className="text-zinc-800 text-xl font-medium">1 VIP ticket</p>
                <div className='flex flex-col'>
                    <p className="text-right text-zinc-800 text-xl font-medium ">$78</p>
                    <span className="text-right text-zinc-800 text-base font-light">$78ea</span>
                </div>
            </div>
            {/* line */}
            <div className='w-full h-px bg-pink-200 my-[13px]' />


            <div className='flex items-center justify-between'>
                <p className="text-zinc-800 text-xl font-medium">2 Medium ticket</p>
                <div className='flex flex-col'>
                    <p className="text-right text-zinc-800 text-xl font-medium ">$78</p>
                    <span className="text-right text-zinc-800 text-base font-light">$78ea</span>
                </div>
            </div>

            <div className="w-full mt-[16px] h-[30.21px] bg-stone-100 rounded-[84px] flex justify-between items-center px-[10px]" >
                <p className="text-zinc-800 text-base font-light">credit card processing fee:</p>
                <p className="text-right text-zinc-800 text-base font-light">$12</p>
            </div>

            {/* line */}
            <div className='w-full border-b mt-[24px] border-dashed ' />
            <div className='flex justify-between items-center mt-[28px]'>
                <p className="text-zinc-800 text-lg font-medium ">Total:</p>
                <p className="text-right text-fuchsia text-[22px] font-medium">$359</p>
            </div>
        </div>
    )
}

export default Factors