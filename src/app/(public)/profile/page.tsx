import AccordionProfile from '@/app/componets/profile/Accordion'
import MyExperiences from '@/app/componets/profile/MyExperiences'
import React from 'react'

const Page = () => {
    return (
     <>
        <MyExperiences className="hidden lg:block"/>

        <AccordionProfile/>
     </>
    )
}

export default Page