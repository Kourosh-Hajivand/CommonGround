import Image from "next/image";
import React from "react";
import HostProfile from "../../../../public/images/Male.png";

type Props = {
  fullname: string;
  aboutme: string;
};

export function HostDetails({ fullname , aboutme }: Props) {
  return (
    <div className="mt-[43px]">
      <h6 className="text-[20px] font-medium text-[#000] mb-[12.6px] leading-[37.40px]">
      Meet your Host:
      </h6>
      <div className="">
        <div className="bg-[#F8F5F3] rounded-[20px] pl-[11px] pr-[17px] pt-[11px] pb-[15.5px]">
          <div className="flex items-center gap-[15.25px]">
              <Image
                src={HostProfile}
                alt="HostProfile"
                className="w-[69px] h-[67px] object-contain"
              />
            <div className="w-full space-y-1">
              <h1 className="font-medium">{fullname}</h1>
              <div className="flex items-center gap-[11px]">
                <button className="bg-[#931D72] font-medium text-white rounded-[20px] w-full h-[29.06px]">
                  + add Host
                </button>
                <button className="rounded-[20px] font-medium flex justify-center items-center border-[#000] border-[.5px] w-full h-[29.06px]">
                  massages
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-light text-[#931D72] ">About me:</p>
            <span className="text-[16px] text-[#000] font-light">
                {aboutme}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostDetails;
