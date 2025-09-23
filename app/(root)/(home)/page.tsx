"use client";

import Blog from "@/components/home/Blog";
import CTABannerSection from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Showreel from "@/components/home/Showreel";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Testimonial from "@/components/home/Testimonial";
import Wrapper from "@/components/shared/Wrapper";
import Workflow from "@/components/home/Workflow";
import { useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import Product from "@/components/home/Product";
import { useGSAP } from "@gsap/react";
import Workflow2 from "@/components/home/Workflow2";

export default function Home() {
  const [isLoading, setisLoading] = useState(true);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".loader-text span", {
      opacity: 1,
      stagger: {
        amount: 0.8,
      },
    }).to(".loader", {
      opacity: 0,
      onComplete: () => {
        setisLoading(false);
      },
    });
  }, [isLoading]);

  if (isLoading) return <Loader />;

  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 inset-0 z-0 overflow-hidden">
        {<Wrapper />}
      </div>
      <Navbar />
      <Hero />
      <Showreel />
      <Product />
      {/* <Electronic /> */}
      <Workflow />
      <Workflow2 />
      <Blog />
      <Testimonial />
      <CTABannerSection />
      <Footer />
    </main>
  );
}
