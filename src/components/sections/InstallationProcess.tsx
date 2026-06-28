"use client";

import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Zap, Award } from "lucide-react";

const STEPS = [
  {
    icon: Ruler,
    title: "Точный замер",
    description: "Инженер приезжает в день обращения, делает лазерный замер и помогает выбрать материалы под ваш бюджет."
  },
  {
    icon: Award,
    title: "Договор и Гарантия",
    description: "Фиксируем стоимость и сроки в договоре. Вы получаете официальную гарантию 15 лет на полотно и монтаж."
  },
  {
    icon: Zap,
    title: "Чистый монтаж",
    description: "Установка за 3-5 часов с использованием пылеудаляющего оборудования. Не оставляем мусора."
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    description: "Финальная проверка натяжения, работы освещения и подписание акта приемки."
  }
];

export default function InstallationProcess() {
  return (
    <section id="process" className="py-24 bg-premium-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">Как мы работаем</span>
          <h2 className="text-4xl md:text-5xl font-serif text-premium-graphite">От замера до идеального потолка</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-premium-grey/20 hover:border-premium-brass transition-colors group"
            >
              <div className="w-12 h-12 bg-premium-ivory flex items-center justify-center mb-6 group-hover:bg-premium-brass group-hover:text-premium-white transition-colors">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-premium-graphite">{step.title}</h3>
              <p className="text-premium-graphite/60 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
