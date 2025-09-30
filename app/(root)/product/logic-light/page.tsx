"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTABannerSection from "@/components/home/CtaBanner";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WarehousePage = () => {
  const errorReductionRef = useRef(null);
  const operationsRef = useRef(null);
  const uptimeRef = useRef(null);
  const advantages = [
    {
      title: "Smart Visual Guidance",
      para: "Intelligent LED indicators guide workers to exact locations, reducing picking errors by up to 90% and improving efficiency",
      image: "/img/Logic Lights In Stores.png",
    },
    {
      title: "Real-time Inventory",
      para: "Dynamic digital Labels automatically update stock levels and product information synchronized with your WMS",
      image: "/img/Warehouse.png",
    },
    {
      title: "Flexible Configuration",
      para: "Customizable light patterns, colors, and intensities adapt to different warehouse zones and operational requirements",
      image: "/img/supermarket.png",
    },
    {
      title: "Industrial Durability",
      para: "IP65-rated components withstand harsh warehouse conditions with temperature extremes and dust resistance",
      image: "/img/Light in Warehouse.png",
    },
  ];

  useGSAP(() => {
    gsap.to(".full-screen-img", {
      width: "100%",
      borderRadius: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".full-screen-img",
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
    });

    // Counter animations
    const animateCounter = (
      element: HTMLElement | null,
      endValue: number,
      suffix = ""
    ) => {
      if (element) {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: endValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            const currentValue = Math.round(obj.value);
            if (suffix === "/7") {
              element.textContent = currentValue + "/7";
            } else {
              element.textContent = currentValue + suffix;
            }
          },
        });
      }
    };

    animateCounter(errorReductionRef.current, 90, "%");
    animateCounter(operationsRef.current, 35, "%");
    animateCounter(uptimeRef.current, 24, "/7");
  });

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-[8rem] flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute top-0 inset-0 z-[1] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/img/Logic Lights In Stores.png')",
            }}
          />
          {/* Optional overlay for better text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(92deg, rgb(12 11 11 / 52%), rgb(41 45 47 / 21%))",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
          <div className="relative text-center max-w-6xl mx-auto hero-content text-white">
            <div className="pointer-events-none">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Logic Light
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-body">
                Revolutionize your warehouse operations with intelligent visual
                guidance systems. Reduce picking errors, increase productivity,
                and streamline your fulfillment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:hidden max-md:hidden home-projects relative text-white pt-[6vw] flex justify-center">
        <div className="container">
          <div className="project-title max-sm:py-[6vw] sm:px-6 py-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                Why Choose Logic Light
              </h2>
              <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                Transform your warehouse operations with our advanced visual
                guidance and Labeling system designed for maximum efficiency.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="relative group">
                <GlowingEffect
                  borderWidth={2}
                  disabled={false}
                  className="rounded-3xl"
                />
                <div className="p-0 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-72 w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={advantage.image}
                      alt={advantage.title}
                      height={500}
                      width={500}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {advantage.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {advantage.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen w-full flex justify-center items-center pt-24 overflow-hidden">
        <div className="full-screen-img h-full w-[80%] rounded-xl overflow-hidden">
          <video
            src="/video/Logic Lights 2.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          ></video>
          {/* <Image
            src={"/img/Light in Warehouse.png"}
            alt="Light in Warehouse"
            height={1000}
            width={1000}
            className="object-cover h-full w-full"
          ></Image> */}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Proven Results
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Real performance improvements achieved by warehouses using our
              system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div
                  ref={errorReductionRef}
                  className="text-4xl md:text-5xl font-bold text-[#0DACFB] mb-4"
                >
                  0%
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Error Reduction
                </h3>
                <p className="text-black/70">
                  Significant decrease in picking and sorting errors
                </p>
              </div>
            </div>
            <div className="relative">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div
                  ref={operationsRef}
                  className="text-4xl md:text-5xl font-bold text-[#0DACFB] mb-4"
                >
                  0%
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Faster Operations
                </h3>
                <p className="text-black/70">
                  Average improvement in picking and fulfillment speed
                </p>
              </div>
            </div>
            <div className="relative">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div
                  ref={uptimeRef}
                  className="text-4xl md:text-5xl font-bold text-[#0DACFB] mb-4"
                >
                  0/7
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Continuous Operation
                </h3>
                <p className="text-black/70">
                  Round-the-clock reliability with minimal maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="faq py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-black/70">
              Common questions about our warehouse warning light and picking
              label system
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl">
                How does the visual guidance system work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our system uses intelligent LED lights and digital labels that
                  connect to your warehouse management system. When an order is
                  received, the system automatically illuminates the correct
                  locations and displays relevant information on the digital
                  labels.
                </p>
                <p>
                  Workers follow the visual cues, which guide them through the
                  optimal picking path while providing real-time inventory
                  updates and confirmation feedback.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl">
                What warehouse management systems are supported?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We integrate with all major WMS platforms including SAP,
                  Oracle, Manhattan Associates, JDA, and many others. Our
                  flexible API architecture supports custom integrations as
                  well.
                </p>
                <p>
                  Our technical team provides complete integration support and
                  can work with your IT department to ensure seamless
                  connectivity with your existing systems.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl">
                How is the system installed and maintained?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Installation is typically completed within 1-2 weeks depending
                  on warehouse size. Our certified technicians handle everything
                  from mounting hardware to network configuration and system
                  testing.
                </p>
                <p>
                  The system requires minimal maintenance with self-diagnostic
                  capabilities and remote monitoring. We provide 24/7 support
                  and preventive maintenance programs to ensure optimal
                  performance.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl">
                What&apos;s the return on investment?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Most customers see ROI within 6-12 months through reduced
                  labor costs, fewer errors, faster order fulfillment, and
                  improved inventory accuracy. Typical savings range from 20-40%
                  in operational costs.
                </p>
                <p>
                  We provide detailed ROI calculations based on your specific
                  warehouse metrics and can arrange pilot programs to
                  demonstrate value before full implementation.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}

      <CTABannerSection />
    </main>
  );
};

export default WarehousePage;
