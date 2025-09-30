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
  // Helper function to render color boxes
  const renderColorBoxes = (colorsString: string) => {
    const colorMappings: { [key: string]: string } = {
      Black: "#000000",
      White: "#FFFFFF",
      Red: "#FF0000",
      Yellow: "#FFFF00",
      Blue: "#0000FF",
      Green: "#008000",
    };

    return colorsString.split(", ").map((colorCombo, comboIndex) => {
      const colors = colorCombo.split("/");
      return (
        <div key={comboIndex} className="flex items-center gap-2 pb-2">
          <div className="flex">
            {colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-4 h-5"
                style={{
                  backgroundColor: colorMappings[color] || "#CCCCCC",
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      );
    });
  };

  const stickyCardsData: StickyCardsProps[] = [
    {
      title: "GLT Series",
      video: "/video/Logic Labels.mp4",
      description:
        "Great Logic Thin Series is ultra-thin and lightweight, perfect for shelves, bins, and compact spaces. Designed for efficiency and endurance with up to 5 years battery life.",
      sizes: `2.1, 2.9, 3.5, 4.2, 5.8, 7.5, 11.6`,
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "GLB Series",
      video: "/video/GLB Series Video.mp4",
      description:
        "Great Logic Button Series is equipped with the latest e-ink display technology and programmable button functionality, these Logic Labels go beyond simple displays. They are purpose-built for smart warehouses, enabling precise goods’ tracking and offering seamless integration with Manufacturing Execution Systems to streamline operations and boost efficiency.",
      sizes: "2.9",
      colors: "Black/White, Black/White/Red/Yellow",
    },
    {
      title: "GLP Series",
      video: "/video/GLP Series Main Video.mp4",
      description:
        "Great Logic Prismatic Series is high-impact multi-color displays (up to 6 colors) for branding, promotions, and dynamic visibility.",
      sizes: "7.5, 13.3",
      colors: "Black/White/Red/Yellow/Blue/Green",
    },
    {
      title: "GLG Series",
      video: "/video/GLG Series Main Video.mp4",
      description:
        "Great Logic General Series is versatile, all-purpose Logic Labels — durable, reliable, and available in the widest range of sizes. A balance of cost and performance.",
      sizes: "1.5, 2.1, 2.9, 4.2, 5.8, 7.5",
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "GLM Series",
      video: "/video/GLM Series Main Video.mp4",
      description:
        "Great Logic Meeting Series is specially designed for Conference Tables and Meetings, with Unique shapes (V-Shape, L-Shape, T-Shape). Enhance way of new age professionalism with multi-color nameplates and signage.",
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
                      <b>Available Sizes: </b>
                      {cardData.sizes}
                    </p>
                  </div>
                  <div className="sticky-card-copy-title">
                    <p className="mb-2">
                      <b>Available Colors: </b>
                    </p>
                    <div>{renderColorBoxes(cardData.colors)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky-card-index h-full flex items-center">
              <div className="sticky-card-img h-auto">
                {/* <Image
                  src={cardData.image}
                  alt={cardData.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                ></Image> */}
                <video
                  src={cardData.video}
                  className="h-full rounded-xl w-full object-cotain"
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
