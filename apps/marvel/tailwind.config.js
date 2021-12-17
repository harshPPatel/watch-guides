const { join } = require('path');

console.log(join(__dirname, 'pages/**/*.{ts,tsx}'));

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx}'),
    join(__dirname, 'components/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
