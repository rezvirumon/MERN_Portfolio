/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['winter', 'night'], // Define your themes here
  },
  darkMode: ['class', '[data-theme="night"]'], // Enable dark mode using class and data attribute
}
