/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {

      fontFamily: {
        sans: ['"PT Sans"', "serif-pro"],
        inter: ["inter"],
      },
      colors: {
        light: {
          primary: "white",
          secondary: "black",
          green100:"#435A65"
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
