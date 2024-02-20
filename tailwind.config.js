/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        'primary': '#fcef4f',
        'primary-hover': '#f5e645'
      }
    },
  },
  plugins: [],
}