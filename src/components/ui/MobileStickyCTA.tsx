"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px (roughly past Hero)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCalc = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <button
            onClick={scrollToCalc}
            className="w-full bg-premium-brass text-premium-white py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
          >
            <Calculator size={18} />
            Рассчитать стоимость
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
