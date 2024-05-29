import React from 'react'


type Props = {
    nameTitle: string,
    InfoTicket: string
}
function TicketName({ nameTitle, InfoTicket } : Props) {
    return (
        <div>
            <h1 className='text-[#342D32] text-[18px] font-[500]'>{nameTitle}</h1>
            <p className='text-[#342D32] text-[16px] font-[300]'>{InfoTicket}</p>
        </div>
    )
}

export default TicketName