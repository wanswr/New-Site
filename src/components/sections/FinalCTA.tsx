"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Send } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/constants/content";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative min-h-screen bg-premium-graphite flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Luxury Interior"
          fill
          className="object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-graphite via-transparent to-premium-graphite" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-premium-brass text-xs uppercase tracking-[0.4em] mb-6 block">Ваш идеальный потолок</span>
            <h2 className="text-5xl md:text-7xl font-serif text-premium-white mb-8 leading-tight">
              Создадим пространство,<br />
              которое вдохновляет
            </h2>
            <p className="text-premium-grey text-lg font-light mb-12 max-w-md">
              Оставьте заявку на бесплатный замер и консультацию ведущего инженера PotolokBel.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+74950000000" className="flex items-center gap-4 text-premium-white group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-premium-brass group-hover:text-premium-brass transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-premium-grey">Позвонить нам</span>
                  <span className="text-lg">+7 (495) 000-00-00</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 text-premium-white group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-premium-brass group-hover:text-premium-brass transition-all">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-premium-grey">Написать в WhatsApp</span>
                  <span className="text-lg">Чат с менеджером</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-premium-white p-10 md:p-16 relative"
        >
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-premium-brass text-premium-white px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold">
            Бесплатный замер
          </div>

          <form className="space-y-8">
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest text-premium-graphite/40 block mb-2">Ваше имя</label>
              <input
                type="text"
                placeholder="Константин"
                className="w-full bg-transparent border-b border-premium-grey py-3 focus:border-premium-brass outline-none transition-colors font-serif text-xl"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest text-premium-graphite/40 block mb-2">Телефон</label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-transparent border-b border-premium-grey py-3 focus:border-premium-brass outline-none transition-colors font-serif text-xl"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] uppercase tracking-widest text-premium-graphite/40 block mb-2">Комментарий (необязательно)</label>
              <textarea
                placeholder="Расскажите о вашем проекте"
                rows={1}
                className="w-full bg-transparent border-b border-premium-grey py-3 focus:border-premium-brass outline-none transition-colors font-serif text-xl resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-premium-graphite text-premium-white py-6 flex items-center justify-center gap-4 group hover:bg-premium-brass transition-all duration-500 mt-12">
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Отправить заявку</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p className="text-[9px] uppercase tracking-widest text-premium-graphite/40 text-center mt-6">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-premium-brass" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
