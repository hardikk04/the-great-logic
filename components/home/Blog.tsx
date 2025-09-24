"use client";

import { Calendar, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const Blog = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
    carousel.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (carousel) carousel.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (carousel) carousel.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!isDragging || !carousel) return;

    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carousel.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const carousel = carouselRef.current;
    if (!isDragging || !carousel) return;

    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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

  return (
    <section
      id="blog"
      className="blog-section bg-gradient-subtle sm:px-6 py-4 pt-30"
    >
      <div className="container mx-auto text-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Blog & Media
          </h2>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative overflow-hidden px-4 md:px-0">
          <div
            ref={carouselRef}
            className={`flex space-x-8 md:space-x-8 sm:space-x-6 max-sm:space-x-4 pb-8 overflow-x-auto scrollbar-hide pl-4 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ userSelect: "none" }}
          >
            {[...blogPosts, ...blogPosts, ...blogPosts].map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className={`blog-card-${
                  index % blogPosts.length
                } flex-shrink-0 w-80 md:w-80 sm:w-72 max-sm:w-64 bg-white/90 rounded-2xl shadow-medium border border-border overflow-hidden hover:shadow-strong transition-all duration-300 group cursor-pointer`}
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
                  <h3 className="text-xl font-heading font-semibold text-black mb-3  transition-colors duration-300">
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
