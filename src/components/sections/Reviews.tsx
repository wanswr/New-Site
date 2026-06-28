"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IMAGES } from "@/constants/content";

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".review-item");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current?.offsetWidth,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="overflow-hidden bg-premium-graphite h-screen">
      <div
        className="flex h-full"
        style={{ width: `${IMAGES.reviews.length * 100}vw` }}
      >
        {IMAGES.reviews.map((review, index) => (
          <div key={index} className="review-item relative w-screen flex-shrink-0 h-full flex items-center justify-center overflow-hidden">
            <Image
              src={review.photo}
              alt={review.name}
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-premium-graphite via-transparent to-premium-graphite opacity-80" />

            <div className="relative z-10 max-w-4xl px-6 text-center">
              <span className="text-premium-brass text-xs uppercase tracking-[0.4em] mb-12 block">Отзыв заказчика</span>
              <p className="text-2xl md:text-4xl font-serif text-premium-white italic leading-relaxed mb-12">
                "{review.text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-xl font-serif text-premium-white mb-2">{review.name}</span>
                <span className="text-xs uppercase tracking-widest text-premium-grey">{review.district}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
