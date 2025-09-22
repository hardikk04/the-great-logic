"use client";
import LiquidEther from "./LiquidEther";

const Wrapper = () => {
  return (
    <LiquidEther
      colors={["#f8f9fa", "#e9ecef", "#dee2e6"]}
      mouseForce={20}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    />
  );
};

export default Wrapper;
