"use client";

import { useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projects = [
    {
      ...IMAGES.portfolio[0],
      area: "120 м²",
      task: "Создать современный интерьер без видимых элементов крепления и классических люстр.",
      solution: "Использование теневого профиля EuroKraab по всему периметру и интеграция магнитных трековых систем."
    },
    {
      ...IMAGES.portfolio[1],
      area: "85 м²",
      task: "Визуально увеличить высоту потолков в зоне кухни-гостиной и добавить функциональный свет.",
      solution: "Парящий потолок с контурной подсветкой и встроенные световые линии в рабочей зоне."
    },
    {
      ...IMAGES.portfolio[2],
      area: "65 м²",
      task: "Бесшовное полотно большой площади с минималистичным точечным освещением.",
      solution: "Тканевое полотно DESCOR и скрытый монтаж глубоких светильников-тубусов."
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-header",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    if (titleRef.current) {
      headerTl.add(splitTextReveal(titleRef.current), 0);
    }
    headerTl.add(cinematicReveal(".portfolio-reveal"), 0.2);

    // Project reveals
    const projects = gsap.utils.toArray(".portfolio-project") as HTMLElement[];
    projects.forEach((project) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(project.querySelector(".project-image-wrapper"), {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
      }, 0);

      tl.from(project.querySelector(".project-info"), {
        opacity: 0,
        x: project.classList.contains("flex-col-reverse") ? 50 : -50,
        duration: 1.5,
        ease: "power3.out"
      }, 0.3);

      // Parallax on project image
      gsap.to(project.querySelector("img"), {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div id="portfolio-scene" ref={containerRef} className="relative w-full bg-luxury-bg py-24 md:py-64">
      <div className="max-w-7xl mx-auto px-6">
        <div className="portfolio-header mb-16 md:mb-32 text-center">
          <span className="portfolio-reveal text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4">
            Галерея Проектов
          </span>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-serif text-luxury-text tracking-tighter"
          >
            Реализованные <span className="italic text-luxury-brass/80">Идеи</span>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-64">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-project flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 lg:gap-32 items-center`}
            >
              {/* Image Reveal */}
              <div className="project-image-wrapper w-full lg:w-3/5 will-change-transform">
                <div className="relative aspect-[16/10] overflow-hidden bg-luxury-surface group">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 will-change-transform"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-6 py-2 border border-white/10">
                     <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">{project.area}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info w-full lg:w-2/5 space-y-12">
                <div className="space-y-4">
                  <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold">
                    {project.title.split(' • ')[1]}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-luxury-text leading-tight tracking-tighter">
                    {project.title.split(' • ')[0]}
                  </h3>
                  <div className="h-[1px] w-20 bg-luxury-brass/40" />
                </div>

                <div className="space-y-8">
                   <div className="space-y-3">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-brass font-bold">Задача:</span>
                      <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed font-medium">
                        {project.task}
                      </p>
                   </div>
                   <div className="space-y-3">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-brass font-bold">Решение:</span>
                      <p className="text-luxury-text-muted text-sm tracking-widest leading-relaxed font-medium">
                        {project.solution}
                      </p>
                   </div>
                </div>

                <button className="group flex items-center gap-6 cursor-none mt-8">
                   <div className="w-10 h-10 rounded-full border border-luxury-brass/30 flex items-center justify-center transition-all duration-700 group-hover:bg-luxury-brass">
                      <div className="w-1.5 h-1.5 bg-luxury-brass rounded-full group-hover:bg-black transition-colors" />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-text font-bold">Посмотреть все фото</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
