"use client";

import Blog from "@/components/home/Blog";
import CTABannerSection from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Wrapper from "@/components/shared/Wrapper";

import Product from "@/components/home/Product";

import Workflow2 from "@/components/home/Workflow2";
import DashboardAnimation from "@/components/home/DashboardAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 inset-0 z-0 overflow-hidden">
        {<Wrapper />}
      </div>
      <Hero />
      <DashboardAnimation />
      <Product />
      <Workflow2 />
      <Blog />
      <Testimonial />
      <CTABannerSection />
    </main>
  );
}
