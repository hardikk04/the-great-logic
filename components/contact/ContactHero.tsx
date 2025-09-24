"use client";

import React from "react";

const ContactHero = () => {
  return (
    <section className="relative pointer-events-none pt-[10rem] pb-[6rem] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
          Let&apos;s Create
          <br />
          <span className="text-black">Something Amazing</span>
        </h1>

        <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body">
          Ready to transform your digital presence? We&apos;re here to bring
          your vision to life with cutting-edge technology and innovative
          solutions.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
