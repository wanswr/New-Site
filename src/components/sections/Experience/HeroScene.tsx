"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    const split = new SplitType(titleRef.current, { types: "chars,words" });

    gsap.from(split.chars, {
      opacity: 0,
      z: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 3,
      ease: "expo.out",
      delay: 0.5
    });

    gsap.from(".hero-subtext", {
      opacity: 0,
      z: 50,
      duration: 2,
      ease: "power2.out",
      delay: 1.5
    });

  }, { scope: containerRef });

  return (
    <div id="hero-scene" ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto bg-luxury-bg overflow-hidden">
      <div id="hero-bg-wrapper" className="relative w-full h-full overflow-hidden will-change-transform">
        <Image
          src={IMAGES.hero}
          alt="Luxury Architectural Interior"
          fill
          className="object-cover object-center scale-110 opacity-40 grayscale-[0.2]"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-bg/60 to-luxury-bg" />
      </div>

      <div id="hero-content" className="absolute inset-0 flex flex-col items-center justify-center text-luxury-text px-6" style={{ transformStyle: 'preserve-3d' }}>
        <div className="hero-subtext overflow-hidden mb-12">
          <p className="text-[10px] md:text-xs uppercase tracking-[1.5em] text-luxury-brass font-bold">
            PotolokBel • Architectural Surfaces
          </p>
        </div>

        <div className="overflow-hidden py-6">
          <h1
            ref={titleRef}
            className="hero-title text-[clamp(2.5rem,14vw,14rem)] font-serif text-center leading-[0.8] tracking-tighter will-change-transform text-luxury-text"
          >
            Архитектура <br />
            <span className="italic text-luxury-brass/80">Света</span>
          </h1>
        </div>

        <div className="hero-subtext mt-12 md:mt-16 max-w-2xl text-center space-y-12">
          <p className="text-[12px] md:text-sm uppercase tracking-[0.6em] text-luxury-text-muted leading-relaxed font-medium">
            Эстетика безупречности в каждом миллиметре пространства
          </p>

          <div className="flex justify-center">
            <button className="group relative px-12 py-5 bg-transparent border border-luxury-brass/30 overflow-hidden transition-all duration-700 hover:border-luxury-brass cursor-none">
              <span className="relative z-10 text-[11px] uppercase tracking-[0.6em] text-luxury-text group-hover:text-black transition-colors duration-700 font-bold">
                Начать погружение
              </span>
              <div className="absolute inset-0 bg-luxury-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 flex flex-col items-center opacity-40">
           <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-luxury-brass to-transparent" />
           <span className="text-[8px] uppercase tracking-[1em] mt-8 text-luxury-text-muted font-bold">scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
