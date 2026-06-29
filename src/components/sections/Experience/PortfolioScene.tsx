"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-premium-white">
      {IMAGES.portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-project absolute inset-0 w-full h-full will-change-transform bg-premium-white"
          style={{
            zIndex: index + 1,
            pointerEvents: index === 0 ? 'auto' : 'none'
          }}
        >
          {/* Spatial Composition - Light Luxury Editorial */}
          <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 items-center gap-8 p-6 md:p-20 overflow-hidden">

            {/* Left Column: Context & Metadata */}
            <div className="hidden md:flex md:col-span-3 flex-col justify-center space-y-12 h-full border-r border-premium-brass/10 pr-8">
               <div className="overflow-hidden">
                 <span className="project-number block text-premium-brass text-[10px] tracking-[0.8em] mb-4">
                    ОБЪЕКТ {String(index + 1).padStart(2, '0')}
                 </span>
                 <div className="w-12 h-[1px] bg-premium-brass" />
               </div>

               <div className="space-y-6">
                 <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-premium-brass font-bold">Детали проекта</span>
                    <p className="text-[10px] text-premium-graphite/60 leading-relaxed max-w-[150px]">
                      Безупречная интеграция световых решений и теневых профилей для современных интерьеров.
                    </p>
                 </div>
                 <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-[0.4em] text-premium-brass font-bold">Категория</span>
                    <p className="text-[10px] text-premium-graphite/60">{project.category}</p>
                 </div>
               </div>
            </div>

            {/* Center Column: Image Container (Fixed Ratios) */}
            <div className="col-span-1 md:col-span-6 flex flex-col items-center justify-center h-full">
              <div className="project-image-wrapper relative w-full md:w-[85%] aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl bg-premium-ivory">
                <Image
                  src={project.url}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Mobile Mobile Text */}
              <div className="md:hidden mt-8 text-center space-y-4">
                 <h3 className="text-2xl font-serif text-premium-graphite italic">{project.title}</h3>
                 <p className="text-[10px] tracking-widest text-premium-brass uppercase">2024 • Москва</p>
              </div>
            </div>

            {/* Right Column: Title & Main Info */}
            <div className="hidden md:flex md:col-span-3 flex-col justify-center space-y-12 h-full pl-8">
               <div className="overflow-hidden">
                 <h3 className="project-title text-[clamp(2.5rem,4vw,5rem)] font-serif text-premium-graphite leading-[0.9] tracking-tighter">
                   {project.title.split(' • ')[0]} <br />
                   <span className="italic text-premium-brass text-[0.6em] tracking-normal">
                     {project.title.split(' • ')[1]}
                   </span>
                 </h3>
               </div>

               <div className="grid grid-cols-1 gap-8 border-t border-premium-brass/20 pt-8">
                 <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-widest text-premium-brass">Локация</span>
                    <p className="text-xs uppercase tracking-widest text-premium-graphite">Москва</p>
                 </div>
                 <div className="space-y-2">
                    <span className="text-[8px] uppercase tracking-widest text-premium-brass">Реализация</span>
                    <p className="text-xs uppercase tracking-widest text-premium-graphite font-bold">{project.year}</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
