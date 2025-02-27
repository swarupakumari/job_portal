/** @type {import('tailwindcss').Config} */
module.export = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        "blue": "#3575E2",
      }
    },
  },
  plugins: [],
};
