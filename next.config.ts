import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allows all domains (HTTP & HTTPS)
      },
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true, // Allows SVG images (optional)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
