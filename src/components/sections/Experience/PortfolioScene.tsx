"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="absolute inset-0 w-full h-full opacity-0 pointer-events-none">
      {IMAGES.portfolio.map((project, index) => (
        <div key={index} className={`portfolio-project absolute inset-0 w-full h-full ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={project.url}
            alt={project.title}
            fill
            className="object-cover project-image"
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
             <span className="text-premium-brass uppercase tracking-[0.5em] mb-4 text-xs">Проект {index + 1}</span>
             <h3 className="text-5xl md:text-8xl font-serif text-center">{project.title}</h3>
             <span className="mt-8 text-premium-grey">{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
