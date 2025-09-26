"use client";

import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="absolute top-0 inset-0 z-[1] overflow-hidden">
        <Wrapper />
      </div>
      <section className="relative pointer-events-none pt-[10rem] pb-[8rem] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
          About
          <br />
          <span className="">The Great Logic</span>
        </h1>

        <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body ">
          From manual to digital, Great Logic brings innovation to retail with
          cutting-edge tag solutions that transform how stores operate.
        </p>
      </div>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black">500+</div>
              <div className="text-sm text-gray-600">Companies Transformed</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">7 Years</div>
              <div className="text-sm text-gray-600">of Innovation</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
