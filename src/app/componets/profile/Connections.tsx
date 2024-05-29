"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Male from "@/../public/images/Male.png";
import { Calender_icon } from '@/app/componets/common/icons';


const dataArray = [
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },

  // Add more data objects as needed
];

function Connections() {
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === index ? null : index
    );
  };
  return (
    <div className='[direction:ltr]'>
      {dataArray.map((item, index) => (
        <button
          key={item.name}
          className={` py-[6px] pl-[7px] pr-[19.42px] bg-white rounded-[15px] mb-[10px]  ${openAccordion === index ? "open border border-pink-200" : ""
            }`}
          onClick={() => handleAccordionClick(index)}
        >
          <div
            className={`flex items-center gap-1 w-full ${openAccordion === index ? "" : "justify-between"
              }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.image || Male}
                alt={`${item.name}'s profile`}
                className="w-[40px] h-[40px] object-contain"
              />
              <span className="text-18 text-[#342D32] font-[500]">
                {item.name}
              </span>
            </div>
            <div className="flex items-center text-[14px] gap-[3px]">
              <p
                className={` ${openAccordion === index
                  ? "text-[#342d32] text-xs"
                  : "text-fuchsia font-[500] "
                  }`}
              >
                {item.commen}
              </p>
              <span className="text-[#342D32] font-[300]">
                shared experiences
              </span>
            </div>
          </div>
          <div
            className={` overflow-hidden  ${openAccordion === index ? "h-fit pt-[15px] px-[14px]" : "h-0"
              } `}
          >
            <div className="flex justify-between items-start gap-4 border-b mt-1 border-pink-200 pb-2">
              <p className="text-[#342D32] font-[400] text-[15px] show_two_line">
                Build healthy habits with us and your friends Build
                healthy habits with us and your friends Build healthy
                habits with us and your friends
              </p>
              <div className="flex items-center gap-1 mt-[1px]">
                <Calender_icon className="w-4 h-4 block text-fuchsia" />
                <span className="text-[13px] text-[#931D72] whitespace-nowrap">
                  12/14 dec،2023
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start gap-4  mt-2">
              <p className="text-[#342D32] font-[400] text-[15px] show_two_line">
                Build healthy habits with us and your friends Build
                healthy habits with us and your friends Build healthy
                habits with us and your friends
              </p>
              <div className="flex items-center gap-1 mt-[1px]">
                <Calender_icon className="w-4 h-4 block text-fuchsia" />
                <span className="text-[13px] text-fuchsia whitespace-nowrap">
                  12/14 dec،2023
                </span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

export default Connections