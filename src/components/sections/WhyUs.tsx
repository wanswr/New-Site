"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Sparkles, Ruler } from "lucide-react";

const REASONS = [
  {
    icon: <Users size={32} />,
    title: "Собственные монтажники",
    description: "Бригады с опытом более 10 лет, регулярно проходящие аттестацию у производителей полотен."
  },
  {
    icon: <Shield size={32} />,
    title: "Бессрочная гарантия",
    description: "Мы уверены в качестве материалов и работ, поэтому предоставляем расширенную гарантию."
  },
  {
    icon: <Award size={32} />,
    title: "Качественные материалы",
    description: "Работаем только с сертифицированными европейскими брендами: Pongs, Descor, MSD Premium."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Чистый монтаж",
    description: "Используем современное оборудование с пылеудалением. Оставляем после себя идеальную чистоту."
  },
  {
    icon: <Ruler size={32} />,
    title: "Точность исполнения",
    description: "Лазерное измерение и проектирование в CAD программах гарантируют идеальное прилегание."
  }
];

export default function WhyUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-premium-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-premium-brass text-xs uppercase tracking-[0.3em] mb-4 block">
              Наши преимущества
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-premium-graphite leading-tight">
              Почему нам доверяют<br />самые сложные интерьеры
            </h2>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 border border-premium-grey rounded-full flex items-center justify-center text-premium-brass animate-spin-slow">
               <span className="text-[10px] uppercase tracking-widest text-center font-bold">Premium Quality</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-premium-brass mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-premium-graphite group-hover:text-premium-brass transition-colors">
                {reason.title}
              </h3>
              <p className="text-premium-graphite/60 font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-premium-ivory p-10 flex flex-col justify-between border border-premium-grey/20"
          >
            <h3 className="text-2xl font-serif text-premium-graphite mb-6">Готовы обсудить ваш проект?</h3>
            <button className="bg-premium-graphite text-premium-white py-4 text-xs uppercase tracking-widest hover:bg-premium-brass transition-colors">
              Заказать консультацию
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
