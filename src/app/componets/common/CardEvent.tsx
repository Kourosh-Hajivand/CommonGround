import Image, { StaticImageData } from "next/image";
import React from "react";
import Slide1 from "@/../public/images/slide3.png";
import { Calender_icon, Location_icon, Watch_icon } from "./icons";
import Ticket from "@/../public/images/ticket.svg";
import User from "@/../public/images/user.jpg";
type Props = {
  event: {
    image:string | StaticImageData;
    status:string;
    location:string;
    title:string;
    date:string;
    time:string;
    organizer:string;
  }
}
const eventsData = [
  {
    id: 1,
    image: Slide1,
    status: "sold out!!",
    location: "Vancouver ، Elsa st",
    date: "12/14 dec",
    time: "20:00 pm",
    title: "Build healtly with   Build healtly with Build healtly with",
    organizer: "Alexander",
  },
  // Add more event data as needed
];

const CardEvent = ({ event }: Props) => {
  return (
    <div className="h-fit p-[4px] bg-white rounded-[20px] ![direction:ltr] !min-h-[407px]">
      <div className="relative w-full h-48">
        <Image
          alt=""
          className="w-[218px] h-[195px] object-cover rounded-[17px]"
          src={event.image}
        />
        {/* status */}
        {event.status && (
          <span className="absolute top-2 right-3 w-20 py-1 text-center block bg-pink-200 rounded-lg text-fuchsia text-xs font-semibold">
            {event.status}
          </span>
        )}
        <div className="absolute bottom-2 p-1 left-2  flex items-center gap-1 bg-white rounded-3xl">
          <div className="w-[18px] h-[17px] flex justify-center items-center bg-pink-200 rounded-3xl">
            <Location_icon className="text-fuchsia" size="13" />
          </div>
          <span className="text-fuchsia text-[12px] mr-[12.48px]">
            {event.location}
          </span>
        </div>
      </div>
      <div className="pb-[17px] px-[14px] mt-3 flex flex-col gap-2">
        <div>
          <h6 className={`text-zinc-800 text-[16px] mb-[13px] font-bold overflow-hidden ${event.title.length > 40 ? 'line-clamp-2' : 'line-clamp-1'}`}>
            {event.title}
          </h6>
          {event.title.length < 40 && <hr className="text-[#F1D7EA] pb-[12px]" />}
        </div>
        <div className="flex items-center gap-[5.75px] ">
          <div className="flex items-center ">
            <Calender_icon className="text-fuchsia" size="19" />
            <span className="text-fuchsia text-[14px] whitespace-nowrap  font-medium">
              {event.date}
            </span>
          </div>
          <div className="flex items-center ">
            <Watch_icon className="text-fuchsia" size="18" />
            <span className="text-fuchsia text-[14px] whitespace-nowrap font-medium">
              {event.time}
            </span>
          </div>
        </div>
        <div className="h-8 flex px-1 items-center justify-between bg-stone-100 rounded-3xl">
          <div className="ml-[9.75px]">
            <span className="text-zinc-800 text-[14px] font-light ">by </span>
            <span className="text-zinc-800 text-[14px] font-medium ">
              {event.organizer}
            </span>
          </div>
          <Image
            className="w-7 h-7 border border-white  rounded-full overflow-auto"
            src={User}
            alt="user"
          />
        </div>
        <button className="h-8 flex justify-center gap-1 mt-2 items-center rounded-[20px] border-[.5px] border-[#931D72]">
          <Image src={Ticket} alt="buy-ticket" width={19} height={19} />
          <span className="text-fuchsia text-base font-medium">buy ticket</span>
        </button>
      </div>
    </div>
  );
};

const CardEventContainer = () => {
  return (
    <div>
      {eventsData.map((event) => (
        <CardEvent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default CardEventContainer;
