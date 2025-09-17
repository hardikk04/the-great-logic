"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const LightImage = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".grayscale-img",
      { filter: "grayscale(100%)" }, // 👈 start value
      {
        filter: "grayscale(0%)", // 👈 end value
        scrollTrigger: {
          scroller: "body",
          trigger: ".light-image",
          start: "top 50%",
          end: "top 0%",
          scrub: 1,
        //   markers: true,
        },
      }
    );
  }, []);
  return (
    <div className="light-image h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1610683468005-79e792efddd9?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="light"
        width={1000}
        height={1000}
        className="grayscale-img w-full h-full object-cover"
      ></Image>
    </div>
  );
};

export default LightImage;
