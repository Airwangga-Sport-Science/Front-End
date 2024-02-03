const {nextui} = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/components/slider.js", 
    "./node_modules/@nextui-org/theme/dist/components/spinner.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      }, 
    },
  },
  plugins: [nextui()],

}
