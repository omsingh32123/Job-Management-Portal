/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'smooth': '0 2px 4px rgba(0, 0, 0, 0.1), 0 0px 0px rgba(0, 0, 0, 0.06)', // Customize the values as needed
      },
      fontFamily:{
        sans:['Poppins'],
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      },
    },
  },
  plugins: [],
}