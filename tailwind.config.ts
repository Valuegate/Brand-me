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
      error: "#FF0000",
      "brand-me": "#1C274D",
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
