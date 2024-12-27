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
        maisonMono: ["MaisonNeueMono", "sans-serif"],
        spaceMono: ["Space Mono", "sans-serif"],
      },
      colors: {
        darkGreen: '#097980',
        lemon: '#D2F038',
        babyGreen: '#00AFB5',
        red:"#FF4242"
      },
      backgroundImage: {
        star: "url('./assets/images/webp/hero-star.webp')",
        yellowSection : "url('./assets/images/webp/yellow-bg-section.webp')",
        industry : "url('./assets/images/webp/industry.webp')",
        focused : "url('./assets/images/webp/focused.webp')",
        proprietary : "url('./assets/images/webp/proprietary.webp')",
        actualResult : "url('./assets/images/webp/actual-result-section.webp')",
        contractors : "url('./assets/images/webp/contractors.webp')",
      }
    },
  },
  plugins: [],
}