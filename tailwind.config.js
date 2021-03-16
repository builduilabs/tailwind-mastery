const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      gray: {
        50: "#D6D6D7",
        100: "#DCDDDE",
        200: "#8E9298",
        300: "#72767E",
        350: "#4F545C",
        400: "#3B3C43",
        500: "#35373C",
        600: "#373940",
        700: "#303136",
        800: "#1F2124",
      },
      "light-accent": "rgba(255,255,255,.06)",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
