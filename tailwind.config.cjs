/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
	    darkblue:"#081349",
	    blue:"#16247C",
	    lightblue:"#1285EF",
	    bgblue:"#F2F0FF",
	    black:"#1D1D1B",
	    red:"#ef42f5",
    },
    extend: {
	    fontFamily:{
		    libre: ['"Libre Baskerville"'],
		    garamond: ['"EB Garamond"'],
		    inconsolata:['"Inconsolata"'],
		    roboto:['"Roboto"']
	    },
    },
  },
  plugins: [],
}
