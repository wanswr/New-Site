"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IMAGES } from "@/constants/content";

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const pin = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Scene 1: Empty space / Project
    pin.fromTo(".step-1", { opacity: 1 }, { opacity: 0, duration: 1 });

    // Scene 2: Montage process
    pin.fromTo(".step-2", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, "<");
    pin.to(".step-2", { opacity: 0, duration: 1 });

    // Scene 3: Finished Interior
    pin.fromTo(".step-3", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, "<");

    // Text animations
    const texts = gsap.utils.toArray(".story-text");
    texts.forEach((text: any, i) => {
      pin.fromTo(
        text,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        i === 0 ? 0 : i * 1 // Adjust timing
      );
      if (i < texts.length - 1) {
          pin.to(text, { y: -50, opacity: 0, duration: 0.5 }, (i + 1) * 0.8);
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden bg-premium-graphite">
      <div ref={triggerRef} className="h-screen w-full relative">

        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="step-1 absolute inset-0">
            <Image src={IMAGES.minimalInterior} alt="Space preparation" fill className="object-cover opacity-40 grayscale" />
          </div>
          <div className="step-2 absolute inset-0 opacity-0">
            <Image src={IMAGES.process} alt="Montage process" fill className="object-cover opacity-50" />
          </div>
          <div className="step-3 absolute inset-0 opacity-0">
            <Image src={IMAGES.modernCeiling} alt="Finished interior" fill className="object-cover opacity-70" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-premium-graphite/50 via-transparent to-premium-graphite" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 max-w-4xl">
          <div className="space-y-8">
            <div className="story-text absolute opacity-0">
              <h2 className="text-3xl md:text-5xl font-serif text-premium-white mb-4">
                Все начинается с идеи
              </h2>
              <p className="text-premium-grey text-lg max-w-xl font-light">
                Мы видим пустое пространство не как ограничение, а как холст для будущего шедевра.
              </p>
            </div>

            <div className="story-text absolute opacity-0">
              <h2 className="text-3xl md:text-5xl font-serif text-premium-white mb-4">
                Точность в каждом движении
              </h2>
              <p className="text-premium-grey text-lg max-w-xl font-light">
                Наши мастера работают с ювелирной точностью, превращая сложные технические узлы в изящные детали интерьера.
              </p>
            </div>

            <div className="story-text absolute opacity-0">
              <h2 className="text-3xl md:text-5xl font-serif text-premium-white mb-4">
                Безупречный результат
              </h2>
              <p className="text-premium-grey text-lg max-w-xl font-light">
                Ваш интерьер обретает завершенность. Потолок перестает быть просто плоскостью и становится частью архитектуры.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end">
          <span className="text-premium-brass font-serif text-6xl opacity-20">PotolokBel</span>
          <span className="text-premium-white/30 text-[10px] uppercase tracking-[0.5em] mt-2">The Art of Space</span>
        </div>
      </div>
    </section>
  );
}
