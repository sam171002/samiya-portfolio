import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0F",
        surface: "#14141C",
        "accent-start": "#7C3AED",
        "accent-end": "#22D3EE",
        primary: "#F5F5F7",
        muted: "#9CA3AF",
        "border-subtle": "#26262F",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "section-title": [
          "clamp(1.75rem, 4vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        body: ["1.0625rem", { lineHeight: "1.7" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 7rem)",
        "section-sm": "clamp(3rem, 8vw, 5rem)",
      },
      maxWidth: {
        content: "72rem",
        narrow: "42rem",
      },
      boxShadow: {
        "card-hover":
          "0 8px 32px -8px rgba(124, 58, 237, 0.25), 0 4px 16px -4px rgba(34, 211, 238, 0.15)",
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.4)",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
        "accent-gradient-subtle":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        reveal: "600ms",
        hover: "200ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
