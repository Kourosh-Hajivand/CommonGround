"use client"

import React, { useState } from 'react'
import TicketFlowSection from '../common/TicketFlowSection'
type Props ={
  setSelect:React.Dispatch<React.SetStateAction<number>>
}
const StepOne = ({setSelect}:Props) => {

  return (
    <div className='mt-[28px]  lg:px-0'>
      <div className='rounded-[20px] border-[1px] border-[#f1d7ea] bg-white'>
        <TicketFlowSection />
      </div>
      <div className='flex justify-end'>
        <button onClick={()=>setSelect(1)} className='bg-fuchsia text-white rounded-[20px] md:w-[276px] h-[60px] md:h-[44px] mt-[28px] w-full'>
          Assign tickets
        </button>
      </div>
    </div>
  )
}

export default StepOne