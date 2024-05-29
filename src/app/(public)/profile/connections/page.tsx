import Connections from '@/app/componets/profile/Connections'
import React from 'react'

function page() {
  return (
      <div className="bg-[#F8F5F3] h-full pt-[25px] px-[25px]  rounded-xl">
        <div className='gap-[17px]  overflow-auto h-full [direction:rtl] '>
          <Connections />
        </div>
      </div>

  )
}

export default page