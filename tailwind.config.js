/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          500: "hsl(231, 69%, 60%)",
          900: "hsl(229, 31%, 21%)",
        },
        red: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
      },
      maxWidth: {
        "8xl": "90rem",
        "6xl": "69.125rem",
        xl: "33.75rem",
      },
    },
  },
  plugins: [],
};
