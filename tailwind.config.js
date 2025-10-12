/** @type {import('tailwindcss').Config} *//** @type {import('tailwindcss').Config} */

export default {module.exports = {

  content: [  content: [

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./component/**/*.{js,ts,jsx,tsx,mdx}",    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    "./app/**/*.{js,ts,jsx,tsx,mdx}",    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],  ],

  darkMode: "class",  darkMode: "class",

  theme: {  theme: {

    extend: {    extend: {

      colors: {      colors: {

        primary: "#18306C",        primary: "#18306C",

        secondary: "#2B61EA",        secondary: "#2B61EA",

      },      },

      fontFamily: {      fontFamily: {

        airbnb: ["var(--font-airbnb)", "Airbnb Cereal", "sans-serif"],        airbnb: ["var(--font-airbnb)", "Airbnb Cereal", "sans-serif"],

      },      },

    },    },

  },  },

  plugins: [],  plugins: [],

};};
