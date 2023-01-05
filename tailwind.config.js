/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        logo1: "start 10s ease-in-out infinite both",
        logo2: "end 10s ease-in-out infinite both",
      },
      keyframes: {
        "start": {
          "0%": {
            left: "-120%",
          },
          "3%": {
            left: 0,
          },
          "50%": {
            left: 0,
          },
          "55%": {
            left: "-120%",
          },
          "100%": {
            left: "-120%",
          },
        },
        "end": {
          "0%": {
            left: "30%",
          },
          "50%": {
            left: "30%",
          },
          "55%": {
            left: "-94%",
          },
          "97%": {
            left: "-94%",
          },
          "100%": {
            left: "30%",
          },
        },
      },
    },
  },
  plugins: [],
};
