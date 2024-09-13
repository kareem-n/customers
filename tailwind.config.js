/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#f9fafc",
        theme: "#0072fa",
        subTextColor: "#f461a6",
        themeHovered: "#4573d8",
      },
    },
  },
  plugins: [],
};
