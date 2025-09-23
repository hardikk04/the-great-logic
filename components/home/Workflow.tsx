"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "@/style/Workflow.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Card = ({
  title,
  copy,
  index,
  img,
}: {
  title: string;
  copy: string;
  index: number;
  img: string;
}) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h2 className="text-3xl md:text-[2.6rem] font-medium mb-[4rem] md:mb-[2.5rem]">
            {title}
          </h2>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="object-cover h-full w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Workflow = () => {
  const CardData = [
    {
      title: "Central Cloud Platform for Digital Tag Management",
      copy: "The laptop and mobile app connect to a central cloud platform, acting as the control center for all digital tags deployed in the system. This platform is used to manage and update the information displayed on the tags, track their location, and collect data from them. This ensures real-time synchronization across all devices and locations.",
      img: "https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Healthcare and Patient Monitoring",
      copy: "In a healthcare setting, digital tags can be attached to medical equipment, patient records, or even staff badges. This allows the system to provide real-time location tracking of critical assets, ensuring they are always available when needed.",
      img: "https://images.unsplash.com/photo-1682365114794-14b870355d21?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Smart Retail and Electronic Shelf Labels (ESLs)",
      copy: "This is a primary application for digital tag technology. The tablets and products on the shelves are equipped with Electronic Shelf Labels (ESLs), which are the digital tags. These tags replace traditional paper labels, allowing the retailer to instantly update product prices, display promotions, and show stock information remotely from the central cloud platform.",
      img: "https://images.unsplash.com/photo-1606756171089-cf7d0a1015e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Warehouse and Logistics",
      copy: "In the warehouse, digital tags are used for real-time inventory tracking and logistics. Tags can be placed on individual pallets, boxes, or high-value assets. Workers with mobile devices can use the system to quickly locate items, conduct automated inventory counts, and track goods as they move through the facility.",
      img: "https://images.unsplash.com/photo-1573207535342-8c0f9506112e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Office and Data Analysis",
      copy: "This part represents the final step of the data loop. The office team uses the data collected from the digital tags in the warehouse, retail stores, and healthcare facilities. By analyzing this information, they can gain valuable insights into consumer behavior, inventory levels, and asset utilization.",
      img: "https://images.unsplash.com/photo-1712904321974-d3724af75e49?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const container = useRef(null);

  useGSAP(
    () => {
      const cards = document.querySelectorAll(".card");
      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 11}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <>
      <section ref={container}>
        <div className="intro"></div>
        <div className="md:px-6 cards relative">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Workflow
            </h2>
          </div>
          {CardData.map((card, index) => {
            return <Card key={index} {...card} index={index} />;
          })}
        </div>
        <div className="outro"></div>
      </section>
    </>
  );
};

export default Workflow;
