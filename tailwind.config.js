/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
      "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
      "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
      "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    ],
  theme: {
    extend: {
      colors: {
        customBlack: "#121113",
        customGreen: "#A8D8AD",
        customWhite: "#F6FFF8",
        customGray: "#A8B69F",
        customAccent: "#D8E1D0",
      },
      fontFamily: {
        sans: ['Quicksand'], // , 'sans-serif'
        mono: ['Libertinus Mono', 'monospace'], // optional
        sansation: ['"Sansation"', 'sans-serif'],
        encode: ["Encode Sans Expanded", 'sans-serif'],
      },
    },
  },
  corePlugins: {
    // Stelle sicher, dass opacity nicht deaktiviert ist
    opacity: true,
  },
  plugins: [],
}

