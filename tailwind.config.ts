import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#050505",
          "bg-alt": "#101010",
          card: "#171717",
          surface: "#1D1D1D",
          text: "#F5F3EF",
          "text-muted": "#B6B1A8",
          brass: "#B08D57",
          "brass-dark": "#8D6E45",
          "warm-light": "#FFF6E8",
        },
        // Keeping premium for legacy if needed, but primary will be luxury
        premium: {
          white: "#F9F8F6",
          ivory: "#F2EFE9",
          grey: "#D1D1D1",
          graphite: "#2C2C2C",
          brass: "#C5A059",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
