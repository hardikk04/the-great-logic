import React from "react";

interface Props {
  number: number;
  title: string;
  para: string;
}

const ProcessCard = ({ number, title, para }: Props) => {
  return (
    <div className={`flex items-center text-white gap-6 w-[50%] max-sm:w-full max-md:w-full relative z-[1]`}>
      <h2 className="text-secondary para text-[5.5vw] max-sm:text-[8vw] max-md:text-[7vw]  leading-none">
        {number}
      </h2>
      <div className="flex flex-col gap-2">
        <h3 className="heading text-2xl font-medium heading">{title}</h3>
        <span className="para text-xl inline-block opacity-70">{para}</span>
      </div>
    </div>
  );
};

export default ProcessCard;
