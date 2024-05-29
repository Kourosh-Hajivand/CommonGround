"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Arrow_down_icon, Arrow_icon, Experience_icon, Two_user_icon, User_icon } from '../common/icons';
import CardEvent from '../common/CardEvent';

export default function AccordionProfile() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className='mt-7 block lg:hidden'>
            <Accordion sx={{boxShadow:"none",background:expanded === 'panel1'?"#F8F5F3":"transparent",borderRadius:"20px !important"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<Arrow_down_icon className=' text-fuchsia'/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className='flex items-center gap-2'>
                        <Experience_icon />
                        <p className='font-medium text-zinc-800'>My Experiences</p>
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                   <div className='flex items-center overflow-auto gap-8'>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                   </div>
                </AccordionDetails>  
            </Accordion>
            <Accordion sx={{boxShadow:"none",background:expanded === 'panel2'?"#F8F5F3":"transparent",borderRadius:"20px !important"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<Arrow_down_icon className=' text-fuchsia'/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className='flex items-center gap-2'>
                        <Two_user_icon />
                        <p className='font-medium text-zinc-800'>Connections</p>
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                   <div className='flex items-center overflow-auto gap-8'>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                   </div>
                </AccordionDetails>  
            </Accordion>
            <Accordion sx={{boxShadow:"none",background:expanded === 'panel3'?"#F8F5F3":"transparent",borderRadius:"20px !important"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<Arrow_down_icon className=' text-fuchsia'/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className='flex items-center gap-2'>
                        <User_icon />
                        <p className='font-medium text-zinc-800'>Personal details </p>
                    </div>

                </AccordionSummary>
                <AccordionDetails>
                   <div className='flex items-center overflow-auto gap-8'>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                    <CardEvent/>
                   </div>
                </AccordionDetails>  
            </Accordion>
        </div>
    );
}
