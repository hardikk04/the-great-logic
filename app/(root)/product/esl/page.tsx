"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Showreel from "@/components/product/Showreel";
import CTABannerSection from "@/components/home/CtaBanner";
import Advantages from "@/components/product/Advantages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const ESLPage = () => {
  const specifications = [
    { label: "Display Technology", value: "E-Paper (E-Ink)" },
    { label: "Screen Sizes", value: "2.13″, 2.9″, 4.2″, 7.5″" },
    { label: "Resolution", value: "Up to 800×480 pixels" },
    { label: "Colors", value: "Black/White/Red or Black/White" },
    { label: "Battery Life", value: "3-5 years typical use" },
    { label: "Operating Temperature", value: "-10°C to +50°C" },
    { label: "Connectivity", value: "2.4GHz Wireless, Bluetooth" },
    { label: "Mounting", value: "Magnetic, Clip-on, Adhesive" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 inset-0 z-[1] overflow-hidden">
        <Wrapper />
      </div>

      {/* Hero Section */}
      <section className="relative pt-[10rem] pb-[6rem] flex items-center justify-center overflow-hidden">
        <div className="relative text-center px-6 max-w-6xl mx-auto hero-content">
          <div className="pointer-events-none">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
              Electronic Shelf Labels
              <br />
              <span className="text-[#0DACFB]">(ESL)</span>
            </h1>
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-8 font-body">
              Transform your retail operations with intelligent digital price
              tags that deliver real-time updates, reduce costs, and enhance
              customer experience.
            </p>
          </div>
          <div className="flex z-[2] flex-col sm:flex-row gap-4 justify-center items-center relative">
            <Button
              variant={"default"}
              className="button hover:text-white duration-300 transition-all leading-0"
            >
              <p className="relative z-[1]">Request Demo</p>
            </Button>
          </div>
        </div>
      </section>

      <Showreel url="/video/esl.mp4" />

      <Advantages />

      {/* Technical Specifications */}
      <section className="py-20 px-6">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Engineered for reliability and performance in demanding retail
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <span className="font-semibold text-black">{spec.label}</span>
                <span className="text-[#0DACFB] font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            FAQ
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl">Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl">Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl">Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <CTABannerSection />
    </main>
  );
};

export default ESLPage;
