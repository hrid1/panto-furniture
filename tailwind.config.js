/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E58411",
        secondary: "#1e1e1e",
        "secondary-bg": "#F7f7f7",
      },
      backgroundImage: {
        banner: "url('./src/assets/banner.png')",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
