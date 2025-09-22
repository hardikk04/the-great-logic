"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProjectCards from "./ProjectCards";

type ProjectCard = {
  number: string;
  title: string;
  para: string;
};

const Electronic = () => {
  const [projectCard] = useState<ProjectCard[]>([
    {
      number: "01",
      title: "Electronic Shelf Labels",
      para: "Our digital shelf tags connect seamlessly with retail systems to deliver instant, wireless updates for pricing and product info. By reducing manual work and enabling centralized management",
    },
    {
      number: "02",
      title: "LCD Electronic Price Tag",
      para: "LCD electronic price tags use TFT LCD display technology, which has better color display effect, high definition, high contrast and other characteristics.",
    },
    {
      number: "03",
      title: "Warehouse Warning Light",
      para: "Warehouse warning light is an intelligent product designed for warehousing and information early warning, to solve the problem of difficult finding and cumbersome operation",
    },
  ]);

  return (
    <section className="max-sm:hidden max-md:hidden home-projects relative text-black pt-[6vw]">
      <div className="project-title max-sm:py-[6vw] sm:px-6 py-4">
        <div className="project-head overflow-hidden">
          <h2 className="text-black text-[4vw] max-sm:text-[8vw] max-md:text-[7vw] z-1 para">
            Electronic Tags
          </h2>
        </div>
      </div>
      <div className="project-container w-full h-[80vh] my-[6vw] mt-0 relative flex max-sm:flex-wrap max-sm:gap-[2vw] max-md:flex-wrap max-md:gap-[2vw] justify-center">
        <div className="project-imgs absolute top-0 left-0 w-full h-full flex max-md:flex-wrap overflow-hidden max-md:opacity-0 max-sm:opacity-0">
          <Image
            height={1000}
            width={1000}
            className="w-1/3 object-cover project-img-0"
            src="https://www.minewtag.com/upload/ztyImg/2025-05/68394bc623e7e.jpg"
            alt=""
          />
          <Image
            height={1000}
            width={1000}
            className="w-1/3 object-cover project-img-1"
            src="https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Image
            height={1000}
            width={1000}
            className="w-1/3 object-cover project-img-2"
            src="https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        {projectCard.map((data, index) => (
          <ProjectCards data={data} key={index} index={index}></ProjectCards>
        ))}
      </div>
    </section>
  );
};

export default Electronic;
