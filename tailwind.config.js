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
            opacity: 0,
          },
          "3%": {
            opacity: 1,
          },
          "50%": {
            opacity: 1,
          },
          "55%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
          },
        },
        "end": {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0,
          },
          "53%": {
            opacity: 1,
          },
          "95%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
