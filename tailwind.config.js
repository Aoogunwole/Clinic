/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        work: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#1E0C42",
        secondary: "#AEC7E8",
        tertiary: "#F0077B",
        gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
}
