"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IMAGES } from "@/constants/content";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{x: string, y: string}[]>([]);

  useEffect(() => {
    setCoords([...Array(6)].map(() => ({
      x: (Math.random() * 1000).toFixed(2),
      y: (Math.random() * 1000).toFixed(2)
    })));
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%", // Long enough for 5 stages
        scrub: 1,
        pin: true,
      }
    });

    // Initial state
    gsap.set(".process-stage", { opacity: 0, y: 50 });
    gsap.set(".laser-line", { scaleX: 0, opacity: 0 });
    gsap.set(".marking-dot", { scale: 0, opacity: 0 });
    gsap.set(".profile-line", { scaleX: 0, opacity: 0 });

    // 1. Stage: Laser
    tl.to(".process-stage-1", { opacity: 1, y: 0, duration: 0.5 });
    tl.to(".laser-line", { scaleX: 1, opacity: 1, duration: 1, ease: "power2.inOut" }, 0.2);
    tl.to(".laser-line", { top: "30%", duration: 1.5, repeat: 1, yoyo: true, ease: "sine.inOut" }, 0.5);
    tl.to(".process-stage-1", { opacity: 0, y: -20, duration: 0.5 }, 1.5);

    // 2. Stage: Marking
    tl.to(".process-stage-2", { opacity: 1, y: 0, duration: 0.5 }, 2);
    tl.to(".marking-dot", { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 }, 2.2);
    tl.to(".marking-coords", { opacity: 0.4, duration: 0.5 }, 2.5);
    tl.to(".process-stage-2", { opacity: 0, y: -20, duration: 0.5 }, 3.5);

    // 3. Stage: Mounting
    tl.to(".process-stage-3", { opacity: 1, y: 0, duration: 0.5 }, 4);
    tl.to(".profile-line", { scaleX: 1, opacity: 1, duration: 1, stagger: 0.2 }, 4.2);
    tl.to(".process-stage-3", { opacity: 0, y: -20, duration: 0.5 }, 5.5);

    // 4. Stage: Stretching
    tl.to(".process-stage-4", { opacity: 1, y: 0, duration: 0.5 }, 6);
    tl.to(".canvas-overlay", { opacity: 0, duration: 1.5 }, 6.2); // Reveal the perfect image
    tl.to(".process-stage-4", { opacity: 0, y: -20, duration: 0.5 }, 7.5);

    // 5. Stage: Light
    tl.to(".process-stage-5", { opacity: 1, y: 0, duration: 0.5 }, 8);
    tl.to(".final-illumination", { opacity: 1, duration: 1 }, 8.2);

    // Background scaling throughout
    tl.to(".process-bg", { scale: 1.1, duration: 10, ease: "none" }, 0);

  }, { scope: containerRef });

  return (
    <div id="process-scene" ref={containerRef} className="relative w-full h-screen bg-luxury-bg overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 process-bg">
        <Image
          src={IMAGES.details.shadow}
          alt="Process background"
          fill
          className="object-cover grayscale opacity-40"
        />
        {/* Stretching Canvas Overlay (blurred/textured) */}
        <div className="canvas-overlay absolute inset-0 bg-luxury-bg/80 backdrop-blur-md z-10" />

        {/* Final Illumination Layer */}
        <div className="final-illumination absolute inset-0 bg-luxury-brass/5 z-15 opacity-0" />
      </div>

      {/* FX Layer: Laser */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="laser-line absolute top-1/2 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] blur-[0.5px]" />
      </div>

      {/* FX Layer: Marking */}
      <div className="absolute inset-0 z-20 pointer-events-none p-24">
        {coords.map((coord, i) => (
          <div key={i} className={`marking-dot absolute w-2 h-2 bg-luxury-brass rounded-full`} style={{
            top: `${20 + i * 10}%`,
            left: `${15 + (i % 3) * 30}%`
          }}>
            <span className="marking-coords absolute top-4 left-4 text-[8px] font-mono text-luxury-brass opacity-0">
              X: {coord.x} Y: {coord.y}
            </span>
          </div>
        ))}
      </div>

      {/* FX Layer: Mounting */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="profile-line absolute top-[10%] left-[10%] right-[10%] h-[1px] bg-white/40 origin-left" />
        <div className="profile-line absolute bottom-[10%] left-[10%] right-[10%] h-[1px] bg-white/40 origin-right" />
      </div>

      {/* Content: Stage Titles */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="process-stage process-stage-1 absolute">
          <span className="text-red-500 text-[10px] uppercase tracking-[1em] mb-4 block font-bold">Этап 01</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter uppercase">Лазерное нивелирование</h2>
        </div>
        <div className="process-stage process-stage-2 absolute">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] mb-4 block font-bold">Этап 02</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter uppercase">Архитектурная разметка</h2>
        </div>
        <div className="process-stage process-stage-3 absolute">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] mb-4 block font-bold">Этап 03</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter uppercase">Монтаж профилей</h2>
        </div>
        <div className="process-stage process-stage-4 absolute">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] mb-4 block font-bold">Этап 04</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter uppercase">Натяжение полотна</h2>
        </div>
        <div className="process-stage process-stage-5 absolute">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] mb-4 block font-bold">Этап 05</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter uppercase italic">Запуск атмосферы</h2>
        </div>
      </div>

      {/* Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-luxury-bg z-25 pointer-events-none opacity-60" />
    </div>
  );
}
