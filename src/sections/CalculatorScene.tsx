"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cinematicReveal } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function CalculatorScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [area, setArea] = useState(45);
  const [type, setType] = useState("premium");
  const [lights, setLights] = useState(12);

  const basePrices: Record<string, number> = {
    standard: 1800,
    premium: 4500,
    exclusive: 8500,
  };

  const estimatedPrice = area * basePrices[type] + lights * 2500;

  useGSAP(() => {
    const ctx = gsap.context(() => {
        gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
        })
        .add(cinematicReveal(".calc-reveal"));

        // Subtle background parallax
        gsap.to(".calc-bg", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
        });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <div id="calculator-scene" ref={containerRef} className="relative w-full min-h-screen bg-[#0F0F0F] overflow-hidden flex items-center justify-center py-12 md:py-24">

      {/* Background Ambience */}
      <div className="calc-bg absolute inset-0 opacity-20 will-change-transform">
         <Image
           src={type === "exclusive" ? IMAGES.hero : IMAGES.details.floating}
           alt="Atmosphere"
           fill
           className="object-cover grayscale"
           quality={80}
           sizes="100vw"
         />
         <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-[#0F0F0F]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="calc-reveal text-luxury-brass text-[9px] uppercase tracking-[0.8em] block font-bold ">
              РАСЧЕТ СТОИМОСТИ
            </span>

            <h2 className="text-3xl md:text-5xl font-serif text-luxury-text leading-tight tracking-tighter ">
              Узнайте цену <br />
              <span className="italic text-luxury-brass/80 font-normal">вашего потолка</span>
            </h2>
          </div>

          <div className="space-y-8">
             <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-widest text-luxury-brass/60 font-bold ">Тип решения</span>
                <div className="flex flex-wrap gap-6">
                   {Object.keys(basePrices).map((key) => (
                     <button
                       key={key}
                       onClick={() => setType(key)}
                       className={`relative py-1 transition-all duration-700 cursor-pointer ${
                         type === key ? "text-luxury-text" : "text-luxury-text/20 hover:text-luxury-text/40"
                       }`}
                     >
                       <span className="text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold ">
                         {key === "standard" ? "Матовый" : key === "premium" ? "Теневой" : "Световой"}
                       </span>
                       {type === key && (
                         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-brass" />
                       )}
                     </button>
                   ))}
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-2">
                     <span className="text-[9px] uppercase tracking-widest text-luxury-brass/60 font-bold ">Площадь</span>
                     <span className="text-xl font-serif text-luxury-text ">{area} м²</span>
                  </div>
                  <input
                    type="range" min="10" max="250" value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-luxury-surface appearance-none cursor-pointer accent-luxury-brass"
                    aria-label="Площадь помещения"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-luxury-brass/10 pb-2">
                     <span className="text-[9px] uppercase tracking-widest text-luxury-brass/60 font-bold ">Точки света</span>
                     <span className="text-xl font-serif text-luxury-text ">{lights} шт.</span>
                  </div>
                  <input
                    type="range" min="0" max="100" value={lights}
                    onChange={(e) => setLights(parseInt(e.target.value))}
                    className="w-full h-[1px] bg-luxury-surface appearance-none cursor-pointer accent-luxury-brass"
                    aria-label="Количество точек света"
                  />
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
           <div className="relative text-center lg:text-right">
              <span className="text-[9px] uppercase tracking-[0.6em] text-luxury-brass font-bold mb-2 block opacity-60 ">
                Предварительная стоимость
              </span>

              <div
                key={estimatedPrice}
                data-testid="calc-price"
                className="text-4xl md:text-6xl font-serif text-luxury-text leading-none tracking-tighter "
              >
                {estimatedPrice.toLocaleString()}<span className="text-lg md:text-xl text-luxury-brass ml-2">₽</span>
              </div>

              <p className="mt-6 text-luxury-text-muted text-[9px] uppercase tracking-[0.3em] leading-relaxed max-w-xs lg:ml-auto font-medium">
                Цена фиксируется в договоре. Бесплатный выезд.
              </p>
           </div>

           <div className="mt-12 w-full lg:w-auto">
             <button
                onClick={() => window.open('https://wa.me/placeholder', '_blank')}
                className="group relative w-full lg:w-64 h-14 bg-luxury-brass overflow-hidden cursor-pointer"
             >
                <span className="relative z-10 text-[9px] uppercase tracking-[0.6em] text-black font-bold block text-center ">
                  Написать в WhatsApp
                </span>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
