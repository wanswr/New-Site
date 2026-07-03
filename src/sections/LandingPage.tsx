"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import FloatingAtmosphere from "../components/ui/FloatingAtmosphere";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import HeroScene from "./HeroScene";

// Lazy load sections for better performance
const AboutScene = dynamic(() => import("./AboutScene"));
const BeforeAfterScene = dynamic(() => import("./BeforeAfterScene"));
const PortfolioScene = dynamic(() => import("./PortfolioScene"));
const ProcessScene = dynamic(() => import("./ProcessScene"));
const CalculatorScene = dynamic(() => import("./CalculatorScene"));
const FAQScene = dynamic(() => import("./FAQScene"));
const FinalScene = dynamic(() => import("./FinalScene"));

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Refresh ScrollTrigger when components might have loaded/resized
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="main-experience" className="relative w-full bg-luxury-bg">
      {/* Global Cinematic Grain - Reduced opacity for performance */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay bg-noise" />

      {/* Ambient Depth Layer */}
      <FloatingAtmosphere />

      {/* 1. HERO - USP & First Impression */}
      <section className="relative w-full">
        <HeroScene />
      </section>

      {/* PAIN POINTS & SOLUTIONS - INTEGRATED INTO FLOW */}
      <section className="relative w-full py-24 md:py-48 px-6 bg-luxury-bg border-y border-luxury-brass/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] font-bold">Без грязи</span>
            <h3 className="text-2xl font-serif text-luxury-text">Чистый монтаж</h3>
            <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
              Используем перфораторы с пылесборниками. Никакой строительной пыли на вашей мебели.
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] font-bold">Без сюрпризов</span>
            <h3 className="text-2xl font-serif text-luxury-text">Фиксированная цена</h3>
            <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
              Смета утверждается до начала работ и не меняется ни на копейку.
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] font-bold">Без ожиданий</span>
            <h3 className="text-2xl font-serif text-luxury-text">За 1 день</h3>
            <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
              Собственные бригады позволяют выходить на объект на следующий день после замера.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROOF & TRUST - Case Studies */}
      <section className="relative w-full">
        <BeforeAfterScene />
      </section>

      <div className="relative z-10 bg-luxury-bg">
        <PortfolioScene />
      </div>

      {/* 3. EXPERTISE - About the Expert (Shortened) */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <AboutScene />
      </div>

      {/* 4. PROCESS - How we work */}
      <section className="relative w-full">
        <ProcessScene />
      </section>

      {/* 5. CONVERSION - Calculator, FAQ, Contact */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <CalculatorScene />
        <FAQScene />
        <FinalScene />
      </div>
    </div>
  );
}
