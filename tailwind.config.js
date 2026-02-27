/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bank-blue": "#1a237e",
        "bank-teal": "#00acc1",
        "bank-green": "#00c853",
      },
      fontFamily: {
        verdana: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
