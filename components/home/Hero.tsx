"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pointer-events-none pt-[12rem] flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-black mb-6">
            Revolutionizing the future of <br /> operations
          </h1>

          <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body ">
            We deliver connected solutions that streamline processes, enhance
            efficiency, and unlock new opportunities for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
