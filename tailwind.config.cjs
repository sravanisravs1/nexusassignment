/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFEF2",
        dark: "#333333",
        dark2: "#252525",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/home-banner.jpg')",
        "bg-small": "url('/src/assets/bg-640.avif')",
      },
      fontFamily: {
        unna: ["Unna", "serif"],
      },
    },
  },
  plugins: [],
};
