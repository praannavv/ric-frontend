import materialTailwind from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default materialTailwind({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with the class strategy
  theme: {
    extend: {
      colors: {
        bgColor: {
          DEFAULT: "#EBF3E8", // Default primary color for light mode
          dark: "#1b1f23", // Primary color for dark mode
        },
        fontColor: {
          DEFAULT: "#423F3E", // Default secondary color for light mode
          dark: "white", // Secondary color for dark mode
        },
      },
    },
  },
  plugins: [],
});
