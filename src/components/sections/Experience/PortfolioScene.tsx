"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden bg-luxury-bg">
      {IMAGES.portfolio.map((project, index) => (
        <div
          key={index}
          className="portfolio-project absolute inset-0 w-full h-full will-change-transform bg-luxury-bg"
          style={{
            zIndex: index + 1,
            pointerEvents: index === 0 ? 'auto' : 'none'
          }}
        >
          {/* Narrative Composition - One Shot Flow */}
          <div className="relative w-full h-full flex items-center justify-center p-6 md:p-32 overflow-hidden">

            {/* Background Texture Element */}
            <div className="absolute top-1/4 -left-20 w-[60vw] h-[60vh] border border-luxury-brass/5 rounded-full blur-[100px]" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center w-full max-w-[1800px] relative z-10">

              {/* Image Reveal (The Focal Point) */}
              <div className="col-span-1 md:col-span-7 relative group">
                <div className="project-image-wrapper relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-luxury-surface">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover object-center grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Architectural Labels */}
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-luxury-brass px-6 py-3 md:px-10 md:py-5 shadow-2xl">
                   <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-black font-bold">
                     Object {String(index + 1).padStart(2, '0')}
                   </span>
                </div>
              </div>

              {/* Textual Narrative (Integrated in Space) */}
              <div className="col-span-1 md:col-span-5 space-y-12 md:space-y-20">
                <div className="space-y-4 md:space-y-8">
                  <span className="text-luxury-brass text-[10px] md:text-xs uppercase tracking-[1em] block font-bold opacity-60">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-[clamp(2.5rem,5vw,6rem)] font-serif text-luxury-text leading-[0.9] tracking-tighter">
                    {project.title.split(' • ')[0]} <br />
                    <span className="italic text-luxury-brass/80 block mt-2">
                      {project.title.split(' • ')[1] || 'Minimalism'}
                    </span>
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-luxury-brass/40 to-transparent" />

                <div className="grid grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Concept</span>
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-text-muted leading-relaxed font-medium">
                        Integration of shadow gaps and magnetic tracks.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-luxury-brass/60 font-bold">Surface</span>
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-text-muted font-medium">
                        Matte Premium • {project.year}
                      </p>
                   </div>
                </div>

                <button className="group relative flex items-center gap-6 cursor-none">
                   <div className="w-12 h-12 rounded-full border border-luxury-brass/30 flex items-center justify-center transition-all duration-700 group-hover:bg-luxury-brass">
                      <div className="w-2 h-2 bg-luxury-brass rounded-full group-hover:bg-black transition-colors" />
                   </div>
                   <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-luxury-text font-bold">view masterpiece</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
