import React from "react";
import { ArrowRight} from "lucide-react";
import { Button } from "../ui/button";

const CTABannerSection = () => {
  return (
    <section className="relative  overflow-hidden my-[6rem] px-6">
      {/* Background decorative elements */}

      <div className="relative liquid-glass border border-white/20 rounded-xl backdrop-blur-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-14 bg-black">
        <div className="text-center">
          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Ready to Transform
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies already using our platform to accelerate
            growth, increase productivity, and unlock new possibilities.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant={"secondary"}>
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
