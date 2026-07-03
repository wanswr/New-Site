"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", id: "hero-scene" },
    { name: "О нас", id: "about-section" },
    { name: "Работы", id: "portfolio-section" },
    { name: "Отзывы", id: "reviews-section" },
    { name: "Расчет", id: "calculator-section" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[150] transition-all duration-700 px-6 py-6 md:px-16 md:py-8",
        isScrolled ? "bg-black/80 backdrop-blur-xl py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-serif tracking-tighter text-luxury-text font-bold group"
        >
          Potolok<span className="text-luxury-brass group-hover:text-luxury-text transition-colors duration-500">Bel</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-text-muted hover:text-luxury-brass transition-colors duration-500 font-bold"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
                document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-luxury-brass/10 border border-luxury-brass/20 text-luxury-brass text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-luxury-brass hover:text-luxury-bg transition-all duration-500"
          >
             Заказать расчет
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-[#050505] p-12 flex flex-col justify-center"
          >
            <button
              className="absolute top-8 right-8 text-luxury-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-3xl font-serif text-luxury-text"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                    document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                }}
                className="w-full bg-luxury-brass text-luxury-bg py-5 text-[11px] uppercase tracking-[0.5em] font-bold"
              >
                Получить расчет
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
