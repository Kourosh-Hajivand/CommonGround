import CardEventContainer from '@/app/componets/common/CardEvent'
import Cover from '@/app/componets/experience/Cover'
import CardEvent from "../../componets/common/CardEvent";

import React from 'react'

function Page() {
    const array = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <div>
            <div>
                <Cover />
            </div>
            <div className='bg-[#F8F5F3]'>
                <div className='flex flex-wrap justify-center max-w-[950px] mx-auto gap-[15px] pt-[35px]'>
                    {array.map((item, index) => (
                        <div key={item} className="!overflow-hidden !max-w-[226px] !min-w-[226px] !min-h-[407px]">
                            <CardEvent />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page