/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
	    blue:"#16247C",
	    lightblue:"#1285EF",
	    bgblue:"#F2F0FF",
    },
    extend: {
	    fontFamily:{
		    libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
		    garamond: ['"EB Garamond"', ...defaultTheme.fontFamily.sans]
	    },
    },
  },
  plugins: [],
}
