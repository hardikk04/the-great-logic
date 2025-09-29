"use client";

import React, { useRef } from "react";
import "@/style/StickyCards.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

interface StickyCardsProps {
  title: string;
  video: string;
  description: string;
  sizes: string;
  colors: string;
}

const StickyCards = () => {
  const stickyCardsData: StickyCardsProps[] = [
    {
      title: "Great Logic Thin Series (GLT)",
      video: "/video/Logic Labels.mp4",
      description:
        "Ultra-thin and lightweight, perfect for shelves, bins, and compact spaces. Designed for efficiency and endurance with up to 5 years battery life.",
      sizes: `2.1, 2.9, 3.5, 4.2, 5.8, 7.5, 11.6`,
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Button Series (GLB)",
      video: "/video/GLB Series Video.mp4",
      description:
        "Equipped with the latest e-ink display technology and programmable button functionality, these Logic Labels go beyond simple displays. They are purpose-built for smart warehouses, enabling precise goods’ tracking and offering seamless integration with Manufacturing Execution Systems to streamline operations and boost efficiency.",
      sizes: "2.9",
      colors: "Black/White, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Prismatic Series(GLP)",
      video: "/video/GLP Series Main Video.mp4",
      description:
        "High-impact multi-color displays (up to 6 colors) for branding, promotions, and dynamic visibility.",
      sizes: "7.5, 13.3",
      colors: "Black/White/Red/Yellow/Blue/Green",
    },
    {
      title: "Great Logic General Series(GLG)",
      video: "/video/GLG Series Main Video.mp4",
      description:
        "Versatile, All-purpose Logic Labels — durable, reliable, and available in the widest range of sizes. A balance of cost and performance.",
      sizes: "1.5, 2.1, 2.9, 4.2, 5.8, 7.5",
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Meeting Series(GLM)",
      video: "/video/GLM Series Main Video.mp4",
      description:
        "Specially designed for Conference Tables and Meetings, with Unique shapes (V-Shape, L-Shape, T-Shape). Enhance way of new age professionalism with multi-color nameplates and signage.",
      sizes: "7.5",
      colors: "Black/White/Red, Black/White/Red/Yellow/Blue/Green",
    },
  ];

  const container = useRef(null);
  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.1;

              gsap.set(card, {
                scale,
                borderRadius: "1rem",
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <div className="sticky-cards" ref={container}>
      {stickyCardsData.map((cardData, index) => {
        return (
          <div className={`sticky-card sticky-card-${index + 1}`} key={index}>
            <div className="sticky-card-content">
              <div className="sticky-card-content-wrapper">
                <h2 className="sticky-card-header text-[2rem] font-bold leading-[1.1]">
                  {cardData.title}
                </h2>

                <div className="sticky-card-copy">
                  <div className="sticky-card-copy-description">
                    <p>{cardData.description}</p>
                  </div>
                  <div className="sticky-card-copy-title">
                    <p>
                      <b>Available Sizes: </b>{cardData.sizes}
                    </p>
                  </div>
                  <div className="sticky-card-copy-title">
                    <p>
                      <b>Available Colors: </b>{cardData.colors}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky-card-index h-full">
              <div className="sticky-card-img h-full">
                {/* <Image
                  src={cardData.image}
                  alt={cardData.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                ></Image> */}
                <video
                  src={cardData.video}
                  className="h-full rounded-xl w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyCards;
