"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); // Reduced loader time for better UX
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
          >
             <LoaderScenario />
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative w-full">{children}</main>
    </SmoothScroll>
  );
}

function LoaderScenario() {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <span className="text-luxury-text font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase font-light">
          Potolok<span className="text-luxury-brass italic font-normal">Bel</span>
        </span>
      </motion.div>

      <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "0%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 w-full h-full bg-luxury-brass"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-[7px] uppercase tracking-[1.2em] text-luxury-brass/50 font-bold"
      >
        Загрузка комфорта
      </motion.div>
    </div>
  );
}
