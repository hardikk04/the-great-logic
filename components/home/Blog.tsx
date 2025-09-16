"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Calendar, ArrowRight, User } from "lucide-react";
import Image from "next/image";

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Retail: Digital Transformation",
      excerpt:
        "Exploring how digital tags are reshaping the retail landscape and creating new opportunities for growth.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
    },
    {
      id: 2,
      title: "Sustainability in Retail Technology",
      excerpt:
        "How electronic shelf labels contribute to more sustainable retail practices and reduce environmental impact.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Sustainability",
    },
    {
      id: 3,
      title: "Case Study: Walmart's Digital Transformation",
      excerpt:
        "A deep dive into how major retailers are implementing digital tag solutions across their store networks.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      category: "Case Study",
    },
    {
      id: 4,
      title: "ROI of Digital Price Tags",
      excerpt:
        "Understanding the financial benefits and return on investment of implementing digital tagging systems.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      author: "David Kim",
      date: "March 5, 2024",
      category: "Business",
    },
    {
      id: 5,
      title: "Innovation Spotlight: AI-Powered Tags",
      excerpt:
        "The latest developments in artificial intelligence integration with digital retail tag technology.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      author: "Lisa Wang",
      date: "March 1, 2024",
      category: "Innovation",
    },
  ];

  useEffect(() => {
    gsap.context(() => {
      // Auto-scroll carousel
      const carousel = carouselRef.current;

      if (carousel) {
        gsap.to(carousel, {
          x: () => -(carousel.scrollWidth - carousel.clientWidth),
          duration: 20,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(
              (x) =>
                parseFloat(x) % (carousel.scrollWidth - carousel.clientWidth)
            ),
          },
        });

        // Pause on hover
        carousel.addEventListener("mouseenter", () => {
          gsap.globalTimeline.pause();
        });

        carousel.addEventListener("mouseleave", () => {
          gsap.globalTimeline.resume();
        });
      }
    });
  });

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="bg-gradient-subtle overflow-hidden sm:px-6 py-4"
    >
      <div className="container mx-auto text-white">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-white text-[4vw] max-sm:text-[8vw] max-md:text-[7vw] z-1 mix-blend-difference para">
            Blog & Media
          </h2>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative">
          <div ref={carouselRef} className="flex space-x-8 pb-8">
            {[...blogPosts, ...blogPosts].map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className={`blog-card-${
                  index % blogPosts.length
                } flex-shrink-0 w-80 bg-white/90 rounded-2xl shadow-medium border border-border overflow-hidden hover:shadow-strong transition-all duration-300 group cursor-pointer`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={400}
                    height={250}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-body">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
