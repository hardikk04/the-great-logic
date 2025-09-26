"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Zap } from "lucide-react";
import React from "react";

const MissionVision = () => {
  return (
    <section className="relative z-[2] py-20 md:px-6">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Purpose & <span className="text-blue-600">Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driven by innovation and guided by excellence, we shape the future
            of retail technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-10 text-center space-y-6">
              <div className="relative">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-3xl font-bold text-black">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We exist to help businesses unlock their full potential through
                innovative technology solutions. We believe that every
                organization, regardless of size, deserves access to world-class
                digital tools that drive growth, efficiency, and success.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-10 text-center space-y-6">
              <div className="relative">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-3xl font-bold text-black">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the global leader in transformative technology solutions,
                creating a world where every business can harness the power of
                innovation to solve their most complex challenges and achieve
                sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-10 text-center space-y-6">
              <div className="relative">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-3xl font-bold text-black">People First</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Every solution we create puts people at the center. From our
                team to our clients&apos; customers, we design with empathy,
                understanding, and genuine care for human experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-10 text-center space-y-6">
              <div className="relative">
                <div className="h-20 w-20 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-3xl font-bold text-black">
                Innovation Drive
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We don&apos;t just follow trends—we create them. Our commitment
                to cutting-edge technology and creative problem-solving keeps us
                at the forefront of digital transformation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
