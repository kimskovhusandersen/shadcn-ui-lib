const { fontFamily } = require("tailwindcss/defaultTheme");
const { withTV } = require("tailwind-variants/transformer");

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f5ee",
          100: "#efe6d2",
          200: "#e0cea8",
          300: "#cdae77",
          400: "#bf9454",
          500: "#af7f43",
          600: "#966538",
          700: "#794c2f",
          800: "#66402d",
          900: "#58372b",
          950: "#321c16",
        },
        secondary: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1bbc8",
          400: "#8695aa",
          500: "#64748b",
          600: "#526077",
          700: "#434e61",
          800: "#3a4252",
          900: "#343a46",
          950: "#23272e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
