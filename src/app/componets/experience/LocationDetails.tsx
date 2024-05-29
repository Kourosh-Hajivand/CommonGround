import React from "react";
import Map from "../common/LeafLet";
import InfoAddress from "./InfoAddress";

function LocationDetails() {
  return (
    <div className="bg-[#F8F5F3] rounded-[20px]  pt-[8.2px] ">
      <Map />
      <InfoAddress AddressInfo="In publishing and graphic design , ublishing" startTime="20:00" endTime="2hour" calendar="12/14 dec،2023"/>
    </div>
  );
}

export default LocationDetails;
