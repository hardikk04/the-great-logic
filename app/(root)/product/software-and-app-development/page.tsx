"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTABannerSection from "@/components/home/CtaBanner";
import { useGSAP } from "@gsap/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SoftwarePage = () => {
  const businessesRef = useRef(null);
  const industriesRef = useRef(null);
  const uptimeRef = useRef(null);

  const advantages = [
    {
      title: "Warehouse Management",
      para: "Optimize storage, track inventory, and improve logistics efficiency.",
      icon: "/img/warehouse-management-icon.svg",
    },
    {
      title: "Inventory Management",
      para: "Maintain accurate stock levels and streamline procurement and replenishment.",
      icon: "/img/inventory-management-icon-256.svg",
    },
    {
      title: "Hospital Management",
      para: "Manage patient records, appointments, billing, and clinical workflows efficiently.",
      icon: "/img/hospital-management-icon-256.svg",
    },
    {
      title: "E-commerce Solutions",
      para: "Power online stores with seamless order, payment, and customer management.",
      icon: "/img/ecommerce-solutions-icon-final-256.svg",
    },
    {
      title: "POS & Billing Systems",
      para: "Fast, accurate, and integrated billing for retail and hospitality businesses.",
      icon: "/img/pos billing.svg",
    },
  ];

  const mediaQuery = window.matchMedia("(min-width: 1024px)");

  const page7Animation = () => {
    if (mediaQuery.matches) {
      // Desktop: Pin animation (≥1024px)
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          trigger: ".why-us-section",
          start: "top 0%",
          end: "top -100%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".page7-elem", {
        width: "24%",
        stagger: 0.1,
        backgroundColor: "#F0F1FA",
        color: "#07003f",
      });
    } else {
      // Mobile/Tablet: Simple color animation (<1024px)
      gsap.to(".page7-elem", {
        backgroundColor: "#F0F1FA",
        color: "#07003f",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".page7-container",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    }
  };

  useGSAP(() => {
    // Small delay to ensure DOM is fully rendered and measured
    setTimeout(() => {
      // Responsive advantages container animation
      if (mediaQuery.matches) {
        // Desktop: Horizontal scroll animation (≥1024px)
        // Calculate scroll distance to show the last card fully
        const container = document.querySelector(
          ".advantages-container"
        ) as HTMLElement;
        const containerWrapper = document.querySelector(
          ".advantages-container-wrapper"
        ) as HTMLElement;

        if (container && containerWrapper) {
          const containerWidth = container.scrollWidth;
          const wrapperWidth = containerWrapper.clientWidth;
          const maxScroll = containerWidth - wrapperWidth;
          const scrollPercentage = (maxScroll / containerWidth) * 100;

          gsap.to(".advantages-container", {
            transform: `translateX(-${scrollPercentage}%)`,
            scrollTrigger: {
              trigger: ".advantages-container",
              start: "top 40%",
              end: "top 0%",
              scrub: true,
            },
          });
        }
      }
      // Mobile: No animation, just rely on CSS overflow scrolling
    }, 100);

    // Always call page7Animation - it handles responsive behavior internally
    page7Animation();

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.killAll();

      // Small delay to ensure DOM is properly measured after resize
      setTimeout(() => {
        // Re-initialize animations based on screen size
        if (mediaQuery.matches) {
          // Calculate scroll distance to show the last card fully
          const container = document.querySelector(
            ".advantages-container"
          ) as HTMLElement;
          const containerWrapper = document.querySelector(
            ".advantages-container-wrapper"
          ) as HTMLElement;

          if (container && containerWrapper) {
            const containerWidth = container.scrollWidth;
            const wrapperWidth = containerWrapper.clientWidth;
            const maxScroll = containerWidth - wrapperWidth;
            const scrollPercentage = (maxScroll / containerWidth) * 100;

            gsap.to(".advantages-container", {
              transform: `translateX(-${scrollPercentage}%)`,
              scrollTrigger: {
                trigger: ".advantages-container",
                start: "top 40%",
                end: "top 0%",
                scrub: true,
              },
            });
          }
        }

        page7Animation();

        // Re-initialize counter animations after resize
        setTimeout(() => {
          initCounterAnimations();
        }, 100);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    // Initialize counter animations after a short delay to ensure DOM is ready
    setTimeout(() => {
      initCounterAnimations();
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Counter animations function
  const initCounterAnimations = () => {
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
  };

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
              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8 font-body">
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

      {/* Our Software Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Our Software Expertise
            </h2>
            <p className="text-lg md:text-lg text-black/70 max-w-4xl mx-auto">
              We build robust software solutions to automate and optimize
              critical business processes, helping you save time, reduce errors,
              and improve productivity.
            </p>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="relative">
            <div className="overflow-x-auto pb-6 scrollbar-hide advantages-container-wrapper">
              <div className="flex gap-6 w-max advantages-container">
                {/* App Development Card */}
                {advantages.map((advantage, index) => {
                  return (
                    <div
                      key={index}
                      className="min-w-[320px] max-w-[320px]  bg-white rounded-3xl border border-gray-300 group transition-all duration-300 relative"
                    >
                      <GlowingEffect
                        borderWidth={2}
                        disabled={false}
                        className="rounded-3xl"
                      />
                      <div className="p-8 h-full flex flex-col">
                        {/* Number at top */}

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {advantage.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-auto">
                          {advantage.para}
                        </p>

                        {/* Icon at bottom */}
                        <div className="mt-auto pt-6">
                          <div className="w-16 h-10 rounded-2xl flex items-center justify-center">
                            <Image
                              src={advantage.icon}
                              alt="inventory-management-icon-256.svg"
                              width={70}
                              height={70}
                              className="object-contain"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
            <p className="text-lg md:text-lg text-white/80 max-w-4xl mx-auto">
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

      {/* Next-Gen Software Platform Advantages */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 why-us-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-lg text-black/70 max-w-4xl mx-auto">
              Automation transforms the way businesses operate. Our solutions
              enhance efficiency, provide actionable insights, and ensure
              secure, seamless workflows across your organization.
            </p>
          </div>

          <div className="page7-container overflow-x-hidden">
            <div className="page7-container-elems">
              <div className="page7-elem1 page7-elem">
                <div className="w-16 h-10 rounded-2xl flex items-center justify-center">
                  <Image
                    src={"/img/automation.png"}
                    alt="inventory-management-icon-256.svg"
                    width={70}
                    height={70}
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h2>Workflow Automation</h2>
                  <p>
                    {`Simplify processes and reduce manual effort for faster, error-free operations.`}
                  </p>
                </div>
              </div>
              <div className="page7-elem2 page7-elem">
                <div className="w-16 h-10 rounded-2xl flex items-center justify-center">
                  <Image
                    src={"/img/building.png"}
                    alt="inventory-management-icon-256.svg"
                    width={70}
                    height={70}
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h2>Enterprise Security</h2>
                  <p>
                    Protect sensitive data with advanced security features and
                    compliance-ready solutions.
                  </p>
                </div>
              </div>
              <div className="page7-elem3 page7-elem">
                <div className="w-16 h-10 rounded-2xl flex items-center justify-center">
                  <Image
                    src={"/img/concept.png"}
                    alt="inventory-management-icon-256.svg"
                    width={70}
                    height={70}
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h2>Seamless Integration</h2>
                  <p>
                    Connect your software with existing tools and systems
                    effortlessly.
                  </p>
                </div>
              </div>
              <div className="page7-elem4 page7-elem">
                <div className="w-16 h-10 rounded-2xl flex items-center justify-center">
                  <Image
                    src={"/img/analytics.png"}
                    alt="inventory-management-icon-256.svg"
                    width={70}
                    height={70}
                    className="object-contain"
                  ></Image>
                </div>
                <div className="flex flex-col gap-4">
                  <h2>Analytics & Business Intelligence</h2>
                  <p>Gain actionable insights to make smarter decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="py-20">
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
      </section> */}

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
