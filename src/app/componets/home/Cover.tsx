import React from 'react'
import Location from "../../../../public/images/location.svg" 
import Image from 'next/image'

const Cover = () => {
  return (
    <div className="cover-image w-full h-[445px] md:h-[438px] bg-no-repeat bg-cover rounded-bl-2xl rounded-br-2xl backdrop-blur-none">
      <div className='w-[95%] md:w-[950px] h-full flex flex-col  justify-end pb-8 lg:!pb-20 mx-auto'>
        <h1 className="text-white text-[35px] font-extrabold">Find Your People.</h1>
        <span className='flex items-center gap-3'>
          <Image src={Location} alt='location' className='object-cover' />
          <p className=" text-white text-[22px] font-normal">Vancouver BC</p>
        </span>
        <button className="w-56 h-14 mt-[20px] bg-fuchsia rounded-2xl text-white text-[20px] font-bold" >
          Find an exprience
        </button>
      </div>
    </div>
  )
}

export default Cover