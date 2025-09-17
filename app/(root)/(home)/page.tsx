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

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Showreel />
      {/* <Products /> */}
      <TimelineDemo />
      <Electronic />
      <Features />
      <Blog />
      <CTABannerSection />
      <Footer />
    </main>
  );
}
