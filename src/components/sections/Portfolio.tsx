"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/constants/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-premium-graphite py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">
          Реализованные проекты
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-premium-white">
          Галерея объектов
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {IMAGES.portfolio.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>

      <div className="mt-32 text-center">
        <button className="border border-premium-white/20 text-premium-white px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-premium-white hover:text-premium-graphite transition-all duration-500">
          Смотреть все проекты
        </button>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-12 md:gap-24 items-center`}
    >
      {/* Project Image */}
      <div className="w-full md:w-3/5 aspect-[4/3] relative overflow-hidden">
        <motion.div style={{ scale }} className="h-full w-full">
          <Image
            src={project.url}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Project Details */}
      <motion.div
        style={{ y }}
        className="w-full md:w-2/5 text-premium-white space-y-6"
      >
        <div className="space-y-2">
          <span className="text-premium-brass text-xs uppercase tracking-widest">
            {project.type}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-premium-grey block mb-1">
              Площадь
            </span>
            <span className="text-lg font-light">{project.area}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-premium-grey block mb-1">
              Решение
            </span>
            <span className="text-lg font-light leading-tight block">
              {project.solution}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-premium-grey block mb-1">
              Бюджет
            </span>
            <span className="text-lg font-light text-premium-brass">от {project.price}</span>
          </div>
        </div>

        <button className="flex items-center gap-4 group mt-8">
          <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-premium-brass transition-all duration-300">
            Подробнее о проекте
          </span>
          <div className="w-8 h-px bg-premium-brass group-hover:w-12 transition-all duration-500" />
        </button>
      </motion.div>
    </div>
  );
}
