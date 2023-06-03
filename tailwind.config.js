/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#f2f0f5",
        },
        black: {
          light: "#716d75",
          DEFAULT: "#403e42",
          dark: "#111112",
        },
        secondary: {
          light: "#c18ef5",
          DEFAULT: "#9b42f5",
          dark: "#381859",
        },
      },
    },
  },
  plugins: [],
};
