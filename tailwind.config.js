/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        silver: "#A8BFC9",
        "silver-hover": "#DBE8ED",
        "light-blue": "#31C3BD",
        "light-blue-hover": "#65E9E4",
        "light-yellow": "#F2B137",
        "light-yellow-hover": "#FFC860",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
