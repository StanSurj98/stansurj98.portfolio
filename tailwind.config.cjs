/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      'rich-black': '#0F1922',
      'lightest-darksteel': '#3a5f80',
      'light-darksteel': '#2f4d68',
      'darksteel': '#223844',
      'sky-blue': '#84CEEB',
      'capri': '#5ab9ea',
      'azure': '#007FFF',
      'cobalt': '#0047AB',
      'blue-crayola': '#5680E9',
      'amethyst': '#8860D0',
      'orange': '#ff9248',
      },
      dropShadow: {
        'custom-large':'7px 7px 6px rgba(0, 0, 0, 0.25)',
        'custom-small':'0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'robotoCondensed': ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};