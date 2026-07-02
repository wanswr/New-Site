"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function FAQScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqs = [
    {
      q: "Architectural Timing",
      ru: "Сроки реализации",
      a: "От 1 до 2 дней на всю квартиру. Мы ценим ваше время и работаем с хирургической точностью без затягивания процесса."
    },
    {
      q: "Living Standards",
      ru: "Подготовка интерьера",
      a: "Минимальная. Наше оборудование с системой пылеудаления позволяет проводить работы в жилых интерьерах."
    },
    {
      q: "Legacy Quality",
      ru: "Гарантия и страховка",
      a: "15 лет официальной гарантии по договору. Наши потолки выдерживают до 100л воды на м², защищая ваш ремонт от протечек."
    },
    {
      q: "Professional Language",
      ru: "Работа с проектами",
      a: "Мы говорим на языке архитекторов. Теневые узлы, сложные световые сценарии и скрытые системы — наша специализация."
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    if (titleRef.current) {
      const reveal = splitTextReveal(titleRef.current);
      if (reveal) tl.add(reveal, 0);
    }
    tl.add(cinematicReveal(".faq-reveal"), 0.2);

  }, { scope: containerRef });

  return (
    <div id="faq-scene" ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center bg-luxury-bg text-luxury-text py-24 md:py-64">
      <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-8">
           <span className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold">
             Диалог о Качестве
           </span>
           <h2 ref={titleRef} className="text-3xl md:text-5xl font-serif leading-tight tracking-tighter">
             Детали <br />
             <span className="italic text-luxury-brass/80 font-normal">Мастерства</span>
           </h2>
           <div className="faq-reveal h-[1px] w-24 bg-luxury-brass/30" />
           <p className="faq-reveal text-luxury-text-muted text-[10px] md:text-xs uppercase tracking-[0.4em] leading-relaxed max-w-sm font-medium">
             В премиальном сегменте нет мелочей. Каждая деталь — это подтверждение нашего стандарта White Glove.
           </p>
        </div>

        <div className="divide-y divide-luxury-brass/10">
          {faqs.map((faq, i) => (
            <div key={i} className="group cursor-none">
              <div className="flex justify-between items-center py-8 transition-all duration-700">
                <div className="space-y-1">
                   <span className="text-[10px] uppercase tracking-widest text-luxury-brass/40 font-bold block">{faq.q}</span>
                   <h3 className="text-lg md:text-xl font-serif group-hover:text-luxury-brass transition-colors">
                     {faq.ru}
                   </h3>
                </div>
                <div className="w-10 h-[1px] bg-luxury-brass/20 group-hover:w-16 group-hover:bg-luxury-brass transition-all duration-700" />
              </div>
              <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out">
                <p className="text-luxury-text-muted text-[10px] md:text-xs uppercase tracking-[0.3em] leading-loose pb-8 font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
