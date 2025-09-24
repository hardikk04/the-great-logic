import React from "react";
import Image from "next/image";

const Testimonial = () => {
  // Sample logo data - dummy company logos
  const logos = [
    { name: "ACME Corp", url: "/logos/acme-logo.svg" },
    { name: "TechFlow", url: "/logos/techflow-logo.svg" },
    { name: "InnovateCorp", url: "/logos/innovatecorp-logo.svg" },
    { name: "DataVision", url: "/logos/datavision-logo.svg" },
    { name: "CloudSync", url: "/logos/cloudsync-logo.svg" },
    { name: "NextGen", url: "/logos/nextgen-logo.svg" },
    { name: "QuantumLab", url: "/logos/quantumlab-logo.svg" },
    { name: "GlobalTech", url: "/logos/globaltech-logo.svg" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that trust our solutions
          </p>
        </div>

        {/* First Marquee - Left to Right */}
        <div className="relative mb-8">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-12 max-w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`first-duplicate-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-12 max-w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="relative">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll-right">
            {/* First set of logos (reversed order for variety) */}
            {[...logos].reverse().map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-12 max-w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[...logos].reverse().map((logo, index) => (
              <div
                key={`second-duplicate-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-h-12 max-w-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
