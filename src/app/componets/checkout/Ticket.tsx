import React, { useState } from 'react'
import { Arrow_down_icon, Check_icon, Plus_icon, Tier_icon } from '../common/icons'
import Input from '../common/Input'
type Props = {
    title: string;
}
const Ticket = ({ title }: Props) => {
    const [open, setOpen] = useState(false)
    const [answer, setAnswer] = useState<{ answer1: null | number, answer2: null | number }>({
        answer1: null,
        answer2: null,
    })
    return (
        <div className="w-full lg:p-[24.3px] px-[14px] pb-4 lg:pb-[24px] pt-0 mt-[20px] rounded-[20px] border border-neutral-400" >
            <p className="text-zinc-800 text-xl mt-[21px] font-medium ">{title}</p>
            <div className="w-full px-[13.6px] h-fit mt-[20px] pb-[20px] bg-white rounded-[15px] border border-pink-200" >
                <div className="w-full px-2 relative  mx-auto h-[58.24px] flex flex-col lg:flex-row items-center justify-between" >
                    <div className='flex items-start w-full mt-1 lg:items-center gap-[8.51px] '>
                        <Tier_icon />
                        <p className="text-zinc-800 text-lg font-medium">ticket number 1 </p>
                    </div>
                    <div className='flex items-center flex-1 mt-2 lg:mt-0 w-full gap-[22.32px]'>
                        <button onClick={()=>setOpen(!open)} className="w-full lg:w-[143.82px] h-[26.38px] flex items-center justify-center rounded-[15px] border border-pink-200" >
                            <Plus_icon />
                            <p className="text-fuchsia text-sm font-medium">Add from friends</p>
                        </button>
                        <Arrow_down_icon className='absolute lg:static right-0 top-3.5' />
                    </div>
                </div>
                {
                    open &&
                    <>

                {/* form */}
                <div className='grid lg:grid-cols-2 mt-3 lg:mt-0 lg:gap-[21.14px]'>
                    <Input backgroundColor='#F8F5F3' title='First and last Name:' />
                    <Input backgroundColor='#F8F5F3' title='Email' />
                </div>
                <div className='mt-[22px]'>
                    <p className="text-zinc-800 text-lg font-medium">Do you have a paddle board?</p>
                    {/* options */}
                    <div className='mt-[15.81px] grid lg:grid-cols-2 gap-[17.85px]'>
                        {
                            ["YES - I will bringing my own", "NO - Please rent one for me"].map((option, idx) => (
                                <button onClick={() => setAnswer({ ...answer, answer1: idx })} key={option} className={`w-full flex items-center px-[9px] gap-[7.54px] h-[41.52px] bg-stone-100 rounded-[15px] border ${answer.answer1 === idx ? "border-fuchsia" : "border-transparent"}`} >
                                    <div className={`w-[23.42px] h-[23.42px] flex justify-center items-center bg-white rounded-[52px] border  ${answer.answer1 === idx ? "border-fuchsia" : "border-pink-200"}`} >
                                        {
                                            answer.answer1 === idx &&
                                            <Check_icon className={`${answer.answer1 === idx ? "text-fuchsia" : "text-[#F1D7EA]"}`} />
                                        }
                                    </div>
                                    <p className="text-zinc-800 text-base font-normal">{option}</p>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full h-px bg-pink-100 my-[26px]' />
                <div className='mt-[22px]'>
                    <p className="text-zinc-800 text-lg font-medium">Do you have any food allergies or requirements?</p>
                    {/* options */}
                    <div className='mt-[15.81px] grid lg:grid-cols-2 gap-[17.85px]'>
                        {
                            ["Glutten Free", "Vegan", "Dairy Free", "None", "Vegetarian", "Other"].map((option, idx) => (
                                <button onClick={() => setAnswer({ ...answer, answer2: idx })} key={option} className={`w-full flex items-center px-[9px] gap-[7.54px] h-[41.52px] bg-stone-100 rounded-[15px] border ${answer.answer2 === idx ? "border-fuchsia" : "border-transparent"}`} >
                                    <div className={`w-[23.42px] h-[23.42px] flex justify-center items-center bg-white rounded-[52px] border  ${answer.answer2 ? "border-fuchsia" : "border-pink-200"}`} >
                                        {
                                            answer.answer2 === idx &&
                                            <Check_icon className={`${answer.answer2 ? "text-fuchsia" : "text-[#F1D7EA]"}`} />
                                        }
                                    </div>
                                    <p className="text-zinc-800 text-base font-normal">{option}</p>
                                </button>
                            ))
                        }
                    </div>
                </div>
                    </>
                }
            </div>
            {/* <div className="w-full mt-[17.61px] mx-auto h-[58.24px] flex items-center justify-between pl-[16.33px] pr-[24.71px] bg-white rounded-[15px] border border-pink-200" >
                <div className='flex items-center gap-[8.51px]'>
                    <Tier_icon />
                    <p className="text-zinc-800 text-lg font-medium">ticket number 1 </p>
                </div>
                <div className='flex items-center gap-[22.32px]'>
                    <button className="w-[143.82px] h-[26.38px] hidden lg:flex items-center justify-center rounded-[15px] border border-pink-200" >
                        <Plus_icon />
                        <p className="text-fuchsia text-sm font-medium">Add from friends</p>
                    </button>
                    <Arrow_down_icon />
                </div>
            </div> */}
        </div>
    )
}

export default Ticket