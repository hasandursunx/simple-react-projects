/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-lg": '900px',
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
      colors: {
        "smoke-100": "#dddddd",
        "smoke-200": "#ddd333",
      },
      fontSize: {
        "vw": "vw"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

