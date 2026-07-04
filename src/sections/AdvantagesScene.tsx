"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AdvantagesScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".advantage-item", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".advantage-image", {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  const advantages = [
    {
      title: "Монтаж за 1 день",
      desc: "Бригада приедет и установит потолки во всей квартире за один рабочий день."
    },
    {
      title: "Чистая установка",
      desc: "Используем современное оборудование с системой пылеудаления. Мебель останется чистой."
    },
    {
      title: "Договор и гарантия",
      desc: "Работаем официально. Даем 15 лет гарантии на полотно и 3 года на монтажные работы."
    },
    {
      title: "Фиксированная смета",
      desc: "Стоимость не изменится после замера. Никаких непредвиденных расходов."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-48 px-6 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-luxury-brass text-[10px] uppercase tracking-[0.5em] block font-bold mb-4 ">Преимущества</span>
            <h2 className="text-4xl md:text-7xl font-serif text-luxury-text tracking-tighter mb-12  leading-[1.1]">
              Результат, которым <br /> <span className="italic text-luxury-brass">хочется гордиться</span>
            </h2>

            <div className="space-y-10">
              {advantages.map((adv, i) => (
                <div key={i} className="advantage-item flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 border border-luxury-brass/20 flex items-center justify-center text-luxury-brass font-bold group-hover:border-luxury-brass transition-colors duration-500">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-luxury-text text-lg font-serif uppercase tracking-widest mb-2">{adv.title}</h3>
                    <p className="text-luxury-text-muted text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-md">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="advantage-image relative aspect-[4/5] bg-[#111] overflow-hidden border border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
              alt="Premium Ceiling"
              fill
              className="object-cover opacity-60 hover:scale-105 transition-transform duration-[2s]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
