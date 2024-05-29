import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react'
type Props = {
    label?: string;
    placeholder?: string;
    Icon?: ({ className }: { className?: string }) => JSX.Element;
    className?: string;
    container?: string;
}
const Input = ({ label, Icon, placeholder, className ,container}: Props) => {
    return (
        <div className={container}>
            {
                label &&
                <label className=" text-gray-800 text-[14.88px] font-normal leading-snug">{label}</label>
            }
            <div className={`flex bg-white h-[47px] p-3 gap-2 mt-px rounded-[5px] ${className}`}>
                <input placeholder={placeholder} className='w-full outline-none   bg-transparent rounded-[5px]   justify-start items-center gap-2 inline-flex text-zinc-500 text-base font-normal' />
                {
                    Icon && <Icon />
                }
            </div>
        </div>
    )
}

export default Input