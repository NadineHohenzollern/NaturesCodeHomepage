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
        brightGreen: '#BCE784',
        green: '#5DD39E',
        blue: '#348AA7',
        darkBlue: '#525174',
        purple: '#513B56'
      },
      fontFamily: {
        sans: ['Quicksand'], // , 'sans-serif'
        mono: ['Libertinus Mono', 'monospace'], // optional
      },
    },
  },
  plugins: [],
}

