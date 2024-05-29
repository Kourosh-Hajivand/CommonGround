import { it } from 'node:test';
import React from 'react'
type Props = {
    item: {
        title: string;
        description: string;
        Icon: ({ className }: {
            className?: string
        }) => JSX.Element
    }
}
const CardHowitWork = ({ item }: Props) => {
    return (
        <div className="min-w-[225.70px] h-[292px] lg:h-[290.12px] bg-[#f8f5f3] rounded-[20px] border border-pink-200 mt-[5px]" >

            <div className='flex items-center justify-center mt-[32px] h-[89.82px] '>
                <item.Icon />
            </div>

            <div className="mt-[24.63px] h-[145.01px] px-[15px]">
                <p className="text-zinc-800 text-lg font-bold whitespace-nowrap leading-[21.06px]">{item.title}</p>

                <span className="text-zinc-800 pt-2 block text-base font-normal  leading-[18.72px]">{item.description}</span></div>
        </div>
    )
}

export default CardHowitWork