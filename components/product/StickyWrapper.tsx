import React from "react";
import StickyCards from "./StickyCards";

const StickyWrapper = () => {
  return (
    <section className="relative flex justify-center pt-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            The Great Logic Tag Series
          </h2>
        </div>
        <StickyCards />
      </div>
    </section>
  );
};

export default StickyWrapper;
