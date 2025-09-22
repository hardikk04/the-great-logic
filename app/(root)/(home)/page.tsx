"use client";

import Blog from "@/components/home/Blog";
import CTABannerSection from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Showreel from "@/components/home/Showreel";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Testimonial from "@/components/home/Testimonial";
import Wrapper from "@/components/shared/Wrapper";
import Product from "@/components/home/Product";
import Electronic from "@/components/home/Electronic";
// import { useEffect, useState } from "react";
// import Loader from "@/components/Loader";
// import gsap from "gsap";

export default function Home() {
  // const [isLoading, setisLoading] = useState(true);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.to(".loader-text span", {
  //     opacity: 1,
  //     stagger: {
  //       amount: 0.6,
  //     },
  //   }).to(".loader", {
  //     opacity: 0,
  //     onComplete: () => {
  //       setisLoading(false);
  //     },
  //   });
  // }, [isLoading]);

  // if (isLoading) return <Loader />;

  return (
    <main className="min-h-screen bg-white">
      <div className="absolute top-0 inset-0 z-0 overflow-hidden">
        {<Wrapper />}
      </div>
      <Navbar />
      <Hero />
      <Showreel />
      <Product />
      <Electronic />
      <Blog />
      <Testimonial />
      <CTABannerSection />
      <Footer />
    </main>
  );
}
