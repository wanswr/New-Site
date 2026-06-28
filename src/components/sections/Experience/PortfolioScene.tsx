"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full opacity-0 pointer-events-none overflow-hidden">
      {IMAGES.portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-project absolute inset-0 w-full h-full will-change-transform"
          style={{ clipPath: index === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)', zIndex: index + 1 }}
        >
          <div className="project-image-wrapper relative w-full h-full scale-110 overflow-hidden">
            <Image
              src={project.url}
              alt={project.title}
              fill
              className="object-cover"
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 md:p-24">
            <div className="overflow-hidden mb-4">
              <span className="project-number block text-premium-brass uppercase tracking-[0.8em] text-[10px] md:text-xs">
                {String(index + 1).padStart(2, '0')} / {String(IMAGES.portfolio.length).padStart(2, '0')}
              </span>
            </div>

            <div className="overflow-hidden text-center max-w-4xl">
              <h3 className="project-title text-4xl md:text-7xl lg:text-8xl font-serif leading-tight">
                {project.title.split(' • ').map((part, i) => (
                  <span key={i} className="block">{part}</span>
                ))}
              </h3>
            </div>

            <div className="overflow-hidden mt-8 md:mt-12">
               <span className="project-meta block text-premium-grey uppercase tracking-widest text-[10px] md:text-xs border-t border-white/10 pt-4">
                 Design Experience • {project.year} • {project.category}
               </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
