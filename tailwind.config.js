/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        p: "375px",
        d: "1024px",
      },

      backgroundImage: {},
      backgroundColor: {},

      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        redPrimmary: "#ed1b2e",
      },
      fontSize: {
        content: "48px",
        normal: "18px",
      },
    },
  },

  plugins: [],
};
