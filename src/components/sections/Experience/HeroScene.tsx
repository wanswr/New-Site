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
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 2,
      ease: "power4.out",
      delay: 0.5
    });

    gsap.from(".hero-subtext", {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power3.out",
      delay: 1.5
    });

  }, { scope: containerRef });

  return (
    <div id="hero-scene" ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto bg-premium-white">
      <div id="hero-bg-wrapper" className="relative w-full h-full overflow-hidden will-change-transform">
        <Image
          src={IMAGES.hero}
          alt="Luxury Architectural Interior"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Lighter gradient for clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-premium-white/90 via-transparent to-transparent" />
      </div>

      <div id="hero-content" className="absolute inset-0 flex flex-col items-center justify-center text-premium-graphite px-6">
        <div className="hero-subtext overflow-hidden mb-8">
          <p className="text-[10px] md:text-xs uppercase tracking-[1em] text-premium-brass">
            PotolokBel • Bespoke Ceilings
          </p>
        </div>

        <div className="overflow-hidden py-4">
          <h1
            ref={titleRef}
            className="hero-title text-[clamp(2.5rem,12vw,12rem)] font-serif text-center leading-[0.85] tracking-tighter will-change-transform text-premium-graphite"
          >
            Архитектура <br />
            <span className="italic text-premium-brass/80">Света</span>
          </h1>
        </div>

        <div className="hero-subtext mt-8 md:mt-12 max-w-lg text-center space-y-8">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-premium-graphite/60 leading-relaxed font-bold">
            Эстетика безупречности в каждом миллиметре пространства
          </p>

          <div className="flex justify-center">
            <button className="group relative px-10 py-4 bg-premium-brass overflow-hidden shadow-lg hover:shadow-premium-brass/20 transition-all duration-500 cursor-none">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] text-black font-bold">Заказать расчет</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-16 flex flex-col items-center opacity-60">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-premium-brass to-transparent" />
           <span className="text-[7px] uppercase tracking-[0.6em] mt-6 text-premium-graphite font-bold">Листайте для погружения</span>
        </div>
      </div>

      {/* Ceiling Detail Scene (Nested Narrative) */}
      <div id="ceiling-detail" className="absolute inset-0 opacity-0 pointer-events-none will-change-transform bg-premium-white">
        <Image
          src={IMAGES.detail}
          alt="Bespoke Shadow Gap Detail"
          fill
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-premium-white/80 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
           <div className="max-w-4xl">
             <span className="text-premium-brass text-[10px] uppercase tracking-[0.6em] mb-8 block">Стандарт</span>
             <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-serif text-premium-graphite mb-6 md:mb-10 leading-[0.9]">Чистота линий</h2>
             <div className="h-[1px] w-24 md:w-32 bg-premium-brass/30 mx-auto mb-6 md:mb-10" />
             <p className="text-premium-graphite/60 text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] leading-loose max-w-2xl mx-auto font-bold">
               Теневой профиль • Магнитные треки • Световая архитектура
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
