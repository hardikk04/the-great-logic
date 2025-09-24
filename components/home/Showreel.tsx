"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  useGSAP(() => {
    gsap.from(".dashboard-img", {
      transform:
        "translateY(120px) scale(0.8) rotateX(60deg)",
      ease: "power2.out",
      scrollTrigger: {
        scroller: "body",
        trigger: ".dashboard-img",
        start: "top 90%",
        end: "top 40%",
        // markers: true,
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="showreel h-screen w-full flex justify-center overflow-hidden relative z-[1]">
      <div className="w-[85%] h-full rounded-xl overflow-hidden relative flex justify-center items-end">
        <Image
          src={
            "https://framerusercontent.com/images/e2bSBE2FGqkvwqDjSs5GYHchjWw.jpg"
          }
          alt="showreel"
          width={1000}
          height={1000}
          className="dashboard-img w-[85%] h-[90%] rounded-t-xl relative z-[1]"
        ></Image>
        <Image
          src={
            "https://framerusercontent.com/images/uFd4uP6Hq41yXZpn8dV7vhg0.jpg"
          }
          alt="showreel"
          width={1000}
          height={1000}
          className="w-full h-full object-cover absolute top-0 left-0"
        ></Image>
      </div>
    </div>
  );
};

export default Showreel;
