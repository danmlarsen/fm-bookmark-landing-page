/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: ["0.8125rem", "1.0625rem"],
      xs: ["0.875rem", "1.75rem"],
      sm: ["0.9375rem", "1.5625rem"],
      xl: ["1.125rem", "1.75rem"],
      "2xl": ["1.5rem", "3.25rem"],
      "3xl": ["2rem", "3.25rem"],
      "5xl": ["3rem", "3.25rem"],
    },
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
        transparentBlue: "rgba(73, 93, 207, 0.2001)",
      },
      screens: {
        lg: "75rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "6xl": "69.125rem",
        xl: "33.75rem",
      },
      boxShadow: {
        md: "0 8px 8px -4px",
        lg: "0 10px 20px -5px",
      },
    },
  },
  plugins: [],
};
