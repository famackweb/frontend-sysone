/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          400: "#E25C5C",
          700: "#FF0404D9",
        },

        gray: {
          50: "#D9D9D9",
          100: "#BABABA",
          200: "#E5E5E5",
          400: "#5E5E5E",
          500: "#99A4AF",
          600: "#808080",
          700: "#333333",
          800: "#242424",
        },
        cyan: {
          50: "#E6F3F4",
          600: "#00858F",
        },
        green: {
          50: "#B5E6D1",
          400: "#37E688",
          500: "#33B333",
          600: "#00A000",
          700: "#1C7C1C",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
