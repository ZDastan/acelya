/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature:["Great Vibes"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    "@babel/plugin-transform-private-property-in-object"
  ],
}

