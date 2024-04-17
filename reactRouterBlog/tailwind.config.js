/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "back-taylor": "url('/src/assets/back-taylor.jpg')",
      },
      opacity: {
        50: "0.5",
      },
    },
    plugins: [],
  },
};
