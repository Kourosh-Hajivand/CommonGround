import Image from "next/image";
import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import chat from "@/../public/images/contact.svg";
import Input from "@/app/componets/common/Input";

const ProfileDesktop: FunctionComponent = () => {
  return (
    <>
      <div className="w-full lg:w-[852px] relative bg-white mx-auto overflow-hidden text-left text-lg text-gray font-bornia pt-[66px]">
        <div className=" rounded-xl bg-white box-border w-full  lg:w-[852.2px]  lg:border-[1px] border-solid border-thistle mx-auto">
          <div className="px-[21.5px] pt-[20px] pb-[38px]">
            <div className="  rounded-[15px] bg-[#F8F5F3] box-border  py-[6px] border-[1px] border-solid border-thistle ">
              <div className=" flex items-center gap-[15.5px] h-[41px] text-3xl">
                <Image
                  className="w-[26.81px] h-[26.81px] ml-[16.5px]"
                  alt=""
                  src={chat}
                />
                <b className="  leading-[186.98%]">Get in Touch</b>
              </div>
            </div>
            <div className=" text-base text-black  ml-[12px] mt-[23px]">
              <p className="m-0">
                <span className="leading-[186.98%]">
                  <span className="font-light font-bornia">Got a question? Need help? Want to suggest an Experience? Or </span>
                  <b className="font-bornia">become a Host?</b>
                  <span> Drop us a note using the form below and we’ll get back to you within 48hrs.</span>
                </span>
              </p>
              <p className="m-0">
                <span className="leading-[186.98%]">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="leading-[62%]">Zuki, Kousha & Raya x</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <form
        action="#"
        className="w-full lg:w-[830px]  mx-auto px-[23px] lg:p-0 mt-[33px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-[13px]">
          <div className="lg:col-span-2">
            <Input
              title="Name:"
              backgroundColor="#ffff"
              borderRadius="20px"
              classLabel="text-[18px] font-[600]"
              style={{ marginTop: "0" }}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-3">
            <Input
              title="Email:"
              backgroundColor="#ffff"
              borderRadius="20px"
              classLabel="text-[18px] font-[600] "
              style={{ marginTop: "0" }}
            />
          </div>
          <div className="lg:col-span-4 lg:row-start-2">
            <select
              name="whatsup"
              id=""
              className="bg-white rounded-[20px]   border-[1px] text-[18px] font-[600] border-[#F1D7EA] w-full p-[14px]"
            >
              <option value="Whats up?">Whats up?</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>
          </div>
          <div className="lg:col-span-4 lg:row-span-4 lg:row-start-3">
            <textarea
              name="Spill"
              id=""
              cols={50}
              rows={10}
              placeholder="Spill the tea."
              className="bg-white rounded-[20px] placeholder:text-[#342D32] font-[600]  text-[18px]  border-[1px]  border-[#F1D7EA] w-full p-[14px]"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full lg:w-fit   rounded-[20px] border-[2px] mt-[27px] border-[#C9677B] text-[#C9677B] py-[10px] px-[100px] text-[20px] font-[600]  "
          >
            Message sent!
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileDesktop;
