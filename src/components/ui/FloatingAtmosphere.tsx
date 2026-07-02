"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FloatingAtmosphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const orbs = gsap.utils.toArray(".atmos-orb") as HTMLElement[];

    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2
      });

      gsap.to(orb, {
        opacity: "random(0.05, 0.15)",
        scale: "random(0.8, 1.2)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Warm Brass Orb - Reduced blur for GPU performance */}
      <div className="atmos-orb absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-luxury-brass/5 blur-[100px] rounded-full will-change-transform" />

      {/* Soft Ivory Orb */}
      <div className="atmos-orb absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-white/5 blur-[80px] rounded-full will-change-transform" />

      {/* Deep Shadow Orb */}
      <div className="atmos-orb absolute top-[60%] left-[50%] w-[700px] h-[700px] bg-black/30 blur-[120px] rounded-full will-change-transform" />

      {/* Micro Dust Particles (Mockup with CSS) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}
