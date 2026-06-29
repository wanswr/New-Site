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
    <div id="hero-scene" ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto bg-black">
      <div id="hero-bg-wrapper" className="relative w-full h-full overflow-hidden will-change-transform">
        <Image
          src={IMAGES.hero}
          alt="Luxury Architectural Interior"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Cinematic gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div id="hero-content" className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <div className="hero-subtext overflow-hidden mb-8">
          <p className="text-[10px] md:text-xs uppercase tracking-[1em] text-premium-brass/80">
            PotolokBel • Bespoke Ceilings
          </p>
        </div>

        <div className="overflow-hidden py-4">
          <h1
            ref={titleRef}
            className="hero-title text-[clamp(2.5rem,12vw,12rem)] font-serif text-center leading-[0.85] tracking-tighter will-change-transform"
          >
            Архитектура <br />
            <span className="italic text-premium-ivory/80">Света</span>
          </h1>
        </div>

        <div className="hero-subtext mt-8 md:mt-12 max-w-lg text-center">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-premium-grey leading-relaxed">
            Эстетика безупречности в каждом миллиметре пространства
          </p>
        </div>

        <div className="absolute bottom-16 flex flex-col items-center opacity-40">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-premium-brass to-transparent" />
           <span className="text-[7px] uppercase tracking-[0.6em] mt-6">Scroll to explore</span>
        </div>
      </div>

      {/* Ceiling Detail Scene (Nested Narrative) */}
      <div id="ceiling-detail" className="absolute inset-0 opacity-0 pointer-events-none will-change-transform">
        <Image
          src={IMAGES.detail}
          alt="Bespoke Shadow Gap Detail"
          fill
          className="object-cover"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
           <div className="max-w-4xl">
             <span className="text-premium-brass text-[10px] uppercase tracking-[0.6em] mb-8 block">The Standard</span>
             <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-serif text-white mb-6 md:mb-10 leading-[0.9]">Чистота линий</h2>
             <div className="h-[1px] w-24 md:w-32 bg-premium-brass/30 mx-auto mb-6 md:mb-10" />
             <p className="text-premium-grey text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] leading-loose max-w-2xl mx-auto">
               Теневой профиль • Магнитные треки • Световая архитектура
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
