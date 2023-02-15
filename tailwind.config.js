/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
        blueteal: "#4ddee3",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
