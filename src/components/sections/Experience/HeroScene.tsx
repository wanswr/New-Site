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
      y: 20,
      stagger: 0.02,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    });

    gsap.from(".hero-subtext", {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: "power2.out",
      delay: 1.2
    });

  }, { scope: containerRef });

  return (
    <div id="hero-scene" ref={containerRef} className="relative w-full h-screen flex items-center justify-center bg-luxury-bg overflow-hidden">
      <div id="hero-bg-wrapper" className="absolute inset-0 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Luxury Architectural Interior"
          fill
          className="object-cover object-center opacity-40 grayscale-[0.2]"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-bg/60 to-luxury-bg" />
      </div>

      <div id="hero-content" className="relative z-10 flex flex-col items-center justify-center text-luxury-text px-6 max-w-7xl mx-auto w-full">
        <div className="hero-subtext overflow-hidden mb-8 md:mb-12">
          <p className="text-[10px] md:text-xs uppercase tracking-[1em] text-luxury-brass font-bold">
            PotolokBel • Architectural Surfaces
          </p>
        </div>

        <div className="overflow-hidden py-4">
          <h1
            ref={titleRef}
            className="hero-title text-[clamp(2rem,10vw,8rem)] font-serif text-center leading-[0.9] tracking-tighter text-luxury-text"
          >
            Архитектура <br />
            <span className="italic text-luxury-brass/80 font-normal">Света</span>
          </h1>
        </div>

        <div className="hero-subtext mt-8 md:mt-12 max-w-2xl text-center space-y-12">
          <p className="text-[11px] md:text-sm uppercase tracking-[0.4em] text-luxury-text-muted leading-relaxed font-medium">
            Эстетика безупречности в каждом миллиметре пространства
          </p>

          <div className="flex justify-center">
            <button className="group relative px-10 py-4 bg-transparent border border-luxury-brass/30 overflow-hidden transition-all duration-700 hover:border-luxury-brass cursor-none">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] text-luxury-text group-hover:text-black transition-colors duration-700 font-bold">
                Начать погружение
              </span>
              <div className="absolute inset-0 bg-luxury-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center opacity-30">
           <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-luxury-brass to-transparent" />
           <span className="text-[7px] uppercase tracking-[0.8em] mt-4 text-luxury-text-muted font-bold">листайте вниз</span>
        </div>
      </div>
    </div>
  );
}
