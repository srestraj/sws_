/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', "serif-pro"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        light: {
          // primary: "white",
          // secondary: "black",
          // green100:"#435A65",
          white10: "#F9FAFB",
          white20: "#F6F9F9",
          green10: "#E3EAED",
          green20: "#304E5E",
          green30: "#237688",
          green40: "#223844",
          grey20: "#435A65",
          black30: "#1F323D",
          yellow20: "#D3F375",
          // yellow30:"#D3F375"
        },
        dark: {
          primary: "black",
          secondary: "white",
        },
      },
    },
  },
  plugins: [],
};
