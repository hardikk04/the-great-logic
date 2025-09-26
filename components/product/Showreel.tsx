"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Showreel = ({ url }: { url: string }) => {
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
      <div className="container">
        <video
          className="h-full w-full object-contain"
          src={url}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Showreel;
