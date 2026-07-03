"use client";

import HeroScene from "./Experience/HeroScene";
import FloatingAtmosphere from "../ui/FloatingAtmosphere";
import TransformationScene from "./Experience/TransformationScene";
import LightingScene from "./Experience/LightingScene";
import MacroDetailScene from "./Experience/MacroDetailScene";
import BeforeAfterScene from "./Experience/BeforeAfterScene";
import ProcessScene from "./Experience/ProcessScene";
import AboutScene from "./Experience/AboutScene";
import ExplorerScene from "./Experience/ExplorerScene";
import PortfolioScene from "./Experience/PortfolioScene";
import CalculatorScene from "./Experience/CalculatorScene";
import FAQScene from "./Experience/FAQScene";
import FinalScene from "./Experience/FinalScene";

export default function Experience() {
  return (
    <div id="main-experience" className="relative w-full bg-luxury-bg">
      {/* Global Cinematic Grain - Reduced opacity for performance */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay bg-noise" />

      {/* Ambient Depth Layer */}
      <FloatingAtmosphere />

      {/* 1. Emotion + USP */}
      <section className="relative w-full">
        <HeroScene />
      </section>

      {/* 2. Trust Pillar: The Person & Experience */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <AboutScene />
      </div>

      {/* 3. Product Explanation: Visual & Interactive */}
      <section className="relative w-full">
        <TransformationScene />
      </section>
      <section className="relative w-full">
        <LightingScene />
      </section>
      <div className="relative z-10 bg-luxury-bg">
        <ExplorerScene />
      </div>

      {/* 4. Deep Tech Proof & Details */}
      <section className="relative w-full">
        <MacroDetailScene />
      </section>

      {/* 5. Proof of Result: Portfolio & Comparison */}
      <section className="relative w-full">
        <BeforeAfterScene />
      </section>
      <div className="relative z-10 bg-luxury-bg">
        <PortfolioScene />
      </div>

      {/* 6. Process & Service Trust */}
      <section className="relative w-full">
        <ProcessScene />
      </section>

      {/* 7. Conversion Funnel: Price, FAQ, Contact */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <CalculatorScene />
        <FAQScene />
        <FinalScene />
      </div>
    </div>
  );
}
