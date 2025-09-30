"use client";
import Image from "next/image";
import React, { useState } from "react";
import AdvantageCard from "./AdvantageCard";

type ProjectCard = {
  number: string;
  title: string;
  para: string;
};

const Advantages = () => {
  const [projectCard] = useState<ProjectCard[]>([
    {
      number: "01",
      title: "Flexible Sizes Mounting",
      para: "Available in multiple dimensions and shapes to fit retail, warehouse, and industrial needs.",
    },
    {
      number: "02",
      title: "Next-Gen Warehouse Ready",
      para: "Enables smarter operations with location tracking, system integration, and error-proofing.",
    },
    {
      number: "03",
      title: "Ultra-Low Power",
      para: "Designed for long battery life, ensuring years of reliable operation.",
    },
    {
      number: "04",
      title: "Wireless & Smart",
      para: "Seamless Bluetooth-based connectivity for real-time updates and control.",
    },
  ]);

  return (
    <section className="max-sm:hidden max-md:hidden home-projects relative text-white pt-[6vw]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="project-title max-sm:py-[6vw] py-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Features
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Key Features: Simple, clear, and user-friendly design that
              highlights functionality while maintaining a modern and
              professional look.
            </p>
          </div>
        </div>
        <div className="project-container w-full h-[80vh] my-[6vw] mt-0 relative flex max-sm:flex-wrap max-sm:gap-[2vw] max-md:flex-wrap max-md:gap-[2vw] justify-center">
          <div className="project-imgs absolute top-0 left-0 w-full h-full flex max-md:flex-wrap overflow-hidden max-md:opacity-0 max-sm:opacity-0">
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-0"
              src="/img/logic label/Flexible Sizes & Mounting..png"
              alt="Flexible Sizes & Mounting"
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-1"
              src="/img/logic label/Next-Gen Warehouse Ready.png"
              alt="Next-Gen Warehouse Ready"
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-2"
              src="/img/logic label/Ultra-Low Power.png"
              alt="Ultra-Low Power"
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-3"
              src="/img/logic label/Wireless & Smart.png"
              alt="logic label/Wireless & Smart"
            />
          </div>
          {projectCard.map((data, index) => (
            <AdvantageCard
              data={data}
              key={index}
              index={index}
            ></AdvantageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
