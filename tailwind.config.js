// eslint-disable-next-line @typescript-eslint/no-var-requires
const palette = require('./palette.js')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  media: false, // darkMode is outdated
  theme: {
    extend: {
      colors: palette,
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    backgroundImage: {
      all: 'linear-gradient(0deg,hsl(247deg 38% 30%) 0%,hsl(250deg 33% 16%) 47%,hsl(0deg 0% 0%) 100%)',
      mid: 'radial-gradient(at center, #37306B, #66347F)',
      complement:
        'linear-gradient(0deg,hsl(280deg 42% 35%) 0%,hsl(281deg 35% 18%) 47%,hsl(0deg 0% 0%) 100%)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
