/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        estate: {
          bg: "#0B0C0E",
          card: "#131518",
          cardHover: "#181B20",
          border: "#24262B",
          borderLight: "rgba(255, 255, 255, 0.12)",
          gold: "#D4AF37",
          goldLight: "#E8C86A",
          goldMuted: "#C5A059",
          alabaster: "#F5F5F0",
          muted: "#9CA3AF",
        },
        primary: {
          DEFAULT: "#C5A059",
          gold: "#D4AF37",
          dark: "#A6823C",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
