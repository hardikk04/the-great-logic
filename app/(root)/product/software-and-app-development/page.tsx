"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTABannerSection from "@/components/home/CtaBanner";
import { useGSAP } from "@gsap/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

gsap.registerPlugin(ScrollTrigger);

const SoftwarePage = () => {
  const businessesRef = useRef(null);
  const industriesRef = useRef(null);
  const uptimeRef = useRef(null);

  const advantages = [
    {
      number: "01",
      title: "Workflow Automation",
      para: "Simplify processes and reduce manual effort for faster, error-free operations.",
    },
    {
      number: "02",
      title: "Enterprise Security",
      para: "Protect sensitive data with advanced security features and compliance-ready solutions.",
    },
    {
      number: "03",
      title: "Seamless Integration",
      para: "Connect your software with existing tools and systems effortlessly.",
    },
    {
      number: "04",
      title: "Analytics & Business Intelligence",
      para: "Gain actionable insights to make smarter decisions.",
    },
    {
      number: "05",
      title: "Cloud-Native Architecture",
      para: "Scalable, reliable, and accessible software from anywhere.",
    },
    {
      number: "06",
      title: "Zero-Code Integration",
      para: "Enable easy connectivity between systems without coding complexity.",
    },
  ];

  useGSAP(() => {
    gsap.from(".comprehensive", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".comprehensive",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });
    gsap.from(".advantages-card", {
      opacity: 0,
      y: 150,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".advantages-card",
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".industry-card", {
      opacity: 0,
      y: 80,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".industry-card",
        start: "top 95%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.from(".case-card", {
      opacity: 0,
      y: 80,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".case-card",
        start: "top 95%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.from(".faq-section", {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
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
            const currentValue =
              endValue === 99.9 ? obj.value.toFixed(1) : Math.round(obj.value);
            element.textContent = currentValue + suffix;
          },
        });
      }
    };

    animateCounter(businessesRef.current, 500, "+");
    animateCounter(industriesRef.current, 15, "+");
    animateCounter(uptimeRef.current, 99.9, "%");
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          <div className="relative text-center max-w-7xl mx-auto hero-content text-white">
            <div className="pointer-events-none">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Custom Software & App Solutions for Smarter Operations
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-body">
                At The Great Logic, we develop tailored software and apps that
                streamline workflows, enhance security, and integrate seamlessly
                with your operations. Our solutions are designed to empower
                businesses across industries with efficiency, analytics, and
                real-time collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Management Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Our Software Expertise
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-4xl mx-auto">
              We build robust software solutions to automate and optimize
              critical business processes, helping you save time, reduce errors,
              and improve productivity.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Large Feature Card */}
            <div className="relative lg:col-span-8 bg-gradient-to-br from-gray-50 border to-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <GlowingEffect borderWidth={1} disabled={false} className="rounded-xl" />
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    SMART INVENTORY
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Warehouse Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Optimize storage, track inventory, and improve logistics
                    efficiency.
                  </p>
                </div>
                <div className="w-full lg:w-64 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical Feature Cards */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <GlowingEffect disabled={false} className="rounded-xl" />
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">
                  Inventory Management
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Maintain accurate stock levels and streamline procurement and
                  replenishment.
                </p>
              </div>

              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300">
                <GlowingEffect disabled={false} className="rounded-xl" />
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">
                  Hospital Management
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manage patient records, appointments, billing, and clinical
                  workflows efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="comprehensive relative bg-white border border-gray-200 rounded-2xl p-6 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-black mb-3">
                E-commerce Solutions
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Power online stores with seamless order, payment, and customer
                management.
              </p>
            </div>

            <div className="comprehensive relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-black mb-3">
                POS & Billing Systems
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Fast, accurate, and integrated billing for retail and
                hospitality businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Gen Software Platform Advantages */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Why Choose Automation
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Automation transforms the way businesses operate. Our solutions
              enhance efficiency, provide actionable insights, and ensure
              secure, seamless workflows across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group advantages-card relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg"
              >
                <GlowingEffect disabled={false} className="rounded-xl" />
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {advantage.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {advantage.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
              Our software and automation solutions are designed to meet the
              unique needs of multiple industries, enabling smarter operations
              and better outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Healthcare */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Streamline hospital operations, patient management, and clinical
                workflows.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Impact</span>
                <div className="text-white font-bold">40% efficiency boost</div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Optimize production, inventory, and supply chain processes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Cost Reduction</span>
                <div className="text-white font-bold">35% savings</div>
              </div>
            </div>

            {/* Retail & E-commerce */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Retail & E-commerce</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Enhance sales, inventory management, and customer experience.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Processing Speed</span>
                <div className="text-white font-bold">60% faster</div>
              </div>
            </div>

            {/* Logistics & Transportation */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Logistics & Transportation
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Improve tracking, scheduling, and delivery efficiency.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Fuel Savings</span>
                <div className="text-white font-bold">25% reduction</div>
              </div>
            </div>

            {/* Financial Services */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Banking & Financial Services
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Secure, compliant, and efficient financial operations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Compliance</span>
                <div className="text-white font-bold">50% improvement</div>
              </div>
            </div>

            {/* Technology */}
            <div className="industry-card relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 group">
              <GlowingEffect disabled={false} className="rounded-xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technology</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Custom software solutions to support innovation and scalability.{" "}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Delivery Speed</span>
                <div className="text-white font-bold">45% faster</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border border-white/20 rounded-2xl p-8 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div
                  ref={businessesRef}
                  className="text-4xl font-bold text-white mb-2"
                >
                  0+
                </div>
                <div className="text-white/70">Businesses Served</div>
              </div>
              <div>
                <div
                  ref={industriesRef}
                  className="text-4xl font-bold text-white mb-2"
                >
                  0+
                </div>
                <div className="text-white/70">Industries</div>
              </div>
              <div>
                <div
                  ref={uptimeRef}
                  className="text-4xl font-bold text-white mb-2"
                >
                  0%
                </div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Case Studies
            </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
              Discover how leading companies transformed their operations with
              our software solutions and achieved remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 - Healthcare */}
            <div className="case-card relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/img/healthcare.jpg"
                  alt="Healthcare Management System"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  MedCare Hospital Network
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Streamlined patient management across 15 facilities, reducing
                  administrative overhead by 40% and improving patient
                  satisfaction scores by 35%.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Healthcare</div>
                  <div className="flex items-center text-black/70 hover:text-black transition-colors duration-200 cursor-pointer">
                    <span className="text-sm font-medium mr-2">Read More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Manufacturing */}
            <div className="case-card relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1200&auto=format&fit=crop"
                  alt="Manufacturing Process Optimization"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  TechFlow Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Implemented AI-driven production planning that reduced waste
                  by 30% and increased overall equipment effectiveness to 95%
                  across all production lines.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Manufacturing</div>
                  <div className="flex items-center text-black/70 hover:text-black transition-colors duration-200 cursor-pointer">
                    <span className="text-sm font-medium mr-2">Read More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 - Retail */}
            <div className="case-card relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                  alt="Retail Management System"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  RetailMax Chain
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unified inventory management across 200+ stores, achieving
                  99.5% stock accuracy and reducing out-of-stock incidents by
                  60% through predictive analytics.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Retail</div>
                  <div className="flex items-center text-black/70 hover:text-black transition-colors duration-200 cursor-pointer">
                    <span className="text-sm font-medium mr-2">Read More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="faq-section faq py-20">
        <div className="container mx-auto md:px-6 lg:px-6">
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
      </section> */}

      <CTABannerSection />
    </main>
  );
};

export default SoftwarePage;
