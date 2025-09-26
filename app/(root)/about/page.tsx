"use client";

import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import AboutStory from "@/components/about/AboutStory";
import TeamCulture from "@/components/about/TeamCulture";
import CTABannerSection from "@/components/home/CtaBanner";
import Testimonial from "@/components/home/Testimonial";

const About = () => {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <MissionVision />
      <AboutStory />
      <TeamCulture />
      <Testimonial />
      <CTABannerSection />
    </main>
  );
};

export default About;
