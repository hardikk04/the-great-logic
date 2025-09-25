"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "@/style/StickyCards.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

interface StickyCardsProps {
  title: string;
  image: string;
  description: string;
  sizes: string;
  colors: string;
}

const StickyCards = () => {
  const stickyCardsData: StickyCardsProps[] = [
    {
      title: "Great Logic Thin Series (GLT)",
      image: "https://www.minewtag.com/upload/ztyImg/2025-05/68394bc623e7e.jpg",
      description:
        "Ultra-thin and lightweight, perfect for shelves, bins, and compact spaces. Designed for efficiency and endurance with up to 5 years battery life.",
      sizes: `2.1, 2.9, 3.5, 4.2, 5.8, 7.5, 11.6`,
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Button Series (GLB)",
      image:
        "https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Equipped with the latest e-ink display technology and programmable button functionality, these Logic Tags go beyond simple displays. They are purpose-built for smart warehouses, enabling precise goods’ tracking and offering seamless integration with Manufacturing Execution Systems to streamline operations and boost efficiency.",
      sizes: "2.9",
      colors: "Black/White, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Prismatic Series(GLP)",
      image:
        "https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-impact multi-color displays (up to 6 colors) for branding, promotions, and dynamic visibility.",
      sizes: "7.5, 13.3",
      colors: "Black/White/Red/Yellow/Blue/Green",
    },
    {
      title: "Great Logic General Series(GLG)",
      image:
        "https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Versatile, All-purpose Logic Tags — durable, reliable, and available in the widest range of sizes. A balance of cost and performance.",
      sizes: "1.5, 2.1, 2.9, 4.2, 5.8, 7.5",
      colors: "Black/White, Black/White/Red, Black/White/Red/Yellow",
    },
    {
      title: "Great Logic Meeting Series(GLM)",
      image:
        "https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              const scale = 1 - progress * 0.25;
              const afterOpacity = progress;

              gsap.set(card, {
                scale,
                borderRadius: "1rem",
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <div className="sticky-cards max-w-7xl" ref={container}>
      {stickyCardsData.map((cardData, index) => {
        return (
          <div className={`sticky-card sticky-card-${index + 1}`} key={index}>
            <div className="sticky-card-content">
              <div className="sticky-card-content-wrapper">
                <h2 className="sticky-card-header text-[3rem] font-bold leading-[1.1]">
                  {cardData.title}
                </h2>

                <div className="sticky-card-copy">
                  <div className="sticky-card-copy-description">
                    <p>{cardData.description}</p>
                  </div>
                  <div className="sticky-card-copy-title">
                    <p>
                      <b>Available Sizes: </b>(About the State)
                    </p>
                  </div>
                  <div className="sticky-card-copy-title">
                    <p>
                      <b>Available Colors: </b>(About the State)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky-card-index h-full">
              <div className="sticky-card-img h-full">
                <Image
                  src={cardData.image}
                  alt={cardData.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                ></Image>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyCards;
