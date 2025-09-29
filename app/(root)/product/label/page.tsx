"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import CTABannerSection from "@/components/home/CtaBanner";
import Advantages from "@/components/product/Advantages";
import StickyWrapper from "@/components/product/StickyWrapper";

gsap.registerPlugin(ScrollTrigger);

const ESLPage = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
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
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(92deg, rgb(12 11 11 / 52%), rgb(41 45 47 / 21%))",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
          <div className="relative text-center max-w-6xl mx-auto hero-content">
            <div className="pointer-events-none">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
                Logic labels
              </h1>
              <p className="text-md md:text-lg text-white/95 max-w-3xl mx-auto mb-8 font-body ">
                The Next-Generation digital display solutions. Designed to power
                smart, future-ready warehousing and operations, where real-time
                visibility, intelligent tracking, and color-coded systems are
                essential for speed and accuracy.
              </p>
            </div>
            <div className="flex z-[3] flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Button
                variant={"default"}
                className="button hover:text-white duration-300 transition-all leading-0 shadow-lg"
              >
                <p className="relative z-[1]">Contact us</p>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Showreel url="/video/esl.mp4" /> */}

      <Advantages />
      <StickyWrapper />

      {/* <section className="faq py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
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
              <AccordionTrigger className="text-2xl">
                Product Information
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl">
                Shipping Details
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl">
                Return Policy
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
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

export default ESLPage;
