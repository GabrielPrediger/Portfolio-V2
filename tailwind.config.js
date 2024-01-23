const palette = require("./palette.js");

module.exports = {
  content: [
    "./source/components/**/*.{html,js,jsx,ts,tsx}",
    "./source/pages/**/*.{html,js,jsx,ts,tsx}",
    "./views/*.html",
  ],
  media: false, //darkMode is outdated
  theme: {
    extend: {
      colors: palette,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
