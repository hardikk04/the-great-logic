"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const AboutStory = () => {
  const timelineData = [
    {
      title: "2018",
      image: "/img/logo.png",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black">The Beginning</h3>
          <p className="text-gray-700 leading-relaxed">
            It all started when our founder recognized a gap in the market for
            truly customer-centric technology solutions. After years of working
            at large corporations where innovation was stifled by bureaucracy,
            the vision was clear: create a company that could move fast, think
            creatively, and put client success at the heart of everything.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 font-medium">
              Started with just 3 passionate individuals working from a garage
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      image: "/img/digital-tag.jpeg",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black">First Breakthrough</h3>
          <p className="text-gray-700 leading-relaxed">
            Our innovative digital store Label solution gained traction in the
            retail industry. We helped our first 50 businesses transform their
            operations, proving that technology could be both powerful and
            user-friendly.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-green-800">Businesses Helped</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">15</div>
              <div className="text-sm text-purple-800">Team Members</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      image: "/img/digital.jpeg",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black">Scaling Innovation</h3>
          <p className="text-gray-700 leading-relaxed">
            Expanded our product line to include comprehensive warehouse
            management and software solutions. Our team grew to support
            increasing demand, while maintaining our commitment to quality and
            customer satisfaction.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-indigo-800 font-medium">
              Launched 3 major product categories serving diverse industries
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      image: "/img/healthcare.jpg",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black">Global Impact</h3>
          <p className="text-gray-700 leading-relaxed">
            Today, we&apos;ve helped over 500 companies transform their digital
            presence, streamline their operations, and achieve their most
            ambitious goals. Our team of 50+ talented professionals continues to
            push boundaries and raise the bar for what&apos;s possible in retail
            technology.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-orange-600">500+</div>
              <div className="text-xs text-orange-800">Companies</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-teal-600">50+</div>
              <div className="text-xs text-teal-800">Team Members</div>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-rose-600">Global</div>
              <div className="text-xs text-rose-800">Reach</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a small garage startup to a global technology leader—every step
            of our journey has been driven by passion, innovation, and
            unwavering commitment to our clients&apos; success.
          </p>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default AboutStory;
