/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['univers1','univers2','univers3', 'sans-serif'],
      },
      backgroundImage: {
        'insta': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
