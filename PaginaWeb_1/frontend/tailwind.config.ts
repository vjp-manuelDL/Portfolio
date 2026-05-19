import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Colores oscuros (hero, overlays) */
        jet:  "#0D0D0D",
        card: "#1A1A1A",
        bone: "#F4F4F5",
        ash:  "#71717A",
        cyan: { neon: "#00F2FF" },
        emerald: { neon: "#39FF14" },

        /* Paleta clara profesional */
        page:    "#F5F3EF",
        surface: "#FFFFFF",
        pagealt: "#E8E4DC",
        navy: {
          DEFAULT: "#1B4F8C",
          dark:    "#0F3460",
          light:   "#2A6AB3",
        },
        /* Texto */
        prose:  "#1A1A2E",
        subtle: "#4B5563",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan":    "0 0 20px rgba(0,242,255,0.35), inset 0 0 20px rgba(0,242,255,0.05)",
        "neon-emerald": "0 0 20px rgba(57,255,20,0.35)",
        "navy":         "0 4px 24px rgba(27,79,140,0.18)",
        "card":         "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
      },
      animation: {
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "fade-up":    "fade-up 0.7s ease forwards",
      },
      keyframes: {
        "pulse-neon": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0,242,255,0.4)" },
          "50%":       { boxShadow: "0 0 24px rgba(0,242,255,0.8)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
