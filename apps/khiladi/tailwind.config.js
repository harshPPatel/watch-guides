/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

const { join } = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx}'),
    join(__dirname, 'components/**/*.{ts,tsx}'),
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.red[700],
      },
      backgroundImage: {
        hero: "url('/images/khiladi-hero.jpg')",
      },
    },
  },
  plugins: [],
};
