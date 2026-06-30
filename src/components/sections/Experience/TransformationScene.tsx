"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ROOMS = [
  { id: "kitchen", title: "Кухня", image: "/images/projects/kitchen-tracks.png" },
  { id: "living", title: "Гостиная", image: "/images/projects/living-spots.png" },
  { id: "bedroom", title: "Спальня", image: "/images/projects/starry-sky.png" },
  { id: "bathroom", title: "Ванная", image: "/images/projects/interior-demo.png" },
];

export default function TransformationScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // 100% per room transition roughly
        scrub: 1,
        pin: true,
      },
    });

    const layers = gsap.utils.toArray(".room-layer") as HTMLElement[];
    const titles = gsap.utils.toArray(".room-title") as HTMLElement[];

    layers.forEach((layer, i) => {
      // Slow zoom for each room
      gsap.to(layer.querySelector("img"), {
        scale: 1.15,
        x: i % 2 === 0 ? 20 : -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
        }
      });

      // Add will-change for performance
      gsap.set(layer, { willChange: "opacity" });
      gsap.set(layer.querySelector("img"), { willChange: "transform" });

      if (i > 0) {
        // Dissolve in
        tl.fromTo(layer,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          i - 0.5
        );

        // Title transition
        const split = new SplitType(titles[i], { types: "chars" });
        tl.fromTo(split.chars,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.02 },
          i - 0.2
        );

        // Previous title dissolve
        const prevSplit = new SplitType(titles[i-1], { types: "chars" });
        tl.to(prevSplit.chars,
          { opacity: 0, y: -30, filter: "blur(10px)", duration: 0.5, stagger: 0.01 },
          i - 0.2
        );
      } else {
        // Initial title
        gsap.set(titles[0], { opacity: 1, y: 0 });
      }
    });

    // Light movement effect (global over the pinned section)
    tl.to(".transformation-light-sweep", {
      xPercent: 100,
      ease: "none",
      duration: 4
    }, 0);

    // Progress Line animation
    tl.to(".transformation-progress-line", {
      height: "100%",
      ease: "none",
      duration: 4
    }, 0);

  }, { scope: containerRef });

  return (
    <div id="transformation-scene" ref={containerRef} className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {/* Transformation Layers */}
      <div className="absolute inset-0">
        {ROOMS.map((room, i) => (
          <div
            key={room.id}
            className="room-layer absolute inset-0 w-full h-full"
            style={{ zIndex: i }}
          >
            <Image
              src={room.image}
              alt={room.title}
              fill
              className="object-cover grayscale-[0.3]"
              priority={i === 0}
              quality={90}
            />
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-60" />
          </div>
        ))}
      </div>

      {/* Sweeping Light Effect */}
      <div className="transformation-light-sweep absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-20" />

      {/* Titles */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center pointer-events-none px-6">
        <div className="overflow-hidden py-4">
          <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold mb-8 block text-center opacity-40">
            Трансформация Пространства
          </span>
          {ROOMS.map((room) => (
            <h2
              key={room.id}
              className="room-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter text-center opacity-0"
            >
              {room.title}
            </h2>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-12 right-12 md:right-24 z-30 flex flex-col items-end gap-4 opacity-30">
        <div className="h-24 w-[1px] bg-white/10 relative">
           <div className="absolute top-0 left-0 w-full bg-luxury-brass transformation-progress-line" style={{ height: '0%' }} />
        </div>
        <span className="text-[7px] uppercase tracking-[0.4em] text-luxury-text font-bold">scene 03</span>
      </div>
    </div>
  );
}
