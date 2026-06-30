"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function NarrativeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true
      }
    });

    // 1. Camera Zoom to Ceiling + Light Brightens
    tl.to(videoRef.current, {
      scale: 2.5,
      yPercent: 30, // Focus on upper part
      filter: "brightness(1.5) grayscale(0)",
      duration: 2
    }, 0);

    // 2. Spatial Annotations Sequence
    const labels = [
      "#label-1", "#label-2", "#label-3", "#label-4", "#label-5"
    ];

    labels.forEach((label, i) => {
      tl.fromTo(label,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
        i * 1 + 0.5
      );
      tl.to(label,
        { opacity: 0, y: -20, filter: "blur(5px)", duration: 0.5 },
        i * 1 + 1.2
      );
    });

  }, { scope: containerRef });

  return (
    <div id="narrative-scene" ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Background Interior Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[0.5]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-interior-design-of-a-living-room-with-a-fireplace-34538-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Spatial Labels */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <div id="label-1" className="absolute top-[20%] left-[30%] text-luxury-text">
           <span className="text-[10px] uppercase tracking-[0.8em] font-bold block mb-2 opacity-50">01</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter">Идеальная геометрия</h3>
        </div>
        <div id="label-2" className="absolute top-[30%] right-[25%] text-luxury-text text-right">
           <span className="text-[10px] uppercase tracking-[0.8em] font-bold block mb-2 opacity-50">02</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter">Премиальные материалы</h3>
        </div>
        <div id="label-3" className="absolute top-[15%] left-[50%] -translate-x-1/2 text-luxury-brass text-center">
           <span className="text-[10px] uppercase tracking-[0.8em] font-bold block mb-2 opacity-50 text-luxury-text">03</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter italic">Теневой профиль</h3>
        </div>
        <div id="label-4" className="absolute bottom-[40%] left-[20%] text-luxury-text">
           <span className="text-[10px] uppercase tracking-[0.8em] font-bold block mb-2 opacity-50">04</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter">Парящие линии</h3>
        </div>
        <div id="label-5" className="absolute top-[40%] right-[15%] text-luxury-brass text-right">
           <span className="text-[10px] uppercase tracking-[0.8em] font-bold block mb-2 opacity-50 text-luxury-text">05</span>
           <h3 className="text-3xl md:text-5xl font-serif tracking-tighter italic">Безупречный монтаж</h3>
        </div>
      </div>

      {/* Connection Line (Visual Guide) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
         <div className="w-[1px] h-24 bg-gradient-to-b from-luxury-brass to-transparent" />
      </div>
    </div>
  );
}
