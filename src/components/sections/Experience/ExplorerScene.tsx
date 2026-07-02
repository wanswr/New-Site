"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cinematicReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const TYPES = [
  { id: 'matte', title: 'Матовый', image: IMAGES.types.matte, desc: 'Замена классической штукатурке. Не трескается, не желтеет и выглядит идеально ровным десятилетиями.' },
  { id: 'shadow', title: 'Теневой', image: IMAGES.types.shadow, desc: 'Архитектурный стандарт. Создает тонкий зазор между стеной и потолком, избавляя от дешевых пластиковых карнизов.' },
  { id: 'floating', title: 'Световой', image: IMAGES.types.floating, desc: 'Потолок как искусство. Интегрированное освещение, которое заменяет громоздкие люстры и создает объем.' }
];

export default function ExplorerScene() {
  const [activeType, setActiveType] = useState(TYPES[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Entry animation
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    .add(cinematicReveal(".explorer-reveal"));

    // Smooth transition between types
    const transitionType = () => {
      gsap.fromTo([bgRef.current, thumbRef.current],
        { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(".explorer-desc",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
    };

    transitionType();

  }, { scope: containerRef, dependencies: [activeType] });

  return (
    <div id="explorer-scene" ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center bg-luxury-bg overflow-hidden py-24 md:py-64">
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={bgRef}
          className="absolute inset-0 opacity-35"
        >
          <Image
            src={activeType.image}
            alt={activeType.title}
            fill
            className="object-cover object-center grayscale-[0.3]"
            quality={95}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="explorer-reveal text-luxury-brass text-[10px] uppercase tracking-[0.8em] mb-12 block font-bold">
            Философия Пространства
          </span>

          <div className="space-y-4 mb-16 explorer-reveal">
            {TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type)}
                className="group flex items-center gap-8 text-left cursor-none"
              >
                <div className={`h-[1px] transition-all duration-1000 bg-luxury-brass ${
                  activeType.id === type.id ? 'w-20' : 'w-0 group-hover:w-10'
                }`} />
                <span className={`text-3xl md:text-5xl font-serif transition-all duration-700 ${
                  activeType.id === type.id ? 'text-luxury-text' : 'text-luxury-text/20 hover:text-luxury-text/40'
                }`}>
                  {type.title}
                </span>
              </button>
            ))}
          </div>

          <div className="explorer-desc max-w-md border-l border-luxury-brass/30 pl-8 md:pl-12 py-2 explorer-reveal">
            <p className="text-luxury-text-muted text-sm md:text-base tracking-widest leading-relaxed font-medium">
              {activeType.desc}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-end explorer-reveal">
           <div className="relative w-80 h-[500px] border border-luxury-brass/20 overflow-hidden">
             <div
               ref={thumbRef}
               className="absolute inset-0"
             >
               <Image
                 src={activeType.image}
                 alt={activeType.title}
                 fill
                 className="object-cover"
               />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
