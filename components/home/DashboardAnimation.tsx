"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const DashboardAnimation = () => {
  useGSAP(() => {
    gsap.from(".dashboard-img", {
      y: 120, // moves it up
      scale: 0.8, // smaller at start
      rotationX: 60, // tilt backward
      opacity: 0, // fades in
      transformOrigin: "center bottom", // pivot point
      ease: "power2.out",
      scrollTrigger: {
        scroller: "body",
        trigger: ".dashboard-img",
        start: "top 150%",
        end: "top 70%",
        // markers: true,
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="showreel h-screen w-full flex justify-center overflow-hidden relative z-[1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full rounded-xl overflow-hidden relative flex justify-center items-end bg-[#EAEFF5]">
          <div className="perspective-[1200px] w-[95%] h-[90%] overflow-hidden">
            <Image
              src={
                "https://framerusercontent.com/images/e2bSBE2FGqkvwqDjSs5GYHchjWw.jpg"
              }
              alt="showreel"
              width={1000}
              height={1000}
              className="w-full dashboard-img h-full rounded-t-xl relative z-[1]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnimation;
