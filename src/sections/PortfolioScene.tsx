"use client";

import { useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";
import type SplitType from "split-type";

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
    const ctx = gsap.context(() => {
        if (!containerRef.current) return;

        let splitInstance: SplitType | null = null;

        // Header reveal
        const headerTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio-header",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
        });

        if (titleRef.current) {
        const reveal = splitTextReveal(titleRef.current);
        if (reveal) {
            headerTl.add(reveal.tween, 0);
            splitInstance = reveal.split;
        }
        }
        headerTl.add(cinematicReveal(".portfolio-reveal"), 0.2);

        // Project reveals
        const projectElements = gsap.utils.toArray(".portfolio-project") as HTMLElement[];
        projectElements.forEach((project) => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: project,
            start: "top 75%",
            toggleActions: "play none none reverse"
            }
        });

        const imgWrapper = project.querySelector(".project-image-wrapper");
        const info = project.querySelector(".project-info");

        if (imgWrapper) {
            tl.from(imgWrapper, {
                opacity: 0,
                scale: 0.9,
                y: 50,
                duration: 1.5,
                ease: "power3.out"
            }, 0);
        }

        if (info) {
            tl.from(info, {
                opacity: 0,
                x: project.classList.contains("flex-col-reverse") ? 50 : -50,
                duration: 1.5,
                ease: "power3.out"
            }, 0.3);
        }

        // Parallax on project image
        const img = project.querySelector("img");
        if (img) {
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: true
                }
            });
        }
        });

        return () => {
            if (splitInstance) splitInstance.revert();
        };
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="portfolio-scene" ref={containerRef} className="relative w-full h-full bg-[#050505] py-24 md:py-32 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="portfolio-header mb-16 md:mb-24 text-center">
          <span className="portfolio-reveal text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4 whitespace-nowrap">
            Наши работы
          </span>
          <h2
            ref={titleRef}
            className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter whitespace-nowrap"
          >
            Реализованные <span className="italic text-luxury-brass/80">проекты</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-project flex flex-col gap-8 bg-white/[0.02] border border-white/5 p-6 group hover:border-luxury-brass/20 transition-all duration-700"
            >
              {/* Image Reveal */}
              <div className="project-image-wrapper w-full will-change-transform">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                  <Image
                    src={project.url}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 will-change-transform"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-4 py-1 border border-white/10">
                     <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold whitespace-nowrap">{project.area}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info w-full space-y-6">
                <div className="space-y-2">
                  <span className="text-luxury-brass text-[9px] uppercase tracking-[0.5em] block font-bold whitespace-nowrap">
                    {project.title.split(' • ')[1]}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-luxury-text leading-tight tracking-tighter whitespace-nowrap">
                    {project.title.split(' • ')[0]}
                  </h3>
                  <div className="h-[1px] w-12 bg-luxury-brass/40" />
                </div>

                <div className="space-y-4">
                   <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-luxury-brass font-bold whitespace-nowrap">Задача:</span>
                      <p className="text-luxury-text-muted text-[11px] tracking-widest leading-relaxed font-medium uppercase line-clamp-2">
                        {project.task}
                      </p>
                   </div>
                   <div className="space-y-1">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-luxury-brass font-bold whitespace-nowrap">Решение:</span>
                      <p className="text-luxury-text-muted text-[11px] tracking-widest leading-relaxed font-medium uppercase line-clamp-2">
                        {project.solution}
                      </p>
                   </div>
                </div>

                <button
                  onClick={() => window.open('https://wa.me/placeholder', '_blank')}
                  className="group flex items-center gap-4 cursor-pointer pt-4"
                >
                   <div className="w-8 h-8 rounded-full border border-luxury-brass/30 flex items-center justify-center transition-all duration-700 group-hover:bg-luxury-brass">
                      <div className="w-1 h-1 bg-luxury-brass rounded-full group-hover:bg-black transition-colors" />
                   </div>
                   <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-text font-bold whitespace-nowrap">Рассчитать проект</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
