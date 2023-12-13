/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      },
    extend: {
      colors: {
        'main': '#CF9645'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      fontFamily: {
        'urbanist': ['Urbanist', sans-serif],
      },
    },
  },
  plugins: [],
}

