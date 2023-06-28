/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#4169E1",
        Secondary: "#FFD700",
        Accent: "#FFFFFF",
        Neutral: "#8A2BE2",
        Info: "#67e8f9",
        Success: "#4ade80",
        Warning: "#FFC700",
        Error: "#F00003",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],
};
