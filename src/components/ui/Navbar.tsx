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
    { name: "О нас", href: "#about", progress: 0.20 },
    { name: "Портфолио", href: "#portfolio", progress: 0.45 },
    { name: "Калькулятор", href: "#calculator", progress: 0.68 },
    { name: "FAQ", href: "#faq", progress: 0.85 },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, progress: number) => {
    e.preventDefault();
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalHeight * progress,
      behavior: "smooth"
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-6 md:px-16 md:py-10",
        isScrolled ? "bg-black/20 backdrop-blur-lg py-6" : "bg-transparent"
      )}
    >
      <div className="max-w-[2400px] mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-serif tracking-tighter text-white"
        >
          Potolok<span className="text-premium-brass">Bel</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.progress)}
              className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-premium-brass transition-colors cursor-none"
            >
              {link.name}
            </a>
          ))}
          <button className="group relative px-8 py-3 border border-white/10 overflow-hidden transition-all duration-700 hover:border-premium-brass cursor-none">
             <span className="relative z-10 text-[9px] uppercase tracking-[0.4em] text-white group-hover:text-black transition-colors duration-700">Замер</span>
             <div className="absolute inset-0 bg-premium-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.progress)}
                  className="text-2xl font-serif text-white hover:text-premium-brass transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full border border-premium-brass text-premium-brass py-5 text-center text-[10px] uppercase tracking-[0.6em]">
                Вызвать замерщика
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
