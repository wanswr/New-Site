"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-premium-white">
      {IMAGES.portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-project absolute inset-0 w-full h-full will-change-transform"
          style={{ clipPath: index === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)', zIndex: index + 1 }}
        >
          {/* Minimalist Grid Layout */}
          <div className="relative w-full h-full grid grid-cols-12 grid-rows-12">

            {/* Main Image - Offset from grid for air */}
            <div className="project-image-wrapper col-start-2 col-end-12 row-start-2 row-end-11 md:col-start-3 md:col-end-10 md:row-start-2 md:row-end-12 relative overflow-hidden shadow-2xl">
              <Image
                src={project.url}
                alt={project.title}
                fill
                className="object-cover"
                quality={100}
                sizes="80vw"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>

            {/* Editorial Content Layer */}
            <div className="col-start-2 col-end-12 row-start-11 row-end-13 md:col-start-10 md:col-end-13 md:row-start-4 md:row-end-10 flex flex-col justify-center items-start md:items-start z-10 md:-ml-24">
               <div className="overflow-hidden mb-6">
                 <span className="project-number block text-premium-brass text-xs md:text-sm tracking-[0.5em] font-bold">
                    GALLERY {String(index + 1).padStart(2, '0')}
                 </span>
               </div>

               <div className="overflow-hidden mb-8">
                 <h3 className="project-title text-3xl md:text-6xl font-serif text-premium-graphite leading-[1.1]">
                   {project.title.split(' • ')[0]} <br />
                   <span className="italic text-premium-brass/80 text-2xl md:text-4xl">{project.title.split(' • ')[1]}</span>
                 </h3>
               </div>

               <div className="overflow-hidden">
                 <p className="project-meta text-[10px] md:text-xs text-premium-graphite/40 tracking-[0.3em] uppercase leading-loose border-l border-premium-brass pl-6">
                    Material Excellence <br />
                    System: {project.category} <br />
                    Vintage: {project.year}
                 </p>
               </div>
            </div>

            {/* Vertical Label - Zaha Hadid style element */}
            <div className="hidden md:block absolute left-12 top-1/2 -rotate-90 origin-left">
               <span className="text-[8px] uppercase tracking-[1em] text-premium-graphite/20">Bespoke Architectural Surface • Moscow</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
