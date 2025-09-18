"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".tag-img-0",
      {
        filter: "grayscale(100%)",
        stagger: 0.1,
      },
      {
        filter: "grayscale(0%)",
        scrollTrigger: {
          scroller: "body",
          trigger: ".tag-img-0",
          start: "top 40%",
          end: "top 40%",
          scrub: 1,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".tag-img-1",
      {
        filter: "grayscale(100%)",
        stagger: 0.1,
      },
      {
        filter: "grayscale(0%)",
        scrollTrigger: {
          scroller: "body",
          trigger: ".tag-img-1",
          start: "top 40%",
          end: "top 40%",
          scrub: 1,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".tag-img-2",
      {
        filter: "grayscale(100%)",
        stagger: 0.1,
      },
      {
        filter: "grayscale(0%)",
        scrollTrigger: {
          scroller: "body",
          trigger: ".tag-img-2",
          start: "top 45%",
          end: "top 45%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-section w-full " ref={containerRef}>
      <div className="py-20 pb-0 px-4 md:px-6">
        <h2 className="text-white text-[4vw] max-sm:text-[8vw] max-md:text-[7vw] z-1 mix-blend-difference para py-5">
          Products
        </h2>
      </div>

      <div ref={ref} className="relative pb-20 flex flex-col md:gap-52">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-20"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="sticky-pointer h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div> */}
                <Image
                  src={item.image}
                  width={20}
                  height={20}
                  alt="logo"
                  priority
                  className={`h-8 w-8 rounded-full tag-img-${index}`}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 80 + "px",
          }}
          className="absolute md:left-8 left-8 -top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
