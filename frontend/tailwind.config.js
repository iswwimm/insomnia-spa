/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1280px',
      },
    },
    extend: {
      colors: {
        'insomnia-pink': '#FFD6E8',
        'insomnia-dark': '#1a1a1a',
        'win-gray': '#c0c0c0',
      },
      fontFamily: {
        'snell': ['"Snell Roundhand"', 'cursive'], 
        'helvetica': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'win-out': '2px 2px 0px #ffffff inset, -2px -2px 0px #000000 inset',
        'win-in': '2px 2px 0px #000000 inset, -2px -2px 0px #ffffff inset',
      }
    },
  },
  plugins: [],
}