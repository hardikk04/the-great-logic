"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ProcessCard from "./ProcessCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const pathRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [isMobile]);

  useEffect(() => {
    const path = pathRef.current as SVGPathElement | null;

    if (path) {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: ".philosophy",
          start: "top 0%",
          scrub: 1,
        },
      });
    }
  }, []);
  return (
    <section className="philosophy w-full relative overflow-hidden py-4 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            The Great Logic Product Lineup
          </h2>
        </div>
      </div>
      <div className="absolute pointer-events-none h-full w-full z-0 flex justify-between items-start inset-0">
        {!isMobile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 1927 3376"
            fill="none"
            className="philosophy_line-svg"
          >
            <path
              ref={pathRef}
              d="M1914 13C1787.22 30.804 1706.44 101.235 1686.07 138.421C1624.72 250.43 1758.83 378.82 1719.31 545.945C1696.93 640.627 1630.78 695.813 1553.11 761.689C1290.65 984.322 1135.37 857.599 878.814 1054.14C789.583 1122.51 731.508 1196.71 522.672 1356.19C457.889 1405.65 410.875 1438.69 342.222 1447.29C227.519 1461.65 76.787 1404.76 28.8175 1284.27C-25.1072 1148.84 66.7009 972.921 185.524 915.104C412.294 804.762 798.607 1094.86 940.547 1399.34C978.633 1481.03 1026.91 1584.61 1007.03 1710.97C982.639 1865.98 876.459 1923.15 888.311 2041.79C900.174 2160.48 1051.61 2161.8 1064.01 2267.12C1078.5 2390.15 896.728 2446.48 912.055 2557.18C925.693 2655.62 1091.06 2766.88 1239.7 2715.4C1362.87 2672.73 1347.65 2474.56 1415.41 2470.89C1488.56 2466.91 1509.35 3027.12 1690.82 3209.58C1771.57 3290.76 1856.73 3337.06 1914 3363"
              stroke="url(#paint0_linear_865_414)"
              strokeWidth="25"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_865_414"
                x1="963.5"
                y1="13"
                x2="963.5"
                y2="3022.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0DACFB" />
                <stop offset="1" stopColor="#0DACFB" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 548 2959"
            fill="none"
            className="philosophy_line-svg"
          >
            <path
              ref={pathRef}
              d="M535.171 13C408.394 30.804 327.609 101.235 307.244 138.421C245.887 250.43 379.999 378.819 340.485 545.945C318.102 640.627 215.633 633 174.281 761.689C120.678 928.5 473.49 958.16 362.673 1156.83C206.678 1436.5 500.879 1394.5 435.673 1539.5C379.856 1663.62 73.4322 1493.35 37.1782 1676.5C-1.32181 1871 326.678 1976.5 120.678 2196C-23.9627 2332.13 -56.5 2602 234.5 2674C506.624 2741.33 416.524 2946 535.171 2946"
              stroke="url(#paint0_linear_1213_886)"
              strokeWidth="15"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1213_886"
                x1="-415.326"
                y1="13"
                x2="-415.326"
                y2="3022.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0DACFB"></stop>
                <stop offset="1" stopColor="#0DACFB"></stop>
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-6">
        <div className="container mx-auto ">
          <div className="h-[85vh] max-sm:py-[4vw] w-full flex justify-between items-center relative z-[1]">
            <ProcessCard
              link="/product/software-and-app-development"
              title="Software and App"
              para="Tailored digital solutions built to automate and optimize your operations. From workflow management to device control, our custom software and apps are designed to integrate seamlessly with your systems and meet your unique automation needs."
            />
            <div className="rounded-lg overflow-hidden w-[45%]">
              <Image
                src={
                  "https://images.unsplash.com/photo-1622127922075-fb1d21fbacbf?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="light"
                width={1000}
                height={1000}
                className="w-full h-full object-cover hover:scale-105 duration-300"
              ></Image>
            </div>
          </div>
        </div>
        <div className="h-[80vh] max-sm:py-[4vw] w-full flex justify-between items-center relative z-[1]">
          <div className="rounded-lg overflow-hidden w-[45%]">
            <Image
              src={"/img/logic-label.jpeg"}
              alt="light"
              width={1000}
              height={1000}
              className="w-full h-full object-cover hover:scale-105 duration-300"
            ></Image>
          </div>
          <ProcessCard
            link="/product/logic-label"
            title="Logic Labels"
            para="A smart display solution for supermarkets and warehouses that replaces traditional Labels with dynamic, real-time data. Easily update product details, pricing, or inventory information through our app and software, improving accuracy, efficiency, and customer experience."
          />
        </div>
        <div className="h-[85vh] max-sm:py-[4vw] w-full flex justify-between items-center relative z-[1]">
          <ProcessCard
            link="/product/logic-light"
            title="Logic Light"
            para="A 7-color configurable light system designed to signal alerts, statuses, or process conditions. Controlled via our software, Logic Light enhances visibility, safety, and workflow efficiency across industrial, retail, and warehouse environments."
          />
          <div className="rounded-lg overflow-hidden w-[45%]">
            <Image
              src={"/img/logic-ligth.png"}
              alt="light"
              width={1000}
              height={1000}
              className="w-full h-full object-cover hover:scale-105 duration-300"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
