"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showreel = () => {
  useGSAP(() => {
    gsap.from("video", {
      width: "90%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".showreel",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="showreel h-screen w-full flex justify-center overflow-hidden relative z-[1]">
      <video
        className="h-full w-full object-cover"
        src="https://framerusercontent.com/assets/Y3xoj8Z6bBOUIfAM4W69L3jwTU.webm"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
};

export default Showreel;
