import React from "react";
import TextSplit from "./shared/TextSplit";

const Loader = () => {
  return (
    <div className="loader h-screen w-full flex justify-center items-center bg-black text-white">
      <h2 className="loader-text uppercase text-xl md:text-3xl font-medium">
        <TextSplit text="Welcome to The Great Logic" />
      </h2>
    </div>
  );
};

export default Loader;
