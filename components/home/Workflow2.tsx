"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Workflow2 = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mediaQuery =
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)")
      : null;

  const workflowSteps = [
    {
      id: 1,
      title: "Warehouse",
      description: "Smart inventory management and supply chain optimization",
      image: "/img/Warehouse.svg",
    },
    {
      id: 2,
      title: "Retail Store",
      description: "Digital solutions for modern retail experiences",
      image: "/img/supermarket.svg",
    },
    {
      id: 3,
      title: "Cooperate",
      description: "Connected workspace environments and automation",
      image: "/img/Corporate.svg",
    },
    {
      id: 4,
      title: "Healthcare",
      description: "Advanced monitoring and patient care systems",
      image: "/img/Hospitals.svg",
    },
  ];

  useGSAP(() => {
    // Ensure cards are visible first
    gsap.set(".workflow-all", { opacity: 1, y: 0 });

    // Fade-in animation
    gsap.fromTo(
      ".workflow-all",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".workflow-all",
          start: "top 100%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Horizontal scroll animation for desktop only
    const initHorizontalAnimation = () => {
      if (mediaQuery && mediaQuery.matches && scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth / 1.8;

        gsap.to(scrollContainerRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: ".workflow-scroll-section",
            start: "top 20%",
            end: "top -80%",
            scrub: 1,
            pin: true,
            id: "horizontal-workflow",
          },
        });
      }
    };

    initHorizontalAnimation();

    // Handle window resize
    const handleResize = () => {
      // Kill only the horizontal scroll animation
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id === "horizontal-workflow") {
          trigger.kill();
        }
      });

      // Reset container position
      if (scrollContainerRef.current) {
        gsap.set(scrollContainerRef.current, { x: 0 });
      }

      // Ensure cards remain visible
      gsap.set(".workflow-all", { opacity: 1, y: 0 });

      // Re-initialize horizontal animation after a delay
      setTimeout(() => {
        initHorizontalAnimation();
      }, 100);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <section className="w-full bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Transforming Operations Across Sectors
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From warehouses to healthcare, our automation solutions seamlessly
            adapt to different environments, boosting efficiency and enabling
            smarter operations across every industry.
          </p>
        </div>

        {/* Horizontal Scrolling Workflow Grid */}
        <div className="workflow-scroll-section">
          <div className="overflow-hidden lg:overflow-visible workflow-container-wrapper">
            <div
              ref={scrollContainerRef}
              className="flex gap-8 w-max overflow-x-auto lg:overflow-x-visible scrollbar-hide pb-6 lg:pb-0"
            >
              {workflowSteps.map((step) => (
                <div
                  key={step.id}
                  className={`group relative workflow-all w-[calc(50vw-2rem)] md:w-[calc(50vw-2rem)] lg:w-[calc(50vw-2rem)] flex-shrink-0`}
                >
                  {/* Card */}
                  <div className="relative bg-white overflow-hidden transition-all duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative h-[60vh] flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="py-4 flex-1 flex flex-col">
                      <div className="flex items-start justify-between pb-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-medium text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow2;
