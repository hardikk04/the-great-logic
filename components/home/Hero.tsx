"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pointer-events-none pt-[10rem] flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            Bridging the physical and digital worlds to drive smarter operations.
          </h1>

          <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body ">
            We combine cutting-edge hardware with intelligent software to
            automate processes, boost efficiency, and unlock new possibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
