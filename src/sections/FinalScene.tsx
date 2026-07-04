"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";
import type SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function FinalScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
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
        tl.add(cinematicReveal(".final-reveal"), 0.2);

        // Final background parallax
        const bgImg = containerRef.current?.querySelector(".final-bg-img");
        if (bgImg) {
            gsap.to(bgImg, {
            scale: 1.1,
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
            });
        }

        return () => {
            if (splitInstance) splitInstance.revert();
        };
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="final-scene" ref={containerRef} className="relative w-full h-full bg-[#050505] overflow-hidden py-16 md:py-24 flex flex-col justify-center">
      <div id="final-bg" className="absolute inset-0 opacity-10 will-change-transform">
         <Image
          src={IMAGES.hero}
          alt="Потолок бизнес-класса"
          fill
          className="final-bg-img object-cover grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
           <div className="mb-12 md:mb-20 text-center lg:text-left">
              <span className="final-reveal text-luxury-brass text-[9px] uppercase tracking-[0.8em] block font-bold mb-4 whitespace-nowrap">
                СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
              </span>
              <h2 ref={titleRef} className="text-3xl md:text-6xl font-serif text-luxury-text mb-6 leading-tight tracking-tighter w-full whitespace-nowrap">
                Запишитесь на замер <br />
                <span className="italic text-luxury-brass/80 font-normal">и получите скидку 10%</span>
              </h2>
              <p className="final-reveal text-luxury-text-muted text-[10px] tracking-[0.4em] uppercase max-w-xl lg:mx-0 mx-auto font-medium leading-relaxed">
                Акция действует до конца недели. Оставьте заявку сейчас, чтобы зафиксировать цену.
              </p>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
             <form className="space-y-8 final-reveal w-full" onSubmit={handleSubmit}>
               <div className="group relative">
                 <label htmlFor="user-name" className="block text-[9px] uppercase tracking-[0.4em] text-luxury-brass mb-1 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold whitespace-nowrap">Имя</label>
                 <input id="user-name" type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-white/5 cursor-pointer" placeholder="Ваше имя" required />
               </div>
               <div className="group relative">
                 <label htmlFor="user-phone" className="block text-[9px] uppercase tracking-[0.4em] text-luxury-brass mb-1 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold whitespace-nowrap">Телефон</label>
                 <input id="user-phone" type="tel" className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-white/5 cursor-pointer" placeholder="+7 (___) ___-__-__" required />
               </div>

               <button
                 type="submit"
                 disabled={formStatus !== "idle"}
                 className="group relative w-full h-14 bg-luxury-brass overflow-hidden transition-all duration-700 cursor-pointer disabled:opacity-50"
               >
                 <span className="relative z-10 text-[9px] uppercase tracking-[0.6em] text-black font-bold whitespace-nowrap">
                   {formStatus === "idle" && "Получить скидку 10%"}
                   {formStatus === "sending" && "Отправка..."}
                   {formStatus === "success" && "Заявка Принята"}
                 </span>
               </button>
             </form>

             <div className="space-y-12 final-reveal w-full">
                <div className="space-y-4">
                   <span className="text-luxury-brass text-[9px] uppercase tracking-[0.6em] block opacity-60 font-bold whitespace-nowrap">Контакты</span>
                   <p className="text-base md:text-xl font-serif text-luxury-text leading-relaxed whitespace-nowrap">
                     Москва и Московская область <br />
                     <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-text-muted font-sans font-bold block mt-2 italic whitespace-nowrap">Ежедневно с 9:00 до 21:00</span>
                   </p>
                </div>

                <div className="space-y-4">
                   <span className="text-luxury-brass text-[9px] uppercase tracking-[0.6em] block opacity-60 font-bold whitespace-nowrap">Связь</span>
                   <div className="flex flex-col gap-2 text-base md:text-xl font-serif text-luxury-text">
                      <a href="tel:+79990000000" className="hover:text-luxury-brass transition-colors cursor-pointer whitespace-nowrap">+7 (999) 000-00-00</a>
                      <a href="https://wa.me/placeholder" className="hover:text-luxury-brass transition-colors cursor-pointer whitespace-nowrap">Написать в WhatsApp</a>
                   </div>
                </div>
             </div>
           </div>

           <div className="mt-16 pt-8 border-t border-white/5 text-center opacity-30">
              <span className="text-[7px] uppercase tracking-[1.5em] text-luxury-text font-bold whitespace-nowrap">PotolokBel © 2024 • Премиальные натяжные потолки</span>
           </div>
      </div>
    </div>
  );
}
