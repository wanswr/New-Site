"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

import HeroScene from "./HeroScene";

// Lazy load sections for better performance
const BeforeAfterScene = dynamic(() => import("./BeforeAfterScene"), { ssr: false });
const PortfolioScene = dynamic(() => import("./PortfolioScene"), { ssr: false });
const ProcessScene = dynamic(() => import("./ProcessScene"), { ssr: false });
const CalculatorScene = dynamic(() => import("./CalculatorScene"), { ssr: false });
const FAQScene = dynamic(() => import("./FAQScene"), { ssr: false });
const FinalScene = dynamic(() => import("./FinalScene"), { ssr: false });
const AboutScene = dynamic(() => import("./AboutScene"), { ssr: false });

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
        ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="main-experience" className="relative w-full bg-[#050505]">
      {/* 1. HERO */}
      <HeroScene />

      {/* 2. PAIN POINTS */}
      <section id="pains-section" className="relative w-full py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold mb-4">Проблемы</span>
            <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter max-w-3xl">
              Ремонт без стресса <br /> <span className="italic text-luxury-brass/80">это реальность</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
              <div className="text-luxury-brass/40 text-4xl font-serif mb-6">01</div>
              <h3 className="text-2xl font-serif text-luxury-text mb-4">Чистота</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed uppercase">
                Никакой строительной пыли на мебели. Используем инструмент с пылеудалением.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
              <div className="text-luxury-brass/40 text-4xl font-serif mb-6">02</div>
              <h3 className="text-2xl font-serif text-luxury-text mb-4">Честная цена</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed uppercase">
                Смета не меняется в процессе. Вы платите ровно столько, сколько указано в договоре.
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
              <div className="text-luxury-brass/40 text-4xl font-serif mb-6">03</div>
              <h3 className="text-2xl font-serif text-luxury-text mb-4">Надежность</h3>
              <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed uppercase">
                Только проверенные мастера. Гарантируем идеальные углы и ровные линии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / WHY US */}
      <section id="about-section" className="relative w-full py-24 md:py-48 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div>
                <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold mb-4">Почему мы</span>
                <h2 className="text-4xl md:text-6xl font-serif text-luxury-text tracking-tighter mb-8">
                   Результат, которым <br /> <span className="italic text-luxury-brass">хочется гордиться</span>
                </h2>
                <div className="space-y-8 mt-12">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-luxury-brass/20 flex items-center justify-center text-luxury-brass font-bold">✓</div>
                      <p className="text-luxury-text-muted text-sm uppercase tracking-widest leading-relaxed">Любые виды сложности: от простых матовых до световых линий и теневых профилей.</p>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-luxury-brass/20 flex items-center justify-center text-luxury-brass font-bold">✓</div>
                      <p className="text-luxury-text-muted text-sm uppercase tracking-widest leading-relaxed">Бесплатный выезд замерщика и консультация по световому дизайну в день обращения.</p>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-luxury-brass/20 flex items-center justify-center text-luxury-brass font-bold">✓</div>
                      <p className="text-luxury-text-muted text-sm uppercase tracking-widest leading-relaxed">Договор и официальная гарантия 15 лет на материалы и 3 года на монтаж.</p>
                   </div>
                </div>
             </div>
             <div className="relative aspect-square bg-[#111] overflow-hidden border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
                  alt="Ceiling detail"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
             </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF */}
      <section id="portfolio-section">
        <BeforeAfterScene />
        <PortfolioScene />
      </section>

      {/* 5. EXPERTISE */}
      <AboutScene />

      {/* 6. PROCESS */}
      <section id="process-section">
        <ProcessScene />
      </section>

      {/* 7. CONVERSION */}
      <section id="calculator-section">
        <CalculatorScene />
      </section>

      <section id="reviews-section" className="bg-[#080808]">
        <FAQScene />
      </section>

      <FinalScene />
    </div>
  );
}
