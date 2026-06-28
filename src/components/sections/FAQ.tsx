"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Сколько стоит натяжной потолок?",
    answer: "Стоимость зависит от выбранного полотна, сложности профиля (теневой, парящий) и количества световых точек. В среднем премиальные решения начинаются от 1500 руб/м² под ключ."
  },
  {
    question: "Сколько длится монтаж?",
    answer: "Стандартная комната до 20 м² монтируется за 3-5 часов. Сложные проекты с многоуровневым светом могут занимать 1-2 дня."
  },
  {
    question: "Можно ли ставить в ванной?",
    answer: "Да, натяжные потолки идеальны для ванной. Они не боятся влаги, не желтеют и защищают ваш ремонт в случае затопления сверху."
  },
  {
    question: "Есть ли запах?",
    answer: "Сертифицированные полотна (Pongs, MSD Premium) имеют едва уловимый запах нового изделия, который полностью исчезает через 2-3 часа после проветривания."
  },
  {
    question: "Что делать при затоплении?",
    answer: "ПВХ полотно выдерживает до 100 литров воды на м². Вам нужно вызвать наших мастеров: мы аккуратно сольем воду через техническое отверстие и вернем потолку первоначальный вид."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 bg-premium-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">
            Часто задаваемые вопросы
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-premium-graphite">
            Ответы на вопросы
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border-b border-premium-grey/30 transition-all duration-500",
                openIndex === index ? "pb-8" : "pb-4"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className={cn(
                  "text-xl md:text-2xl font-serif transition-colors duration-300",
                  openIndex === index ? "text-premium-brass" : "text-premium-graphite"
                )}>
                  {faq.question}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full border border-premium-grey flex items-center justify-center group-hover:border-premium-brass transition-colors",
                  openIndex === index && "bg-premium-brass border-premium-brass text-premium-white"
                )}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-premium-graphite/60 font-light leading-relaxed max-w-2xl pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
