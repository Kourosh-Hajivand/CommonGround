import React from 'react'
import Factors from './Factors'
import { Button } from '@mui/material'
import Apple from "@/../public/images/apple.svg"
import Image from 'next/image'
import Input from './Input'
import { Cards_icon, Cvc_icon } from '../common/icons'
import Select from '../common/Select'
const StepThree = () => {
  return (
    <div className='mt-[40px] flex flex-col lg:flex-row items-start gap-[25px]'>
      <Factors />
      <div className='flex-1'>
        <button className='w-full h-[52px] flex justify-center items-center p-3 bg-black rounded-[5px]' style={{ boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.03), 0px 3px 6px 0px rgba(0, 0, 0, 0.02)" }} >
          <Image src={Apple} alt='' />
        </button>
        {/* line */}
        <div className='flex items-center mt-[25px]'>
          <span className='block flex-1 h-px bg-black' />
          <p className=" text-gray-800 px-5 text-[14.88px] font-light">Or pay with card</p>
          <span className='block flex-1 h-px bg-black' />
        </div>

        <Input className='border  border-neutral-200' label="Email" />
        {/* card number */}
        <div className='mt-[14px]'>
          <p className=" text-gray-800 text-[14.88px] font-normal leading-snug">Card number</p>
          <div className='border border-neutral-200 mt-1 rounded-[5px] w-full overflow-hidden'>
            <Input placeholder='1234 1234 1234 1234' Icon={Cards_icon} />
            <div className='flex bg-white h-[47px]  items-center  border-t border-neutral-200'>
              <div className='flex items-center flex-1 h-full'>
                <input placeholder='MM' className='w-full outline-none text-center' />
                /
                <input placeholder='YY' className='w-full outline-none text-center' />
              </div>
              <div className='flex items-center px-2  flex-1 border-l border-neutral-200 h-full'>
                <input placeholder='CVC' className='w-full outline-none' />
                <Cvc_icon />
              </div>
            </div>
          </div>
        </div>

        {/* name on card: */}
        <Input container="mt-[14px]" className='border  border-neutral-200' label='name on card:' />
        {/* Country or region */}
        <div className='!mt-[14px]'>
          <p className=" text-gray-800 text-[14.88px] font-normal leading-snug">Country or region</p>
          <div className=' rounded-[5px] mt-px overflow-hidden border border-neutral-200'>
            {/* <Select  />/ */}

            <input placeholder='ZIP' className='outline-none px-2 w-full block h-[40px]' />

          </div>
        </div>
        <Button fullWidth style={{ background: "#931D72", height: "61px", borderRadius: "20px", marginTop: "60px" }}>
          <span className="text-center text-white text-xl font-medium">Complete Order</span>
        </Button>
      </div>
    </div>
  )
}

export default StepThree