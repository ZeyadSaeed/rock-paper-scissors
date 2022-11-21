/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#1F3757",
        backgroundDark: "#131537",
      },
    },
  },
  plugins: [],
};
