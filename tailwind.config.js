/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#e03",
      white: "#fff",
      black: "#000",
      hover: "#be0129",
      text: "#6b6b6b",
    },
  },
  plugins: [],
};
