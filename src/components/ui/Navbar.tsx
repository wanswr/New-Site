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
    { name: "Story", ru: "История", progress: 0.15 },
    { name: "Masterpieces", ru: "Шедевры", progress: 0.45 },
    { name: "Atelier", ru: "Ателье", progress: 0.70 },
    { name: "Dialogue", ru: "Диалог", progress: 0.85 },
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
        "fixed top-0 left-0 w-full z-[150] transition-all duration-1000 px-6 py-8 md:px-16 md:py-12",
        isScrolled ? "bg-black/20 backdrop-blur-xl py-8" : "bg-transparent"
      )}
    >
      <div className="max-w-[2400px] mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-serif tracking-tighter text-luxury-text font-bold group cursor-none"
        >
          Potolok<span className="text-luxury-brass group-hover:text-luxury-text transition-colors duration-700">Bel</span>
        </Link>

        {/* Cinematic Links */}
        <div className="hidden md:flex items-center space-x-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => handleNavClick(e, link.progress)}
              className="group relative text-[10px] uppercase tracking-[0.6em] text-luxury-text-muted hover:text-luxury-brass transition-colors duration-700 cursor-none font-bold"
            >
              <span className="block group-hover:-translate-y-4 opacity-100 group-hover:opacity-0 transition-all duration-500">{link.name}</span>
              <span className="absolute top-0 left-0 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-luxury-brass">{link.ru}</span>
            </a>
          ))}

          <button className="group relative px-10 py-3 border border-luxury-brass/20 overflow-hidden transition-all duration-700 hover:border-luxury-brass cursor-none">
             <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] text-luxury-text font-bold">Request</span>
             <div className="absolute inset-0 bg-luxury-brass translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 z-[200] bg-black p-12 flex flex-col justify-center"
          >
            <button className="absolute top-12 right-12 text-luxury-text" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.progress)}
                  className="text-4xl font-serif text-luxury-text hover:text-luxury-brass transition-colors"
                >
                  {link.ru}
                </a>
              ))}
              <button className="w-full bg-luxury-brass text-black py-6 text-[11px] uppercase tracking-[1em] font-bold">
                Связаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
