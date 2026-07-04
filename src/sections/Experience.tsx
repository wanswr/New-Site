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
const AboutScene = dynamic(() => import("./AboutScene"), { ssr: false });
const PortfolioScene = dynamic(() => import("./PortfolioScene"), { ssr: false });
const ProcessScene = dynamic(() => import("./ProcessScene"), { ssr: false });
const CalculatorScene = dynamic(() => import("./CalculatorScene"), { ssr: false });
const FAQScene = dynamic(() => import("./FAQScene"), { ssr: false });
const FinalScene = dynamic(() => import("./FinalScene"), { ssr: false });

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      // CAMERA RIG - Spatial Journey
      tl.set(worldRef.current, { z: 0, x: 0, y: 0, rotationY: 0, rotationX: 0 });

      // 1. Pan to Pains
      tl.to(worldRef.current, {
        x: "-100vw",
        z: 400,
        rotationY: -15,
        ease: "power2.inOut",
        duration: 2
      });
      tl.from(".pain-card", { opacity: 0, scale: 0.8, stagger: 0.2, duration: 1 }, "-=1");

      // 2. Pan to About
      tl.to(worldRef.current, {
        y: "-100vh",
        z: 800,
        rotationY: 0,
        rotationX: 10,
        ease: "power2.inOut",
        duration: 2
      });

      // 3. Zoom into Portfolio
      tl.to(worldRef.current, {
        x: "0",
        y: "-200vh",
        z: 1500,
        rotationX: 0,
        ease: "power2.inOut",
        duration: 2
      });

      // 4. Pan to Process
      tl.to(worldRef.current, {
        x: "100vw",
        y: "-200vh",
        z: 1000,
        rotationY: 15,
        ease: "power2.inOut",
        duration: 2
      });

      // 5. Land on Conversion
      tl.to(worldRef.current, {
        x: "0",
        y: "-300vh",
        z: 0,
        rotationY: 0,
        rotationX: 0,
        ease: "power3.inOut",
        duration: 3
      });

    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="cinematic-canvas" className="relative w-full h-screen bg-[#050505] overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay bg-noise" />
      <FloatingAtmosphere />

      <div
        ref={worldRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
      >
        {/* HERO */}
        <div className="absolute inset-0 w-full h-full z-50">
          <HeroScene />
        </div>

        {/* PAIN POINTS */}
        <div
            className="absolute top-0 left-full w-full h-full flex items-center justify-center z-40 bg-[#080808]/80 backdrop-blur-3xl"
            style={{ transform: "translateZ(-400px)" }}
        >
          <PainPointsLayer />
        </div>

        {/* ABOUT */}
        <div
            className="absolute top-full left-full w-full h-full z-30"
            style={{ transform: "translateZ(-800px)" }}
        >
          <AboutScene />
        </div>

        {/* PORTFOLIO */}
        <div
            className="absolute top-[200vh] left-0 w-full h-full z-20"
            style={{ transform: "translateZ(-1500px)" }}
        >
          <PortfolioScene />
        </div>

        {/* PROCESS */}
        <div
            className="absolute top-[200vh] left-[-100vw] w-full h-full z-25"
            style={{ transform: "translateZ(-1000px)" }}
        >
          <ProcessScene />
        </div>

        {/* CONVERSION */}
        <div className="absolute top-[300vh] left-0 w-full h-full z-10">
          <div className="w-full h-full overflow-y-auto no-scrollbar bg-[#050505]">
             <CalculatorScene />
             <FAQScene />
             <FinalScene />
          </div>
        </div>
      </div>
    </div>
  );
}

function PainPointsLayer() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center lg:text-left">
                <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold mb-4">Почему не стоит экономить</span>
                <h2 className="text-4xl md:text-8xl font-serif text-luxury-text tracking-tighter leading-[1.1] whitespace-nowrap">
                    Ремонт <span className="italic text-luxury-brass">без стресса</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { t: "Без грязи", d: "Пылесос на каждом перфораторе. Чистота в приоритете." },
                    { t: "Без доплат", d: "Честная смета сразу. Договор — это закон." },
                    { t: "Без риска", d: "Гарантия 15 лет на полотно. Собственный сервис." }
                ].map((item, i) => (
                    <div key={i} className="pain-card p-12 border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-luxury-brass/30 transition-all duration-700">
                        <div className="text-luxury-brass/20 text-6xl font-serif mb-8 group-hover:text-luxury-brass transition-colors duration-700">0{i+1}</div>
                        <h3 className="text-2xl font-serif text-luxury-text mb-6 tracking-widest uppercase">{item.t}</h3>
                        <p className="text-luxury-text-muted text-xs tracking-[0.3em] leading-relaxed uppercase">{item.d}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
