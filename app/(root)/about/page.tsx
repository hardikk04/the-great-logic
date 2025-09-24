"use client";

import React from "react";

const About = () => {
  return (
    <section className="relative pointer-events-none pt-[10rem] pb-[6rem] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
          About
          <br />
          <span className="">Great Logic</span>
        </h1>
        <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body">
          Pioneering the future of retail technology with innovative digital
          solutions that transform traditional business operations into
          intelligent, connected experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
