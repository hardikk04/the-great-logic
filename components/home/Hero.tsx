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
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold text-black mb-6">
            Revolutionizing
            <br />
            <span className="">Digital Store Tags</span>
          </h1>

          <p className="text-md md:text-xl text-black md:my-12 max-w-3xl mx-auto font-body ">
            From manual to digital, Great Logic brings innovation to retail with
            cutting-edge tag solutions that transform how stores operate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
