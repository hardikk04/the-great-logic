import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  para: string;
}

const ProcessCard = ({ title, para }: Props) => {
  return (
    <div
      className={`flex items-center text-black gap-6 w-[50%] max-sm:w-full max-md:w-full relative z-[1]`}
    >
      <h2 className="text-[#033c58] text-[5.5vw] max-sm:text-[8vw] max-md:text-[7vw]  leading-none">
        {/* {number} */}
      </h2>
      <div className="flex flex-col gap-2">
        <h3 className="heading text-2xl font-medium heading">{title}</h3>
        <span className="para text-xl inline-block opacity-70">{para}</span>

        <span
          onMouseEnter={() => {
            gsap.to(".right-arrow", {
              transform: "rotate(90deg)",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".right-arrow", {
              transform: "rotate(0deg)",
            });
          }}
          className="flex items-center gap-2 underline-btn w-fit"
        >
          Read more <ArrowRight className="right-arrow" size={16} />
        </span>
      </div>
    </div>
  );
};

export default ProcessCard;
