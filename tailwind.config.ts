/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {
        max: "400px",
      },

      md: {
        max: "768px",
      },
    },
    colors: {
      white: "#FFFFFF",
      "white-80": "rgba(255, 255, 255, 0.8)",
      error: "#FF0000",
      black: "#000000",
      "brand": "#1C274D",
      "brand-30": "rgba(0, 174, 239, 0.3)",
      "light-blue": "#00AEEF",
      "light-blue-30": "rgba(0, 174, 239, 0.3)"
    },
    extend: {
      // spacing: {
      //   "8xl": "96rem",
      //   "9xl": "128rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
