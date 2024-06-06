/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "425px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
