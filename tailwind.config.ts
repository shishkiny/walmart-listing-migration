import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 24online brand — dark core */
        bg: "var(--bg)",
        "bg-surface": "var(--bg-surface)",
        "bg-card": "var(--bg-card)",
        border: "var(--border)",
        "border-bright": "var(--border-bright)",
        text: "var(--text)",
        muted: "var(--muted)",
        "muted2": "var(--muted2)",

        /* 24online accent — gold */
        gold: "var(--gold)",
        "gold-dim": "var(--gold-dim)",

        /* Walmart palette */
        "wm-blue": "var(--wm-blue)",
        "wm-blue-light": "var(--wm-blue-light)",
        "wm-blue-dim": "var(--wm-blue-dim)",
        "wm-spark": "var(--wm-spark)",
        "wm-spark-dim": "var(--wm-spark-dim)",

        /* Semantic */
        "success": "var(--success)",
        "success-dim": "var(--success-dim)",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)"],
        inter: ["var(--font-inter)"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "glow": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scan": "scan 2s ease-in-out infinite",
        "typing": "typing 1.5s steps(30) forwards",
        "blink": "blink 1s step-end infinite",
        "progress": "progress 2s ease-out forwards",
        "score-fill": "scoreFill 1.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 113, 220, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 113, 220, 0.4)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(100%)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        progress: {
          from: { width: "0%" },
          to: { width: "var(--progress-to)" },
        },
        scoreFill: {
          from: { strokeDashoffset: "283" },
          to: { strokeDashoffset: "var(--score-offset)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      borderRadius: {
        card: "16px",
        button: "12px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};
export default config;
