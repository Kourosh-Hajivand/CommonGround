import React, { useState } from 'react'
import { Arrow_down_icon, Arrow_icon, Check_icon, Plus_icon, Tier_icon } from '../common/icons'
import Input from '../common/Input'
import Ticket from './Ticket'

type Props = {
    setSelect: React.Dispatch<React.SetStateAction<number>>
}
const StepTwo = ({ setSelect }: Props) => {
    const [open, setOpen] = useState(0)
    return (
        <div>
            {/* vip box */}
            <Ticket title="1 VIP ticket" />
            <div className='px-[10px] lg:px-[30px]'><span className="text-zinc-800 text-base font-light">you have </span><span className="text-fuchsia text-base font-light underline">2 unassigned VIP ticket</span></div>
            {/* medium ticket */}
            <Ticket  title="2 Medium ticket"/>
            <button onClick={() => setSelect(2)} className="w-full lg:w-[276.89px] gap-[7.63px] mt-[42.82px] ml-auto flex items-center justify-center h-[44.06px] bg-fuchsia rounded-[20px]" >
                <p className="text-white text-xl font-medium">Checkout</p>
                <Arrow_icon className='w-5 h-5 text-white' />
            </button>
        </div>
    )
}

export default StepTwo