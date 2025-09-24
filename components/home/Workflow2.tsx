"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Workflow2 = () => {
  useGSAP(() => {
    gsap.from(".curve-card", {
      right: "-50%",
      // stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".curve-card",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 1,
      },
    });
  });
  return (
    <section className="h-screen w-full relative">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-0">
        WORKFLOW
      </h2>
      <div className="curve-wrapper w-full overflow-hidden flex justify-center items-center h-full relative z-[1]">
        <div className="curve-card h-[40vh] w-[18%] bg-red-100 shrink-0 absolute transform -rotate-12 -translate-x-[180%] translate-y-12 rounded-lg shadow-lg"></div>
        <div className="curve-card h-[40vh] w-[18%] bg-red-200 shrink-0 absolute transform -rotate-6 -translate-x-[60%] translate-y-0 rounded-lg shadow-lg"></div>
        <div className="curve-card h-[40vh] w-[18%] bg-red-300 shrink-0 absolute transform rotate-0 translate-x-42 -translate-y-2 rounded-lg shadow-lg"></div>
        <div className="curve-card h-[40vh] w-[18%] bg-red-400 shrink-0 absolute transform rotate-0 translate-x-[180%] translate-y-8 rounded-lg shadow-lg"></div>
      </div>
    </section>
  );
};

export default Workflow2;
