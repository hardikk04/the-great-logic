import Blog from "@/components/home/Blog";
import CTABannerSection from "@/components/home/CtaBanner";
import { TimelineDemo } from "@/components/home/Timeline";
import Electronic from "@/components/home/Electronic";
import { Features } from "@/components/home/Features";
import Hero from "@/components/home/Hero";
// import Products from "@/components/home/Products";
import Showreel from "@/components/home/Showreel";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import LightImage from "@/components/home/LightImage";
import Wrapper from "@/components/shared/Wrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="absolute top-0 inset-0 z-0 overflow-hidden">
        {<Wrapper />}
      </div>
      <Navbar />
      <Hero />
      <Showreel />
      <TimelineDemo />
      <LightImage />
      <Electronic />
      <Features />
      <Blog />
      <CTABannerSection />
      <Footer />
    </main>
  );
}
