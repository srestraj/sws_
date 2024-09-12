/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', "serif-pro"],
      inter: ["inter"],
    },
    colors: {
      light: {
        primary: "white",
        secondary: "black",
      },
      dark: {
        primary: "black",
        secondary: "white",
      },
    },
    extend: {},
  },
  plugins: [],
};
