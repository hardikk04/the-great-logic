// lenis-provider.tsx
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const SmoothScroll: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      <div>{children}</div>
    </ReactLenis>
  );
};

export default SmoothScroll;
