"use client"
import React, { useState } from 'react'
import add from "@/../public/images/add.svg"
import minus from "@/../public/images/minua.svg"
import Image from 'next/image'
type Props = {
    pricePerTicket: number
}

function Counter({ pricePerTicket }: Props) {
    const [count, setCount] = useState<number>(0);
    // const pricePerTicket: number = 78;

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };
    return (
        <div className='flex md:items-center gap-[17px] flex-col-reverse items-end md:flex-row'>
            <div className='flex items-center gap-[19px]'>
                <button onClick={decrement} className='bg-[#F8F5F3] rounded-[7px] px-[3px] py-[2px]'>
                    <Image src={minus} alt='minus'/>
                </button>
                <span className='text-[#342D32] text-[20px] font-[500]'>{count}</span>
                <button onClick={increment} className='bg-[#F8F5F3] rounded-[7px] px-[3px] py-[2px] '>
                    <Image src={add} alt='add item'/>
                </button>
            </div>
            <div className='bg-[#FBF4F9] rounded-[7px] w-[55px] flex justify-center py-[2px] text-fuchsia font-[500] border-[#F1D7EA] border-[1px]'>
                <span>${pricePerTicket * count}</span>
            </div>
        </div>
    )
}

export default Counter