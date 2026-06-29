"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/content";
import { motion } from "framer-motion";

export default function PortfolioScene() {
  return (
    <div id="portfolio-scene" className="relative w-full bg-luxury-bg py-32 md:py-64">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4"
          >
            Архив Шедевров
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-luxury-text tracking-tighter"
          >
            Наши <span className="italic text-luxury-brass/80">Проекты</span>
          </motion.h2>
        </div>

        <div className="space-y-64">
          {IMAGES.portfolio.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 lg:gap-32 items-center`}
            >
              {/* Image Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-luxury-surface group">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-luxury-text leading-tight tracking-tighter">
                    {project.title.split(' • ')[0]}
                  </h3>
                  <div className="h-[1px] w-20 bg-luxury-brass/40" />
                </div>

                <p className="text-luxury-text-muted text-sm md:text-base tracking-widest leading-relaxed font-medium max-w-md">
                   Интеграция инновационных систем освещения и теневых профилей для создания безупречного архитектурного пространства.
                </p>

                <button className="group flex items-center gap-6 cursor-none mt-8">
                   <div className="w-10 h-10 rounded-full border border-luxury-brass/30 flex items-center justify-center transition-all duration-700 group-hover:bg-luxury-brass">
                      <div className="w-1.5 h-1.5 bg-luxury-brass rounded-full group-hover:bg-black transition-colors" />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-text font-bold">Детали проекта</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
