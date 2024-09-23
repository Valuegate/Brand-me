/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "white-80": "rgba(255, 255, 255, 0.8)",
      "white-50": "rgba(255, 255, 255, 0.5)",
      gray: "rgba(243, 243, 243, 1)",
      "gray-10": "#878993",
      error: "#FF0000",
      black: "#000000",
      "brand": "#1C274D",
      "brand-10": "rgba(0, 174, 239, 0.3)",
      "brand-20": "rgba(28, 39, 76, 0.1)",
      "brand-30": "rgba(28, 39, 76, 0.3)",
      "brand-49": "rgba(28, 39, 76, 0.49)",
      "light-blue": "#00AEEF",
      "light-blue-0": "rgba(0, 174, 239, 0.0)",
      "light-blue-30": "rgba(0, 174, 239, 0.3)",
      "light-blue-50": "rgba(0, 174, 239, 0.5)",
      "light-blue-66": "rgba(0, 174, 239, 0.66)",
      "light-blue-75": "rgba(0, 174, 239, 0.75)",
      "dark-blue": "rgba(28, 39, 77, 1)",
      "role-red-bg": "#FFE9E9",
      "role-orange-bg": "#FFE7D6",
      "role-orange": "#DE7C32",
      "role-green-bg": "#CEEFD9",
      "green-100": "#00A707",
      "faint-border": "#DEDDDD",
      "transparent": "rgba(0, 0, 0, 0)",
    },
    fontFamily: {
      cocogoose: ["Montserrat", "sans-serif"],
      "cocogoose-light": ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: {
        max: "400px",
      },

      md: {
        max: "768px",
      },
    },
    extend: {
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.07)',
        'custom-1': "0 0 20px rgba(0, 0, 0, 0.15)"
      }
      // spacing: {
      //   "8xl": "96rem",
      //   "9xl": "128rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      // transitionProperty: {
      //   height: "height",
      // },
      
    },
  },
  plugins: [],
};
