/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#4a90e2",
        "custom-purple": "#9013fe",
      },
      rotate: {
        180: "180deg",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
