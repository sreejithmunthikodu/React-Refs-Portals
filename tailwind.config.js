/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#6F4E37',
          light: '#A0826D',
          cream: '#F5F5DC',
        }
      }
    },
  },
  plugins: [],
}