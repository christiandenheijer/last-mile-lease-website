import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        navy: {
          50: "#eef6f8",
          100: "#d9ebef",
          200: "#b3d7df",
          300: "#83bdca",
          400: "#4f9caf",
          500: "#1d7791",
          600: "#0c5b73",
          700: "#003f5c",
          800: "#00304a",
          900: "#012333",
          950: "#00141d",
        },
        green: {
          50: "#f1faf6",
          100: "#ddf3e9",
          200: "#bce7d3",
          300: "#8fd4b7",
          400: "#5fc198",
          500: "#3fa87f",
          600: "#2f8c68",
          700: "#277256",
          800: "#215c46",
          900: "#1c4b3a",
          950: "#0e2b21",
        },
        mist: {
          50: "#fbfcfc",
          100: "#f4f6f7",
          200: "#eceff0",
          300: "#dde2e4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(0, 20, 29, 0.06), 0 8px 24px -8px rgba(0, 20, 29, 0.08)",
        card: "0 1px 2px rgba(0, 20, 29, 0.04), 0 12px 32px -12px rgba(0, 20, 29, 0.12)",
        lift: "0 20px 48px -16px rgba(0, 20, 29, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        wave: "wave 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
