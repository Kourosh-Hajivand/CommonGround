import React from 'react'

const DateOfBirth = () => {
    return (
        <div>
            <p className="text-zinc-800 text-lg font-light pl-[20.7px] ">date of birth:</p>
            <div className='flex items-center bg-white h-[52.8px] rounded-[15px] mt-[8px]'>
                <input className='bg-transparent outline-none text-center' placeholder='day' />
                <div className="text-zinc-800 text-xl font-light">/</div>
                <input className='bg-transparent outline-none text-center' placeholder='month' />
                <div className="text-zinc-800 text-xl font-light">/</div>
                <input className='bg-transparent outline-none text-center' placeholder='year' />
            </div>
        </div>
    )
}

export default DateOfBirth