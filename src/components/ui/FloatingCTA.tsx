"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-[150] flex flex-col gap-4">
      {/* Non-intrusive floating button */}
      <a
        href="https://wa.me/placeholder"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-luxury-brass rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group focus:outline-none focus:ring-2 focus:ring-luxury-brass/50"
        aria-label="Связаться в WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-luxury-bg group-hover:rotate-12 transition-transform duration-300" />

        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-luxury-brass animate-ping opacity-20" />
      </a>
    </div>
  );
}
