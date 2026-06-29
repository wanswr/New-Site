"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-black">
      {IMAGES.portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-project absolute inset-0 w-full h-full will-change-transform bg-black"
          style={{
            zIndex: index + 1,
            pointerEvents: index === 0 ? 'auto' : 'none'
          }}
        >
          {/* Spatial Composition */}
          <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-24 overflow-y-auto md:overflow-hidden scrollbar-hide">

            {/* Massive Perspective Image */}
            <div className="project-image-wrapper relative w-full h-[50vh] md:h-[70vh] max-w-6xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] shrink-0">
              <Image
                src={project.url}
                alt={project.title}
                fill
                className="object-cover object-center"
                quality={90}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
            </div>

            {/* Floating Editorial Layer */}
            <div className="relative md:absolute mt-8 md:mt-0 md:bottom-32 md:left-32 z-10 w-full md:max-w-2xl md:right-auto">
               <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8 overflow-hidden">
                 <div className="w-8 md:w-12 h-[1px] bg-premium-brass/50" />
                 <span className="project-number block text-premium-brass text-[10px] tracking-[0.8em]">
                    OBJECT {String(index + 1).padStart(2, '0')}
                 </span>
               </div>

               <div className="mb-6 md:mb-12">
                 <h3 className="project-title text-[clamp(2rem,8vw,6rem)] font-serif text-white leading-[0.85] tracking-tighter">
                   {project.title.split(' • ')[0]} <br />
                   <span className="italic text-premium-brass/80 text-[clamp(1.2rem,4vw,3rem)]">{project.title.split(' • ')[1]}</span>
                 </h3>
               </div>

               <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-6 md:pt-12 mb-12 md:mb-0">
                 <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-widest text-premium-brass">Локация</span>
                    <p className="text-xs uppercase tracking-widest text-premium-grey">Москва</p>
                 </div>
                 <div className="space-y-2 text-right">
                    <span className="text-[8px] uppercase tracking-widest text-premium-brass">Реализация</span>
                    <p className="text-xs uppercase tracking-widest text-premium-grey">{project.year}</p>
                 </div>
               </div>
            </div>

            {/* Subtle floating metadata */}
            <div className="absolute top-12 right-12 hidden md:block">
               <p className="text-[7px] uppercase tracking-[1em] text-white/20 rotate-90 origin-right">
                 Architectural Excellence • Bespoke Surfaces
               </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
