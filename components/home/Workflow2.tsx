"use client";

import Image from "next/image";

const Workflow2 = () => {
  const workflowSteps = [
    {
      id: 1,
      title: "Warehouse",
      description: "Smart inventory management and supply chain optimization",
      image: "/img/Warehouse.png",
    },
    {
      id: 2,
      title: "Shopping",
      description: "Digital solutions for modern retail experiences",
      image: "/img/supermarket.png",
    },
    {
      id: 3,
      title: "Office",
      description: "Connected workspace environments and automation",
      image: "/img/Corporate.png",
    },
    {
      id: 4,
      title: "Healthcare",
      description: "Advanced monitoring and patient care systems",
      image: "/img/Hospitals.png",
    },
  ];

  return (
    <section className="w-full bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Our Workflow
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional IoT solutions
            across industries
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step) => (
            <div key={step.id} className="group relative">
              {/* Card */}
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-lg h-80 flex flex-col">
                {/* Image */}
                <div className="relative h-48 bg-gray-100 flex-shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow2;
