"use client";

import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import { useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutHero = () => {
  return (
    <section className="relative pointer-events-none pt-[10rem] pb-[6rem] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
          About
          <br />
          <span className="">Great Logic</span>
        </h1>
        <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body">
          Pioneering the future of retail technology with innovative digital
          solutions that transform traditional business operations into
          intelligent, connected experiences.
        </p>
      </div>
    </section>
  );
};

const CompanyStory = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded with a vision to revolutionize retail operations, Great
                Logic emerged from the need to bridge the gap between
                traditional retail practices and cutting-edge technology
                solutions.
              </p>
              <p>
                Our journey began when we recognized the inefficiencies in
                manual store management systems. We saw an opportunity to
                transform how retailers interact with their inventory, pricing,
                and customer data through intelligent digital tag solutions.
              </p>
              <p>
                Today, we stand as pioneers in digital retail technology,
                helping businesses across the globe optimize their operations
                and enhance customer experiences through innovative digital
                solutions.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Innovation First
                </h3>
                <p className="text-gray-600 mt-2">
                  Driving technological advancement in retail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "Continuously pushing boundaries to create cutting-edge solutions that redefine industry standards.",
      icon: "💡",
    },
    {
      title: "Quality",
      description:
        "Delivering excellence in every product and service, ensuring reliability and superior performance.",
      icon: "⭐",
    },
    {
      title: "Sustainability",
      description:
        "Building eco-friendly solutions that reduce environmental impact while maximizing efficiency.",
      icon: "🌱",
    },
    {
      title: "Partnership",
      description:
        "Fostering long-term relationships built on trust, transparency, and mutual growth.",
      icon: "🤝",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our mission and shape our approach to
            innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Statistics = () => {
  const stats = [
    { number: "500+", label: "Retail Partners" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "50M+", label: "Tags Deployed" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relative py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Impact by Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
          Our Mission
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-12 rounded-3xl">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            &ldquo;To empower retailers worldwide with intelligent digital
            solutions that streamline operations, enhance customer experiences,
            and drive sustainable growth in an increasingly connected
            world.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Efficiency</h3>
            <p className="text-gray-600">
              Streamlining retail operations through automation
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Excellence</h3>
            <p className="text-gray-600">
              Delivering superior quality in every solution
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Growth</h3>
            <p className="text-gray-600">
              Enabling sustainable business expansion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏪</div>
                  <h4 className="font-bold mb-1">Smart Retail</h4>
                  <p className="text-sm opacity-90">Digital tag systems</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-bold mb-1">Analytics</h4>
                  <p className="text-sm opacity-90">Real-time insights</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <h4 className="font-bold mb-1">Automation</h4>
                  <p className="text-sm opacity-90">Seamless integration</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">☁️</div>
                  <h4 className="font-bold mb-1">Cloud-based</h4>
                  <p className="text-sm opacity-90">Scalable solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">
              Technology Stack
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our cutting-edge technology stack combines IoT sensors, cloud
                computing, and AI-powered analytics to deliver comprehensive
                digital retail solutions.
              </p>
              <p>
                From real-time price updates to inventory tracking and customer
                behavior analytics, our platform provides retailers with the
                tools they need to stay competitive in today&rsquo;s market.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "IoT",
                  "Cloud Computing",
                  "AI/ML",
                  "Real-time Analytics",
                  "Mobile Integration",
                  "API-First",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
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
        <Wrapper />
      </div>
      <AboutHero />
      <CompanyStory />
      <Values />
      <Statistics />
      <Mission />
      <Technology />
    </main>
  );
};

export default AboutPage;
