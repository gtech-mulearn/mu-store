/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#132972'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["jakarta-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
