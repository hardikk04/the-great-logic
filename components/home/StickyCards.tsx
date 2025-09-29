"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "@/style/StickyCards.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

interface StickyCardsProps {
  index: string;
  title: string;
  image: string;
  description: string;
}

const StickyCards = () => {
  const stickyCardsData: StickyCardsProps[] = [
    {
      index: "01",
      title: "Electronic Shelf Labels",
      image:
        "https://www.minewtag.com/upload/ztyImg/2025-05/68394bc623e7e.jpg",
      description:
        "Our digital shelf labels connect seamlessly with retail systems to deliver instant, wireless updates for pricing and product info. By reducing manual work and enabling centralized management",
    },
    {
      index: "02",
      title: "LCD Electronic Price Label",
      image:
        "https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "LCD electronic price labels use TFT LCD display technology, which has better color display effect, high definition, high contrast and other characteristics.",
    },
    {
      index: "03",
      title: "Warehouse Warning Light",
      image:
        "https://images.unsplash.com/photo-1687803551107-b3ff415ef426?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Warehouse warning light is an intelligent product designed for warehousing and information early warning, to solve the problem of difficult finding and cumbersome operation",
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
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale,
                borderRadius: "1rem",
                rotation,
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
    <div className="sticky-cards" ref={container}>
      {stickyCardsData.map((cardData, index) => {
        return (
          <div className={`sticky-card sticky-card-${index + 1}`} key={index}>
            <div className="sticky-card-index">
              <h2 className="text-[5rem] font-[600] tracking-[-0.35rem] leading-[1.1]">
                {cardData.index}
              </h2>
            </div>
            <div className="sticky-card-content">
              <div className="sticky-card-content-wrapper">
                <h2 className="sticky-card-header text-[3rem] font-[600] leading-[1.1]">
                  {cardData.title}
                </h2>
                <div className="sticky-card-img">
                  <Image
                    src={cardData.image}
                    alt={cardData.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <div className="sticky-card-copy">
                  <div className="sticky-card-copy-title">
                    <p>(About the State)</p>
                  </div>
                  <div className="sticky-card-copy-description">
                    <p>{cardData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyCards;
