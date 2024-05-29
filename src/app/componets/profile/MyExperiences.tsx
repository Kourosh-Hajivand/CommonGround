import React from 'react'
import CardEvent from '../common/CardEvent'
type Props ={
    className:string
}
const MyExperiences = ({className}:Props) => {
    return (
        <div className={`bg-[#F8F5F3] h-full pt-[40.29px]   rounded-xl ${className}`}>
            <div className='grid lg:grid-cols-2 mx-[24.49px] pl-[22.5px] [direction:rtl] pb-[40.29px] gap-[17px] overflow-auto h-full'>
                {new Array(10).fill(10).map((item)=>(
                <CardEvent key={item}/>
                ))}
            </div>
        </div>
    )
}

export default MyExperiences