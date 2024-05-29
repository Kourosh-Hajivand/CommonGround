"use client";

import Image from "next/image";
import React, { useState } from "react";
import experienceImage from "@/../public/images/Experience.png";
import Arrow from "@/../public/images/musiic.png";
import heart from "@/../public/images/heart.png";
import flag from "@/../public/images/flag.png";
import share from "@/../public/images/share.png";
import { Arrow_down_icon, Arrow_icon, Calender_icon, Location_icon, Music_icon, Plus_icon } from "../../componets/common/icons";
import Link from "next/link";
import HostDetails from "../../componets/common/HostDetails";
import LocationDetails from "../../componets/experience/LocationDetails";
import Tags from "../../componets/experience/Tags";
import Male from "@/../public/images/Male.png";
import UpcomingEvents from "../../componets/home/UpcomingEvents";
import GetStart from "@/app/componets/common/GetStart";

const dataArray = [
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  { name: "Liam", commen: 5, image: Male },
  // Add more data objects as needed
];

function Experience() {
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);

  const handleAccordionClick = (index: number) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === index ? null : index
    );
  };

  return (
    <div>
      <div className=" w-[95%]  lg:w-[950px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-center gap-[53px]  mt-[32px]">
          <div className="md:w-[520px]">
            <div className="relative">
              <Image
                src={experienceImage}
                alt="experience"
                className="rounded-[20px] w-full object-cover"
              />
              <div className="absolute bottom-[5%] left-[3%] z-10 w-[109px] flex items-center gap-[4.8px] pr-[7.4px] pl-[2.14px] py-[2px] h-[25px]  text-[#931D72] text-[12px] font-[400] bg-white rounded-[58px]">
                <div className="w-[20.88px] h-[20.44px]  bg-pink-200 flex justify-center items-center rounded-[50px]">
                  <Music_icon className="mr-1" />
                </div>
                <span className="font-normal whitespace-nowrap">music events</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[22.55px]">
              <div>
                <h6 className="text-[#342D32] font-bold text-[20px]">
                  Build healthy habits
                </h6>
                <div className="flex justify-start items-center gap-[3.3px]  bg-white rounded-3xl">
                  <Location_icon className="text-fuchsia" size="15" />
                  <span className="text-[#931D72] text-[16px] font-normal ">
                    Elsa St, Vancouver
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <Link href="#">
                  <Image src={heart} alt="heart-events" />
                </Link>
                <Link href="#">
                  <Image src={share} alt="heart-events" />
                </Link>
              </div>
            </div>
            <div className="pt-[22.55px] pb-[49.55px]">
              <p className="text-[#000] text-[16px] font-[300] text-justify  font-light ">
                Happiness hour is different than a typical happy hour. Its all
                about good vibes, unwinding after work, and connecting with
                relationships rather than “networking.” For professionals to
                unwind after work without thinking about work. <br /> The dress
                code is to dress to express. Dress how you feel most like
                yourself. To get the most out of the group, focus on building
                relationships and do not talk too much about work. Eventhough
                this is a professional after-work group. As this is about
                unwinding and connecting.
              </p>
            </div>
            <div className="md:w-[520px]  lg:my-0 mx-auto lg:mx-0  flex justify-center items-center lg:block">
              <div>
                <LocationDetails />
                <HostDetails
                  fullname="Tomas Anderson"
                  aboutme="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface"
                />
                <Tags />
                <div className="mb-[42.5px]">
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-[2px] bg-[#FCF6ED] border-[.5px] border-[#E48E0E] rounded-[58px] py-[6.5px]"
                  >
                    <Image src={flag} alt="flag" />
                    <span className="text-[#E48E0E] font-[400] text-[14px]">
                      report a problem
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[381px] mb-[32px] lg:mb-0 sticky top-20">
            <div className="title_users  pt-[11.47px] px-[19.6px] bg-no-repeat w-full h-[40px]">
              <p className=" text-black text-lg font-medium leading-[33.66px]">
                Familiar Faces:
              </p>
            </div>
            <div className="bg-stone-100 rounded-b-xl rounded-tr-xl py-[20.4px] px-[19.6px]">
              {dataArray.map((item, index) => (
                <button
                  key={item.name}
                  className={` py-[6px] pl-[7px] pr-[20px] bg-white rounded-[15px] mb-[10px] ${openAccordion === index ? "open border border-pink-200" : ""
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
                    className={`transition-shadow duration-500 overflow-hidden  ${openAccordion === index ? "h-fit pt-[15px] pl-[7px] pr-0" : "h-0"
                      } `}
                  >
                    <div className="flex justify-between items-start gap-4 border-b mt-1 border-pink-200 pb-2">
                      <p className="text-[#342D32] font-[400] text-[15px] show_two_line text-left">
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
                      <p className="text-[#342D32] font-[400] text-[15px] show_two_line text-left">
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
              <div className="">
                <div className="border-fuchsia  gap-[8px]  items-center border-[.5px] rounded-[15px] py-[6.5px] flex justify-center mt-[20px] text-[#931D72] text-[16px] font-[500]">
                  <p className="flex items-center">
                    <Plus_icon className="mt-[1px]" />
                    <span>15 </span>
                    more
                  </p>
                  <Arrow_down_icon className="mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <UpcomingEvents />
        <GetStart />
      </div>
    </div>
  );
}

export default Experience;
