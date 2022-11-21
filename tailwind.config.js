/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#1F3757",
        backgroundDark: "#131537",
        lightWhite: "rgba(255, 255, 255, 0.289199);",
        lightBlue: "#2A45C2",
        lightGray: "#565468",
      },
      fontFamily: {
        barlowSemiCondensed: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
