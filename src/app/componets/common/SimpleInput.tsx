import React from 'react'


type Props = {
    label: string
}

function SimpleInput({ label }: Props) {
    return (
        <div>
            <label className=" text-zinc-800 text-lg font-light ">{label}</label>
            <div className='bg-white rounded-[15px] w-full p-[14px] '>
                <input type="text" className='bg-transparent outline-none' />
            </div>
        </div>
    )
}

export default SimpleInput