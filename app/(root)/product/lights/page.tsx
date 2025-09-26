"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import CTABannerSection from "@/components/home/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const WarehousePage = () => {
  const specifications = [
    { label: "LED Technology", value: "High-brightness RGB LEDs" },
    { label: "Visibility Range", value: "Up to 50 meters" },
    { label: "Light Modes", value: "Solid, Blinking, Breathing, Chase" },
    { label: "Colors", value: "16.7 million color combinations" },
    { label: "Power Supply", value: "12V DC / 24V DC / PoE+" },
    { label: "Operating Temperature", value: "-20°C to +60°C" },
    { label: "IP Rating", value: "IP65 (Dust & Water Resistant)" },
    { label: "Connectivity", value: "Ethernet, Wireless, RS485" },
    { label: "Label Technology", value: "E-Paper with NFC" },
    { label: "Mount Options", value: "Magnetic, Screw-on, Adhesive" },
  ];

  const advantages = [
    {
      number: "01",
      title: "Smart Visual Guidance",
      para: "Intelligent LED indicators guide workers to exact locations, reducing picking errors by up to 90% and improving efficiency",
    },
    {
      number: "02",
      title: "Real-time Inventory",
      para: "Dynamic digital labels automatically update stock levels and product information synchronized with your WMS",
    },
    {
      number: "03",
      title: "Flexible Configuration",
      para: "Customizable light patterns, colors, and intensities adapt to different warehouse zones and operational requirements",
    },
    {
      number: "04",
      title: "Industrial Durability",
      para: "IP65-rated components withstand harsh warehouse conditions with temperature extremes and dust resistance",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative py-[8rem] flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute top-0 inset-0 z-[1] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage:
                "url('https://www.minewtag.com/upload/ztyImg/2025-03/67e24f9150516.jpg')",
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
                Logic Lights
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-body">
                Revolutionize your warehouse operations with intelligent visual
                guidance systems. Reduce picking errors, increase productivity,
                and streamline your fulfillment process.
              </p>
            </div>
            <div className="flex z-[2] flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Button
                variant={"default"}
                className="button hover:text-white duration-300 transition-all leading-0"
              >
                <p className="relative z-[1]">Schedule Demo</p>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-sm:hidden max-md:hidden home-projects relative text-white pt-[6vw]">
        <div className="project-title max-sm:py-[6vw] sm:px-6 py-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              System Benefits
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Transform your warehouse operations with our advanced visual
              guidance and labeling system designed for maximum efficiency.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-[#0DACFB] mr-4">
                  {advantage.number}
                </span>
                <h3 className="text-xl font-semibold text-black">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-black/70 leading-relaxed">{advantage.para}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto">
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
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl md:text-6xl font-bold text-[#0DACFB] mb-4">
                90%
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Error Reduction
              </h3>
              <p className="text-black/70">
                Significant decrease in picking and sorting errors
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl md:text-6xl font-bold text-[#0DACFB] mb-4">
                35%
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Faster Operations
              </h3>
              <p className="text-black/70">
                Average improvement in picking and fulfillment speed
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-4xl md:text-6xl font-bold text-[#0DACFB] mb-4">
                24/7
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
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Engineered for demanding warehouse environments with
              industrial-grade components and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-semibold text-black">{spec.label}</span>
                <span className="text-[#0DACFB] font-medium text-right">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq md:px-6 py-20">
        <div className="mx-auto">
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
      </section>

      <CTABannerSection />
    </main>
  );
};

export default WarehousePage;
