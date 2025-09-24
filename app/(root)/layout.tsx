"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Loader from "@/components/Loader";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: React.ReactNode }) {
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
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
