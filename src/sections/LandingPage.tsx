"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import FloatingAtmosphere from "../components/ui/FloatingAtmosphere";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import HeroScene from "./HeroScene";

// Lazy load sections for better performance and Lighthouse score
const AboutScene = dynamic(() => import("./AboutScene"), { ssr: false });
const BeforeAfterScene = dynamic(() => import("./BeforeAfterScene"), { ssr: false });
const PortfolioScene = dynamic(() => import("./PortfolioScene"), { ssr: false });
const ProcessScene = dynamic(() => import("./ProcessScene"), { ssr: false });
const CalculatorScene = dynamic(() => import("./CalculatorScene"), { ssr: false });
const FAQScene = dynamic(() => import("./FAQScene"), { ssr: false });
const FinalScene = dynamic(() => import("./FinalScene"), { ssr: false });

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

      {/* 2. PAIN POINTS - What clients fear */}
      <section className="relative w-full py-24 md:py-48 px-6 bg-luxury-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4">Проблемы</span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-text tracking-tighter">
              Почему ремонт потолков <br /> <span className="italic text-luxury-brass/80">это стресс?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="w-12 h-[1px] bg-luxury-brass/30 group-hover:w-full transition-all duration-700" />
              <h3 className="text-2xl font-serif text-luxury-text">Грязь и пыль повсюду</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
                Обычно после монтажа приходится вызывать клининг и отмывать всю мебель.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-[1px] bg-luxury-brass/30 group-hover:w-full transition-all duration-700" />
              <h3 className="text-2xl font-serif text-luxury-text">Цена растет в процессе</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
                Замерщик говорит одну цену, а монтажники требуют доплаты за каждый угол.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-[1px] bg-luxury-brass/30 group-hover:w-full transition-all duration-700" />
              <h3 className="text-2xl font-serif text-luxury-text">Срыв сроков</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
                Бригады пропадают, задерживают поставку материалов и растягивают работу на неделю.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / WHY US */}
      <section className="relative w-full py-24 md:py-48 px-6 bg-luxury-bg-alt border-y border-luxury-brass/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
             <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4">Наше решение</span>
             <h2 className="text-4xl md:text-6xl font-serif text-luxury-text tracking-tighter">
                Потолок под ключ <br /> <span className="italic text-luxury-brass/80">без головной боли</span>
             </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] font-bold">Без грязи</span>
              <h3 className="text-2xl font-serif text-luxury-text">Чистый монтаж</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
                Используем перфораторы с пылесборниками и защитные пленки. Никакой строительной пыли на вашей мебели.
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] font-bold">Без сюрпризов</span>
              <h3 className="text-2xl font-serif text-luxury-text">Фиксированная цена</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed">
                Смета утверждается до начала работ по договору и не меняется ни на копейку.
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
        </div>
      </section>

      {/* 4. PROOF & TRUST - Case Studies */}
      <section className="relative w-full">
        <BeforeAfterScene />
      </section>

      <div className="relative z-10 bg-luxury-bg">
        <PortfolioScene />
      </div>

      {/* 5. EXPERTISE - About the Expert */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <AboutScene />
      </div>

      {/* 6. PROCESS - How we work */}
      <section className="relative w-full">
        <ProcessScene />
      </section>

      {/* 7. CONVERSION - Calculator, FAQ, Contact */}
      <div className="relative z-10 bg-luxury-bg shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <CalculatorScene />
        <FAQScene />
        <FinalScene />
      </div>
    </div>
  );
}
