"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { splitTextReveal, cinematicReveal } from "@/lib/motion";

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
    tl.add(cinematicReveal(".final-reveal"), 0.2);

    // Final background parallax
    gsap.to("#final-bg img", {
      scale: 1.2,
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <div id="final-scene" ref={containerRef} className="relative w-full min-h-screen bg-luxury-bg overflow-hidden py-24 md:py-64">
      <div id="final-bg" className="absolute inset-0 opacity-10 will-change-transform">
         <Image
          src={IMAGES.hero}
          alt="Final Background"
          fill
          className="object-cover grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
           <div className="mb-20 md:mb-32 text-center lg:text-left">
              <span className="final-reveal text-luxury-brass text-[10px] uppercase tracking-[0.8em] block font-bold mb-8">
                Шедевр Ждет Вас
              </span>
              <h2 ref={titleRef} className="text-4xl md:text-6xl font-serif text-luxury-text mb-8 leading-tight tracking-tighter w-full">
                Создадим <br />
                <span className="italic text-luxury-brass/80 font-normal">Ваш Интерьер</span>
              </h2>
           </div>

           <div className="grid lg:grid-cols-2 gap-20 lg:gap-40 items-start">
             <form className="space-y-12 final-reveal" onSubmit={handleSubmit}>
               <div className="group relative">
                 <label htmlFor="user-name" className="block text-[10px] uppercase tracking-[0.4em] text-luxury-brass mb-2 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold">Имя</label>
                 <input id="user-name" type="text" className="w-full bg-transparent border-b border-luxury-brass/20 py-4 text-lg md:text-xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-luxury-text/10 cursor-none" placeholder="Александр" required />
               </div>
               <div className="group relative">
                 <label htmlFor="user-phone" className="block text-[10px] uppercase tracking-[0.4em] text-luxury-brass mb-2 opacity-40 group-focus-within:opacity-100 transition-opacity font-bold">Телефон</label>
                 <input id="user-phone" type="tel" className="w-full bg-transparent border-b border-luxury-brass/20 py-4 text-lg md:text-xl font-serif text-luxury-text focus:border-luxury-brass outline-none transition-all placeholder:text-luxury-text/10 cursor-none" placeholder="+7" required />
               </div>

               <button
                 type="submit"
                 disabled={formStatus !== "idle"}
                 className="group relative w-full h-16 bg-luxury-brass overflow-hidden transition-all duration-700 cursor-none disabled:opacity-50"
               >
                 <span className="relative z-10 text-[10px] uppercase tracking-[0.6em] text-black font-bold">
                   {formStatus === "idle" && "Начать Проект"}
                   {formStatus === "sending" && "Отправка..."}
                   {formStatus === "success" && "Заявка Принята"}
                 </span>
                 <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
               </button>
             </form>

             <div className="space-y-16 final-reveal">
                <div className="space-y-6">
                   <span className="text-luxury-brass text-[10px] uppercase tracking-[0.6em] block opacity-60 font-bold">Ателье</span>
                   <p className="text-lg md:text-xl font-serif text-luxury-text leading-relaxed">
                     Москва, Кутузовский проспект, 12 <br />
                     <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-text-muted font-sans font-bold block mt-4 italic">Флагманский Шоурум</span>
                   </p>
                </div>

                <div className="space-y-6">
                   <span className="text-luxury-brass text-[10px] uppercase tracking-[0.6em] block opacity-60 font-bold">Диалог</span>
                   <div className="flex flex-col gap-4 text-lg md:text-xl font-serif text-luxury-text">
                      <a href="tel:+74950000000" className="hover:text-luxury-brass transition-colors cursor-none">+7 (495) 000-00-00</a>
                      <a href="mailto:office@potolokbel.ru" className="hover:text-luxury-brass transition-colors cursor-none">office@potolokbel.ru</a>
                   </div>
                </div>

                <div className="flex gap-8 pt-8 border-t border-luxury-brass/10">
                   <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-luxury-text-muted hover:text-luxury-brass transition-colors cursor-none font-bold">Telegram</a>
                   <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-luxury-text-muted hover:text-luxury-brass transition-colors cursor-none font-bold">Pinterest</a>
                </div>
             </div>
           </div>

           <div className="mt-32 pt-16 border-t border-luxury-brass/5 text-center opacity-30">
              <span className="text-[8px] uppercase tracking-[1.5em] text-luxury-text font-bold">PotolokBel Architectural Surfaces © 2024</span>
           </div>
      </div>
    </div>
  );
}
