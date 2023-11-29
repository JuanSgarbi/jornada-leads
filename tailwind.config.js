const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#033C49',
        secondary: '#02FFFF',
        black: '#262626',
        gray1: '#ACB1B5',
        gray2: '#F5F4F4',
        white: '#FBFBFB',
        success: 'rgb(47, 202, 117)',
        fail: 'rgb(227, 98, 98)'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

