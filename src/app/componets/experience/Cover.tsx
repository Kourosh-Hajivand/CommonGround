import React from 'react'
import Image from 'next/image'


function Cover() {
    return (
        <div className="bg-[url('/images/Rectangle-163.png')] w-full h-[445px] md:h-[438px] bg-no-repeat bg-cover rounded-bl-2xl rounded-br-2xl backdrop-blur-none">
            <div className='w-[95%] md:w-[950px] h-full flex flex-col  justify-end pb-8 lg:!pb-20 mx-auto'/>
        </div>
    )
}

export default Cover