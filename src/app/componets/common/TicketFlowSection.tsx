import React from 'react'
import TicketName from './TicketName';
import Counter from './Counter';
function TicketFlowSection() {
    const ticketsData = [
        { id: 1, title: 'VIP ticket', description: 'This ticket is expensive because we can.', pricePerTicket: 1 },
        { id: 2, title: 'Standard ticket', description: 'A regular ticket for average folks.', pricePerTicket: 50 },
        { id: 3, title: 'Student ticket', description: 'Discounted ticket for students.', pricePerTicket: 30 },
    ];
    return (
        <div>

            {ticketsData.map((ticket) => (
                <React.Fragment key={ticket.id}>
                    <div className='flex items-center justify-between p-[30px]'>
                        <TicketName nameTitle={ticket.title} InfoTicket={ticket.description} />
                        <Counter pricePerTicket={ticket.pricePerTicket} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default TicketFlowSection