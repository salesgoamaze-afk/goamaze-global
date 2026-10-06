import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B2A4A",      // Deep Blue (base canvas)
          secondary: "#0F3863",    // Secondary Deep Blue
          footer: "#07192C",       // Footer Deep Blue
          light: "#F3F7FB",        // Light Blue Background
        },
        brand: {
          blue: "#3B82F6",         // Primary GoAmaze Blue
          blueHover: "#2563EB",
          blueLight: "#60A5FA",
          deep: "#0B2A4A",         // Deep Blue
          lightBg: "#F3F7FB",      // Light Blue Background
          charcoal: "#1F2933",     // Charcoal
          softBorder: "#E5EAF0",   // Soft Border
          white: "#FFFFFF",
        },
        gold: {
          turmeric: "#D89B16",     // Turmeric Gold
          warm: "#F2B544",         // Warm Gold
          light: "#FEF3C7",
          hover: "#B45309",
        },
        deepBlue: "#0B2A4A",
        turmericGold: "#D89B16",
        warmGold: "#F2B544",
        lightBlueBg: "#F3F7FB",
        charcoal: "#1F2933",
        softBorder: "#E5EAF0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
        script: ["var(--font-script)", "Dancing Script", "cursive", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(59, 130, 246, 0.25)',
        'gold-glow': '0 0 35px rgba(216, 155, 22, 0.25)',
        'card': '0 8px 32px rgba(11, 42, 74, 0.45)',
        'btn': '0 8px 24px rgba(59, 130, 246, 0.35)',
        'btn-gold': '0 8px 24px rgba(216, 155, 22, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
