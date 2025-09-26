"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Showreel from "@/components/product/Showreel";
import CTABannerSection from "@/components/home/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StickyWrapper from "@/components/product/StickyWrapper";

gsap.registerPlugin(ScrollTrigger);

const SoftwarePage = () => {
  const specifications = [
    { label: "Platform Compatibility", value: "Web, iOS, Android, Windows" },
    { label: "Database Support", value: "MySQL, PostgreSQL, MongoDB" },
    { label: "API Integration", value: "REST, GraphQL, WebSocket" },
    { label: "Security Features", value: "OAuth 2.0, JWT, SSL Encryption" },
    { label: "Real-time Updates", value: "Live data synchronization" },
    { label: "Deployment", value: "Cloud, On-premise, Hybrid" },
    { label: "User Management", value: "Role-based access control" },
    { label: "Analytics", value: "Advanced reporting & insights" },
  ];

  const advantages = [
    {
      number: "01",
      title: "Intuitive Dashboard",
      para: "Modern, clean interface with customizable widgets and real-time analytics for better decision making",
    },
    {
      number: "02",
      title: "Seamless Integration",
      para: "Connect with existing systems through robust APIs and pre-built connectors for popular platforms",
    },
    {
      number: "03",
      title: "Advanced Analytics",
      para: "Powerful reporting tools with AI-driven insights and predictive analytics for business optimization",
    },
    {
      number: "04",
      title: "Enterprise Security",
      para: "Bank-level security with multi-factor authentication, encryption, and compliance with industry standards",
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
                Software and App
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-body">
                Streamline your business operations with our comprehensive
                software management platform. Built for security, and seamless
                integration with your existing workflow.
              </p>
            </div>
            <div className="flex z-[2] flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Button
                variant={"default"}
                className="button hover:text-white duration-300 transition-all leading-0"
              >
                <p className="relative z-[1]">Start Free Trial</p>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Showreel url="/video/workflow.mp4" />

      {/* Custom Advantages Section for Software */}
      <section className="max-sm:hidden max-md:hidden home-projects relative text-white pt-[6vw]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="project-title max-sm:py-[6vw] py-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                Key Features
              </h2>
              <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
                Discover the powerful features that make our software management
                platform the perfect solution for modern businesses.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
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
                <p className="text-black/70 leading-relaxed">
                  {advantage.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Built with modern technologies and designed for enterprise-grade
              performance and reliability.
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
              Get answers to common questions about our software management
              platform
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
                What makes this platform different?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our platform combines cutting-edge technology with intuitive
                  design, offering unparalleled integration capabilities and
                  real-time analytics. Built for modern businesses that need
                  scalable, secure solutions.
                </p>
                <p>
                  Unlike traditional software, our platform adapts to your
                  workflow, not the other way around, with customizable
                  dashboards and AI-powered insights.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl">
                How quickly can I get started?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Most clients are up and running within 24 hours. Our
                  streamlined onboarding process includes automated data
                  migration, pre-configured templates, and dedicated support.
                </p>
                <p>
                  We provide comprehensive training materials, video tutorials,
                  and live onboarding sessions to ensure your team is confident
                  from day one.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. We employ bank-level security measures including
                  end-to-end encryption, multi-factor authentication, and
                  regular security audits. Your data is stored in SOC 2
                  compliant data centers.
                </p>
                <p>
                  We&apos;re compliant with GDPR, CCPA, and other major privacy
                  regulations, giving you complete control over your data with
                  transparent privacy policies.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl">
                What support options are available?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer 24/7 support through multiple channels including live
                  chat, email, and phone. Enterprise customers get dedicated
                  account managers and priority support queues.
                </p>
                <p>
                  Our extensive knowledge base, video library, and community
                  forums provide self-service options when you need quick
                  answers.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <StickyWrapper />

      <CTABannerSection />
    </main>
  );
};

export default SoftwarePage;
