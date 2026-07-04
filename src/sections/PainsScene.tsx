"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function PainsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      const split = new SplitType(titleRef.current, { types: "words" });
      gsap.set(split.words, {
        opacity: 0,
        y: 20,
      });

      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".pain-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pains-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => {
        ctx.revert();
    };
  }, { scope: containerRef });

  const pains = [
    {
      title: "Грязь и пыль",
      desc: "Боитесь, что после монтажа придется делать генеральную уборку? Мы используем перфораторы с пылеудалением."
    },
    {
      title: "Скрытые доплаты",
      desc: "Цена меняется в процессе? У нас фиксированная смета, прописанная в договоре до начала работ."
    },
    {
      title: "Кривой монтаж",
      desc: "Переживаете за результат? Наши мастера с опытом от 7 лет гарантируют идеальные углы и примыкания."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-48 px-6 min-h-screen bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold mb-4 ">Ваши страхи — наша забота</span>
          <h2 ref={titleRef} className="text-4xl md:text-8xl font-serif text-luxury-text tracking-tighter leading-[1.1] ">
            Ремонт <span className="italic text-luxury-brass">без стресса</span>
          </h2>
        </div>

        <div className="pains-grid grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="pain-card p-10 border border-white/5 bg-white/[0.02] backdrop-blur-xl group hover:border-luxury-brass/30 transition-all duration-700">
              <div className="text-luxury-brass/20 text-5xl font-serif mb-6 group-hover:text-luxury-brass transition-colors duration-700">0{i+1}</div>
              <h3 className="text-xl font-serif text-luxury-text mb-4 tracking-widest uppercase ">{pain.title}</h3>
              <p className="text-luxury-text-muted text-[10px] tracking-[0.3em] leading-relaxed uppercase">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
