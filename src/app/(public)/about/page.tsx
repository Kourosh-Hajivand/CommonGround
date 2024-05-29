import React from "react";
import Background from "@/../public/images/bg-about.png";
import { People_icon, Seting_icon } from "@/app/componets/common/icons";
import { CardMeetTheteam } from "@/app/componets/about/CardMeetTheteam";
import { howItWork } from "@/helpers/utils/data";
import CardHowitWork from "@/app/componets/about/CardHowitWork";
import UpcomingEvents from "@/app/componets/home/UpcomingEvents";
import GetStart from "@/app/componets/common/GetStart";
const Page = () => {
    return (
        <>
            <div className=" pb-10 lg:h-[1560.46px]">
                <div className="w-full lg:w-[954px] mx-auto">
                    {/* cover */}
                    <div
                        className="h-[296.64px] lg:h-[444.907px] relative lg:rounded-b-[20px] w-full bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${Background.src})` }}
                    >
                        <div className="absolute bottom-[47px] lg:bottom-[64px] left-[40.2px] lg:left-[78px]">
                            <h4 className=" text-white text-[23px] lg:text-[35px] font-extrabold lg:leading-10">
                                {"Hey! We're "}
                                <br />
                                {"Common Ground"}
                            </h4>
                            <span className=" text-white text-[20px] font-normal leading-[41.14px]">
                                {"It's great to meet you."}
                            </span>
                        </div>
                    </div>
                    {/* description */}
                    <div className="w-[90%] lg:w-[854.13px] py-[23px] lg:pt-[25.42px] px-[28.61px] -mt-9 relative z-50 mx-auto lg:h-[159.45px] bg-[#f8f5f3] rounded-[20px] border border-pink-200" >
                        <p><span className="text-black text-md lg:text-lg font-normal">Common Ground started as a group of friends hosting events to, well, make more friends. They were over-subscribed, and really hard to organize. So we created Common Ground so that anyone could host their own, and everyone could discover them. We’re now on a mission to help everyone, everywhere to </span><span className="text-black text-md lg:text-lg font-bold">Find Your People.</span></p>
                    </div>

                    {/* meet the team */}
                    <div className="w-[90%] mx-auto lg:w-full mt-[38px] lg:mt-[61.7px]">
                        <div className="flex items-center justify-start lg:justify-center gap-[4.9px]">
                            <People_icon />
                            <span className="text-zinc-800 text-xl font-bold  leading-[37.40px]">
                                meet the team
                            </span>
                        </div>
                        <div className="mt-[11px] lg:mt-[34px] overflow-auto flex justify-between items-center gap-[15.23px]">
                            <CardMeetTheteam />
                            <CardMeetTheteam />
                            <CardMeetTheteam />
                        </div>
                    </div>

                    {/* how it work */}
                    <div className="mt-[59.5px] w-[90%] lg:w-full mx-auto">
                        <div className="flex items-center justify-start lg:justify-center gap-[4.9px]">
                            <Seting_icon />
                            <span className="text-zinc-800 text-xl font-bold  leading-[37.40px]">
                                How it Works
                            </span>
                        </div>
                        <div className="w-full mt-[20px] lg:mt-[33.5px] py-4 lg:pt-[26.5px] px-[31.71px] lg:h-[106.20px] bg-[#f8f5f3] rounded-[20px] border border-pink-200">
                            <p className=" text-zinc-800 text-lg font-normal leading-7">
                                {"You can't become friends with someone you've only met once. We've designed Common Ground not just for meeting new people, but for connecting with them again & again."}                            </p>
                        </div>
                        <div className="flex items-center gap-[15.8px] overflow-x-auto no-scrollbar  mt-[24px] lg:mt-[15.8px] justify-between">
                            {howItWork.map((item) => (
                                <CardHowitWork key={item.description} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mt-[89px] lg:w-[954px] mx-auto">
                <UpcomingEvents />
                <GetStart />
            </div>
        </>
    );
};

export default Page;
