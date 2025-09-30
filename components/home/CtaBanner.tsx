import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTABannerSection = () => {
  return (
    <section className="relative overflow-hidden my-[6rem] mt-[3rem]">
      {/* Background decorative elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative liquid-glass border border-white/20 rounded-xl backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-16 lg:py-14 bg-black">
          <div className="text-center">
            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Ready to Transform
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how our hardware and software solutions can revolutionize
              the way you work.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/contact"}>
                <Button
                  variant={"default"}
                  className="button border-white/25 border-[1px] hover:text-white duration-300 transition-all leading-0"
                >
                  <p className="relative z-[1]">Talk to an Expert</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
