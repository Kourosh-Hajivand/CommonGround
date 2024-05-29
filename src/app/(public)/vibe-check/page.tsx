import { FunctionComponent } from "react";
import banner from "@/../public/images/cg-banner-1.png";
import Image from "next/image";
import GetStart from "@/app/componets/common/GetStart";
const VibeChekDesktop: FunctionComponent = () => {
  return (
    <>
      <div className=" relative bg-white  overflow-hidden text-left text-xl text-gray font-bornia w-[954px] mx-auto">
        <div className="relative">
          <Image
            className="rounded-t-none rounded-b-xl  h-[444.91px] object-cover"
            alt="banner"
            src={banner}
          />
          <div className="absolute bottom-[4.8rem] ml-[80px]">
            <div className="text-[35px] leading-[114%] font-extrabold text-white  ">
              Vibe Check
            </div>
            <div className="text-3xl leading-[186.98%] text-white  ">
              The vibe creates the tribe.
            </div>
          </div>
        </div>
        <div className="bg-white border-[1px] rounded-[20px] border-[#F1D7EA] w-[89%] mx-auto -translate-y-[65px]">
          <div className="flex flex-col items-center pr-[22px] pl-[33px]">
            <div className=" rounded-[15px] bg-[#F8F5F3] box-border w-[808.81px] py-[8px] px-[18.5px] mt-[20.75px] border-[1px] border-solid border-thistle">
              <b className=" leading-[186.98%]  ">House Rules:</b>
            </div>
            <div className="py-[26px]">
              <p className="m-0 leading-[186.98%] font-semibold">Don’t be a d*ck.</p>
              <p className="m-0 text-base leading-[174%] font-light">Pretty self-explanatory. Just don’t do it. We’re all here to mix, mingle & meet new people - add to the vibes, don’t take away.</p>
            </div>
            <div className="   ">
              <p className="m-0 leading-[186.98%] font-semibold">Keep it chill. </p>
              <p className="m-0 text-base">
                <span>
                  <span className="leading-[120%] font-medium">
                    this is sub heading
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    <span className="leading-[186.98%]">Be nice to people & respect their boundaries. </span>
                    <span className="leading-[174%]">
                      You might meet people you don’t like or who don’t like you
                      - that’s cool, just move along. Be polite about it.
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <div className=" pt-[26px] mb-[33px]">
              <p className="m-0">
                <span className="leading-[186.98%]">
                  <span className="font-semibold">Don’t be offensive</span>
                </span>
              </p>
              <p className="m-0 text-base">
                <span className="font-light">
                  <span className="leading-[186.98%]">conversation topics, including politics, </span>
                  <span className="leading-[174%]">sexuality, religion & all that saucy stuff. But keep it chill. We don’t tolerate sexism, racism, ableism, homophobia, transphobia or xenophobia (arachnophobia is fine though). Disagree, sure, but do it with empathy.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      <GetStart />

      </div>
    </>
  );
};

export default VibeChekDesktop;
