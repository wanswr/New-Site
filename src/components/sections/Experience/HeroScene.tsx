"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function HeroScene() {
  return (
    <div id="hero-scene" className="absolute inset-0 w-full h-full pointer-events-auto bg-premium-white">
      <div id="hero-bg-wrapper" className="relative w-full h-full overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Luxury Architectural Interior"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Subtle dynamic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div id="hero-content" className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <div className="overflow-hidden mb-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.8em] text-premium-brass animate-fade-in">
            PotolokBel • Bespoke Ceilings
          </p>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-title text-5xl md:text-[10vw] font-serif text-center leading-[0.9] tracking-tighter">
            Architectural <br />
            <span className="italic text-premium-ivory/90">Elegance</span>
          </h1>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center opacity-60">
           <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-premium-brass to-transparent animate-pulse" />
           <span className="text-[8px] uppercase tracking-[0.5em] mt-4">Scroll to explore</span>
        </div>
      </div>

      {/* Ceiling Detail Scene (Nested Narrative) */}
      <div id="ceiling-detail" className="absolute inset-0 opacity-0 pointer-events-none">
        <Image
          src={IMAGES.detail}
          alt="Bespoke Shadow Gap Detail"
          fill
          className="object-cover"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
           <div className="max-w-2xl mx-auto">
             <span className="text-premium-brass text-xs uppercase tracking-[0.4em] mb-4 block">The Detail Standard</span>
             <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">Mastery in Every Line</h2>
             <div className="h-[1px] w-24 bg-premium-brass mx-auto mb-6" />
             <p className="text-premium-grey text-sm md:text-base uppercase tracking-widest leading-relaxed">
               Shadow Profile • Magnetic Tracks • Seamless Flow
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}
