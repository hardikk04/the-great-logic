"use client";

import React from "react";
import { Heart, Globe, Rocket, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const TeamCulture = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "Every project we undertake is fueled by genuine passion and enthusiasm for creating exceptional solutions.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description:
        "We think globally while acting locally, bringing world-class solutions to businesses everywhere.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Rocket,
      title: "Rapid Innovation",
      description:
        "In a fast-paced digital world, we move quickly without compromising on quality or attention to detail.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "We build lasting relationships based on trust, transparency, and consistent delivery of promises.",
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-blue-600">Culture</span> & Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What makes us different isn&apos;t just our technology—it&apos;s our
            people, our values, and our unwavering commitment to excellence in
            everything we do.
          </p>
        </div>

        {/* Values in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="relative">
              <GlowingEffect disabled={false} className="rounded-2xl" />
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {value.description}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
