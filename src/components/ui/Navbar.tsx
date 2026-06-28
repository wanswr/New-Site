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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6",
        isScrolled ? "bg-premium-white/80 backdrop-blur-md py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-serif tracking-tighter text-premium-graphite"
        >
          Potolok<span className="text-premium-brass">Bel</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.progress)}
              className="text-sm uppercase tracking-widest hover:text-premium-brass transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-premium-graphite text-premium-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-premium-brass transition-colors">
            Вызвать замерщика
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-premium-graphite"
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
            className="absolute top-full left-0 w-full bg-premium-white shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.progress)}
                  className="text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-premium-graphite text-premium-white py-3 text-center uppercase tracking-widest">
                Вызвать замерщика
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
