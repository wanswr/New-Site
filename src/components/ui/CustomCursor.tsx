"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP for high-performance cursor movement
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement;
      const isHoverable = target.closest('button, a, input, [role="button"]');
      const isProject = target.closest('.portfolio-project');

      if (isHoverable) {
        cursor.classList.add('scale-150', 'bg-white');
        cursor.classList.remove('bg-premium-brass');
        if (textRef.current) textRef.current.innerText = "";
      } else if (isProject) {
        cursor.classList.add('scale-[4]');
        cursor.classList.remove('bg-premium-brass');
        cursor.classList.add('bg-premium-brass/20', 'backdrop-blur-sm');
        if (textRef.current) {
          textRef.current.innerText = "VIEW";
          textRef.current.style.opacity = "1";
        }
      } else {
        cursor.classList.remove('scale-150', 'scale-[4]', 'bg-white', 'bg-premium-brass/20', 'backdrop-blur-sm');
        cursor.classList.add('bg-premium-brass');
        if (textRef.current) textRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-premium-brass rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden will-change-transform"
      style={{ left: 0, top: 0 }}
    >
      <span ref={textRef} className="text-[2px] font-bold tracking-widest text-black opacity-0 transition-opacity duration-300" />
    </div>
  );
}
