"use client";

import Blog from "@/components/home/Blog";
import CTABannerSection from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Showreel from "@/components/home/Showreel";
import Testimonial from "@/components/home/Testimonial";
import Wrapper from "@/components/shared/Wrapper";

import Product from "@/components/home/Product";

import Workflow2 from "@/components/home/Workflow2";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 inset-0 z-0 overflow-hidden">
        {<Wrapper />}
      </div>
      <Hero />
      <Showreel />
      <Product />
      <Workflow2 />
      <Blog />
      <Testimonial />
      <CTABannerSection />
    </main>
  );
}
