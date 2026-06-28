"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { ChevronDown } from "lucide-react";

export default function HeroScene() {
  return (
    <div id="hero-scene" className="absolute inset-0 w-full h-full">
      <div id="hero-bg-wrapper" className="relative w-full h-full overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Premium Interior"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div id="hero-content" className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-6xl md:text-8xl font-serif mb-6 text-center leading-tight">
          Искусство <br /> <span className="text-premium-brass">вертикали</span>
        </h1>
        <p className="text-lg md:text-xl uppercase tracking-[0.5em] text-premium-grey opacity-80">
          PotolokBel Premium
        </p>

        <div className="absolute bottom-12 flex flex-col items-center animate-bounce opacity-40">
           <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Листайте вниз</span>
           <ChevronDown size={20} />
        </div>
      </div>

      <div id="ceiling-detail" className="absolute inset-0 opacity-0 pointer-events-none">
        <Image
          src={IMAGES.detail}
          alt="Ceiling Detail"
          fill
          className="object-cover scale-150"
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
           <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Безупречность в деталях</h2>
           <p className="text-premium-brass uppercase tracking-widest">Теневой профиль • Световые линии</p>
        </div>
      </div>
    </div>
  );
}
