/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bb86fc",
        primaryVariant: "#3700b3",
        secondary: "#03dac5",
        secondaryVariant: "#018786",
        secondaryDarkVariant: "#125e5e",
        background: "#121212",
        black: "#000000",
        textHighEmphasis: "#ffffff86",
      }
    },
  },
  plugins: [],
}