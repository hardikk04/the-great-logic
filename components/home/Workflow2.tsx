const Workflow2 = () => {
  return (
    <section className="w-full relative bg-white pt-30">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-black mb-6">
            OUR WORKFLOW
          </h2>
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed font-body">
            Transforming industries with innovative IoT solutions and smart
            digital experiences across multiple sectors
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center mx-auto space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-black mb-2">
                Warehouse
              </h3>
              <p className="text-black font-body">
                Understanding your business needs and challenges
              </p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-black"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-black mb-2">
                Shoping
              </h3>
              <p className="text-black font-body">
                Creating tailored IoT solutions for your industry
              </p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-black"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-black mb-2">
                Office
              </h3>
              <p className="text-black font-body">
                Seamless implementation and integration
              </p>
            </div>
            <div className="hidden md:block w-16 h-0.5 bg-black"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-black mb-2">
                Health
              </h3>
              <p className="text-black font-body">
                Ongoing maintenance and optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
    </section>
  );
};

export default Workflow2;
