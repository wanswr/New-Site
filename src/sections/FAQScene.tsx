"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";
import type SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function FAQScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Сколько времени занимает монтаж?",
      a: "От 1 до 2 дней на всю квартиру. Мы ценим ваше время и работаем по четкому графику без задержек."
    },
    {
      q: "Будет ли много пыли и грязи?",
      a: "Нет. Мы используем профессиональное оборудование с встроенным пылеудалением. Мебель достаточно просто накрыть пленкой."
    },
    {
      q: "Какая гарантия на работы?",
      a: "15 лет официальной гарантии по договору на полотно и 5 лет на монтажные работы. Мы работаем только с проверенными брендами."
    },
    {
      q: "Цена изменится в процессе работы?",
      a: "Нет. Стоимость фиксируется в официальном договоре после замера и остается неизменной. Никаких скрытых доплат."
    }
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    let splitInstance: SplitType | null = null;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    if (titleRef.current) {
      const reveal = splitTextReveal(titleRef.current);
      if (reveal) {
        tl.add(reveal.tween, 0);
        splitInstance = reveal.split;
      }
    }
    tl.add(cinematicReveal(".faq-reveal"), 0.2);

    return () => {
        if (splitInstance) splitInstance.revert();
    };
  }, { scope: containerRef });

  return (
    <div id="faq-scene" ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center bg-luxury-bg text-luxury-text py-24 md:py-64">
      <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div className="space-y-8">
           <span className="text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold">
             Ответы на вопросы
           </span>
           <h2 ref={titleRef} className="text-3xl md:text-5xl font-serif leading-tight tracking-tighter">
             Снимаем <br />
             <span className="italic text-luxury-brass/80 font-normal">ваши опасения</span>
           </h2>
           <div className="faq-reveal h-[1px] w-24 bg-luxury-brass/30" />
           <p className="faq-reveal text-luxury-text-muted text-[10px] md:text-xs uppercase tracking-[0.4em] leading-relaxed max-w-sm font-medium">
             Прозрачность и честность — основа нашей работы. Мы ответим на любой ваш технический вопрос.
           </p>
        </div>

        <div className="divide-y divide-luxury-brass/10">
          {faqs.map((faq, i) => (
            <div
                key={i}
                className="cursor-pointer group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center py-8 transition-all duration-700">
                <h3 className={`text-lg md:text-xl font-serif transition-colors ${openIndex === i ? 'text-luxury-brass' : 'group-hover:text-luxury-brass/70'}`}>
                  {faq.q}
                </h3>
                <div className={`w-10 h-[1px] bg-luxury-brass/20 transition-all duration-700 ${openIndex === i ? 'w-16 bg-luxury-brass' : 'group-hover:w-16'}`} />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-luxury-text-muted text-sm md:text-base tracking-widest leading-relaxed font-medium">
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
