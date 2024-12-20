/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '770px',
        lg: '1025px'
      },
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        maison: ["Maison Neue", "sans-serif"],
        maisonLight: ["MaisonNeueLight", "sans-serif"],
        maisonMedium: ["MaisonNeueMedium", "sans-serif"],
        maisonBook: ["MaisonNeueBook", "sans-serif"],
        maisonDemi: ["MaisonNeueDemi", "sans-serif"],
      },
      colors: {
        darkGreen: '#097980',
        lemon: '#D2F038'
      },
      backgroundImage: {
        star: "url('./assets/images/webp/hero-star.webp')"
      }
    },
  },
  plugins: [],
}