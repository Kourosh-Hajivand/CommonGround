import React from "react";
import Address from "../../../../public/images/location (2).svg";
import Image from "next/image";
import { Calender_icon, End_Clock_icon, Location_icon, Start_Clock_icon } from "../common/icons";

type Props = {
  AddressInfo: string;
  startTime: string;
  endTime: string;
  calendar: string;
};
function InfoAddress({ AddressInfo, startTime, endTime, calendar }: Props) {
  return (
    <div className="pl-[14px] pr-[25px] mt-[12px]">
      <div className="flex items-center gap-[6.45px]">
        <Location_icon className="text-fuchsia w-4 h-4 "/>
        <span>Address:</span>
      </div>
      <p className="text-[18px] font-[500] text-[#000] border-b-[.5px] border-[#F1D7EA] ml-[6px] pb-[11.22px]">
        {AddressInfo}
      </p>
      <div>
        <div className="flex items-center justify-between pt-[11px] pb-[8px] border-b-[.5px] border-[#F1D7EA]">
          <div className="flex items-center gap-[6.45px]">
            <Start_Clock_icon/>
            <span className="text-[18px] font-light text-[#342D32]">
              start time:
            </span>
          </div>
          <div className="text-[18px] font-medium text-[#342D32]  ">
            {startTime}
          </div>
        </div>
        <div className="flex items-center justify-between pt-[11px] pb-[8px] border-b-[.5px] border-[#F1D7EA]">
          <div className="flex items-center gap-[6.45px]">
            <End_Clock_icon />
            <span className="text-[18px] font-light text-[#342D32]">
              end time:
            </span>
          </div>
          <div className="text-[18px] font-medium text-[#342D32]">{endTime}</div>
        </div>
        <div className="flex items-center justify-between pt-[11px] pb-[14px] ">
          <div className="flex items-center gap-[6.45px]">
            <Calender_icon size="25" className="text-fuchsia"/>
            <span className="text-[18px] font-[300] text-[#342D32]">date:</span>
          </div>
          <div className="text-[18px] font-medium text-[#342D32]">
            {calendar}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAddress;
