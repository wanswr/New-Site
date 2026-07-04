"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray(".stage-card") as HTMLElement[];
      stages.forEach((stage) => {
        gsap.from(stage, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stage,
            start: "top 85%",
          }
        });
      });

      // Animated connector lines
      gsap.from(".process-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  const steps = [
    {
      t: "Заявка",
      d: "Оставьте заявку на сайте или позвоните нам. Менеджер согласует удобное время для выезда замерщика."
    },
    {
      t: "Бесплатный замер",
      d: "Мастер приедет с образцами материалов, выполнит точный замер и составит проект освещения."
    },
    {
      t: "Смета и договор",
      d: "Сразу после замера вы получаете итоговую стоимость. Заключаем официальный договор с гарантией."
    },
    {
      t: "Монтаж за 1 день",
      d: "Бригада приезжает в назначенный день и выполняет чистый монтаж. Принимаете работу и наслаждаетесь результатом."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-48 px-6 min-h-screen bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[1em] block font-bold mb-4 ">Процесс работы</span>
          <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter  leading-[1.1]">
            От замера до <span className="italic text-luxury-brass">идеального потолка</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="stage-card relative z-10 group">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full border border-luxury-brass/30 flex items-center justify-center text-luxury-brass font-serif text-2xl group-hover:bg-luxury-brass group-hover:text-black transition-all duration-700">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-serif text-luxury-text mb-4 tracking-widest uppercase ">{step.t}</h3>
              <p className="text-luxury-text-muted text-[10px] tracking-[0.2em] leading-relaxed uppercase">{step.d}</p>

              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-luxury-brass/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
