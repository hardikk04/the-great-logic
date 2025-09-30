"use client";

import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="relative pointer-events-none pt-[10rem] pb-[4rem] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
              About The Great Logic
            </h1>

            <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body ">
              From manual to digital, Great Logic brings innovation to retail
              with cutting-edge Label solutions that transform how stores
              operate.
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
