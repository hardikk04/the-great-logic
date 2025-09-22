"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturesContent {
  title: string;
  subtitle: string;
}

const defaultContent: FeaturesContent = {
  title: "What we are about",
  subtitle: "Discover our unique approach to 3D animation",
};

export function Features() {
  const [content] = useState<FeaturesContent>(defaultContent);

  return (
    <section
      id="features"
      className="container mx-auto px-6 py-16 sm:py-20 relative z-[1]"
    >
      <h2 className="text-[4vw] max-sm:text-[8vw] max-md:text-[7vw] z-1 para py-5">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className=" md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">
              ADAPTABILITY
            </p>
            <CardTitle className="mt-1 text-xl text-black">
              Seamless integration, truly intuitive.
            </CardTitle>
            <p className="text-black/70">
              Great Logic’s digital tags are designed to adapt to any retail
              environment. Whether you run a small boutique or a large
              supermarket chain, our solutions make operations smarter, faster,
              and more reliable.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 pt-3">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1672552226380-486fe900b322?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Close-up smartphone camera module on textured leather back"
                  className="object-cover h-[45vh] w-full"
                  sizes="(min-width: 768px) 240px, 40vw"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">
              CLIENT LOVE
            </p>
            <CardTitle className="mt-1 text-xl text-black">
              {`Our solutions don’t just look innovative — they transform retail efficiency.`}
            </CardTitle>
            <p className="text-black/60">
              From reducing manual errors to saving time on price updates, our
              clients immediately feel the difference.
            </p>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-lime-300 text-lime-300"
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={
                  "https://www.minewtag.com/upload/ztyImg/2025-06/6840f982781e5.jpg"
                }
                width={280}
                height={160}
                alt="Product sketch concepts of backpack on paper"
                className="w-full rounded-xl border border-white/10 object-cover h-[40vh]"
              />
              <Image
                src={
                  "https://www.minewtag.com/upload/ztyImg/2024-11/background-DS035-2.jpg"
                }
                width={280}
                height={160}
                alt="Backpacks on stage with Smartpack PRO lighting"
                className="w-full rounded-xl border border-white/10 object-cover h-[40vh]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
