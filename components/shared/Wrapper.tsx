"use client";
import LiquidEther from "./LiquidEther";

const Wrapper = () => {
  return (
    <LiquidEther
      colors={["#f8f9fa", "#e9ecef", "#dee2e6"]}
      mouseForce={10} // 🔽 reduce force so effect is gentler
      cursorSize={50} // smaller cursor area = more localized
      isViscous={true} // enable viscosity for slower fade
      viscous={80} // 🔼 higher = more sticky/slow
      iterationsViscous={64} // smoother fading
      iterationsPoisson={32}
      resolution={0.7} // a bit sharper
      isBounce={false}
      autoDemo={false} // disable auto animation
      autoSpeed={0} // no auto movement
      autoIntensity={0} // prevent background spreading
      takeoverDuration={0.2} // slightly smoother transitions
      autoResumeDelay={0}
      autoRampDuration={0.2}
    />
  );
};

export default Wrapper;
