"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Increased duration for the sophisticated narrative loader
    const timer = setTimeout(() => setIsLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
            exit={{
              opacity: 0,
              scale: 1.1,
              filter: "blur(20px)",
              transition: { duration: 1.5, ease: [0.87, 0, 0.13, 1] }
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
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      {/* 1. The Laser Beam Path (Scanning) */}
      <motion.div
        initial={{ top: "45%", left: "-10%", width: "0%", opacity: 0 }}
        animate={{
          left: ["-10%", "20%", "50%", "80%", "110%"],
          width: ["0%", "30%", "40%", "30%", "0%"],
          opacity: [0, 1, 1, 1, 0],
          top: ["45%", "42%", "48%", "45%", "45%"]
        }}
        transition={{ duration: 4, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1] }}
        className="absolute h-[1px] bg-luxury-brass blur-[0.5px] shadow-[0_0_15px_#B08D57] z-20"
      />

      {/* 2. Architectural Grids (Revealed by Laser) */}
      <div className="relative w-[70vw] h-[50vh] perspective-[1000px]">
        {/* Floor lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.05, 0.1, 0] }}
          transition={{ delay: 0.5, duration: 4 }}
          className="absolute bottom-0 w-full h-full border-b border-luxury-brass/30 origin-bottom"
          style={{ transform: "rotateX(75deg)" }}
        />

        {/* Ceiling outlines (The focus) */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.9 }}
          animate={{ opacity: [0, 0.1, 0.3, 0.1, 0], scaleY: 1 }}
          transition={{ delay: 1.5, duration: 4 }}
          className="absolute top-0 w-full h-[20%] border border-luxury-brass/40 z-10"
        />

        {/* Vertical Walls Edges */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 0.2, 0], height: "100%" }}
          transition={{ delay: 1, duration: 3 }}
          className="absolute left-0 w-[1px] bg-gradient-to-b from-luxury-brass/40 via-transparent to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 0.2, 0], height: "100%" }}
          transition={{ delay: 1.2, duration: 3 }}
          className="absolute right-0 w-[1px] bg-gradient-to-b from-luxury-brass/40 via-transparent to-transparent"
        />
      </div>

      {/* 3. The "Hidden Lighting" Reveal (Warm Bloom) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.4, 0] }}
        transition={{ delay: 3.5, duration: 2 }}
        className="absolute top-[20%] w-[80vw] h-[5px] bg-luxury-warm-light blur-[40px]"
      />

      {/* 4. Final Manifestation Bloom */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0, 0.15, 0] }}
        transition={{ delay: 4.5, duration: 1.5 }}
        className="absolute inset-0 bg-radial-gradient from-luxury-warm-light/20 to-transparent blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ delay: 2, duration: 3 }}
        className="absolute bottom-12 text-[8px] uppercase tracking-[1.5em] text-luxury-text-muted"
      >
        manifesting space
      </motion.div>
    </div>
  );
}
