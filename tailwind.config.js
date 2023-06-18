/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        p: "375px",
        d: "1024px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "rgba(69,29,160,1) ",
        privaryhover: "rgba(52,22,120)",
        button: "#f6f9fc4d",
      },

      fontFamily: {
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        Blue3D: "#1D1D3D",
        BlueFF: "#1A49FF",
        BlueFFhover: "#002DD2",
        primary: "#341678",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        colortopdownBlue1: "#e5f2ff",
        colortopdownGray2: "#441d9f14",
        colorBlueBold: "#451da0",
        colorBlueBoldHover: "#391888",
        colorGrayThin: "#b6b6b8",
        ColorJobItem: " #fff5e7 ",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        18: "18px",
        24: "24px",
      },
    },
  },

  plugins: [],
};
