const palette = require('./palette.js');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, //darkMode is outdated
  theme: {
    extend: {
      colors: palette,
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    backgroundImage: {
      moon: 'radial-gradient(ellipse at bottom, #DDE6ED 0%, #526D82 100%)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
