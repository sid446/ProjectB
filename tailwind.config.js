/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan files for Tailwind classes
  ],
  theme: {
    extend: {fontFamily: {
      'alegreya-sans-sc': ['Alegreya Sans SC', 'sans-serif'],
    },},
  },
  plugins: [],
}
