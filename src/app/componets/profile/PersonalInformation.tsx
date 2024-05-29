"use client"

import { FunctionComponent } from "react";
import Input from "../common/Input";
import PhoneInput from "react-phone-input-2";
import SimpleInput from "../common/SimpleInput";
import '../../../../node_modules/react-phone-input-2/lib/style.css'
import DateOfBirth from "./DateOfBirth";

export const PersonalInformation: FunctionComponent = () => {
  return (
    <div className='bg-[#f8f5f3] h-full mx-[25px] rounded-xl '>
      <div className="flex flex-col gap-[10px] personal_detail ">
        <SimpleInput label="first name:" />
        <SimpleInput label="last name:" />
        <div>
        <p className="text-zinc-800 text-lg font-light pl-[20.7px] ">date of birth:</p>
          <PhoneInput onChange={() => { }} />
        </div>
        <DateOfBirth />
      </div>
    </div>
  );
};

export default PersonalInformation;
