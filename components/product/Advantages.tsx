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
      title: "Fast Batch Updates",
      para: "E ink price tags can be refreshed in a few seconds with just one click, supports bulk pricing changes, reducing human errors",
    },
    {
      number: "02",
      title: "Long Battery Life",
      para: "Refresh three times a day, endurance up to ten years and support battery replacement",
    },
    {
      number: "03",
      title: "Stock Sync and Alerts",
      para: "Synchronize inventory information in real time and send low-stock alerts",
    },
    {
      number: "04",
      title: "Strong Data Security",
      para: "Multi-layer encryption (PSK, AES-CMAC, AES-CTR) and secure platform architecture prevent unauthorized access and data breaches.",
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
          </div>
        </div>
        <div className="project-container w-full h-[80vh] my-[6vw] mt-0 relative flex max-sm:flex-wrap max-sm:gap-[2vw] max-md:flex-wrap max-md:gap-[2vw] justify-center">
          <div className="project-imgs absolute top-0 left-0 w-full h-full flex max-md:flex-wrap overflow-hidden max-md:opacity-0 max-sm:opacity-0">
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-0"
              src="https://www.minewtag.com/upload/ztyImg/2025-05/68394bc623e7e.jpg"
              alt=""
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-1"
              src="https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-2"
              src="https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <Image
              height={1000}
              width={1000}
              className="w-1/4 object-cover project-img-3"
              src="https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
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
