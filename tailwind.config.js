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
        purple: '#513B56',
        green1: '#D9EE6F',
        green2: '#A7B758',
        green3: '#768041',
        green4: '#44482A',
        costumBlack: '#121113'
      },
      fontFamily: {
        sans: ['Quicksand'], // , 'sans-serif'
        mono: ['Libertinus Mono', 'monospace'], // optional
        sansation: ['"Sansation"', 'sans-serif'],
        encode: ['"Encode Sans Expanded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

