"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import FloatingAtmosphere from "../components/ui/FloatingAtmosphere";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import Phase Components
import HeroScene from "./HeroScene";
const PainsScene = dynamic(() => import("./PainsScene"), { ssr: false });
const AdvantagesScene = dynamic(() => import("./AdvantagesScene"), { ssr: false });
const AboutScene = dynamic(() => import("./AboutScene"), { ssr: false });
const PortfolioScene = dynamic(() => import("./PortfolioScene"), { ssr: false });
const BeforeAfterScene = dynamic(() => import("./BeforeAfterScene"), { ssr: false });
const ProcessScene = dynamic(() => import("./ProcessScene"), { ssr: false });
const CalculatorScene = dynamic(() => import("./CalculatorScene"), { ssr: false });
const FAQScene = dynamic(() => import("./FAQScene"), { ssr: false });
const FinalScene = dynamic(() => import("./FinalScene"), { ssr: false });

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
       // Global ScrollTrigger Refresh to ensure all lazy loaded sections are accounted for
       ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-[#0F0F0F]">
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay bg-noise" />
      <FloatingAtmosphere />

      {/* 1. HERO - First screen must be immediate */}
      <section id="hero">
        <HeroScene />
      </section>

      {/* 2. PAINS - Address fears early */}
      <section id="pains">
        <PainsScene />
      </section>

      {/* 3. ADVANTAGES - Why us */}
      <section id="advantages">
        <AdvantagesScene />
      </section>

      {/* 4. ABOUT - Expert trust */}
      <section id="about">
        <AboutScene />
      </section>

      {/* 5. PROOF - Results */}
      <section id="proof">
        <BeforeAfterScene />
        <PortfolioScene />
      </section>

      {/* 6. PROCESS - How we work */}
      <section id="process">
        <ProcessScene />
      </section>

      {/* 7. CONVERSION - Final stages */}
      <section id="calculator">
        <CalculatorScene />
      </section>

      <section id="faq">
        <FAQScene />
      </section>

      <section id="final">
        <FinalScene />
      </section>
    </div>
  );
}
