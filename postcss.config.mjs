/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: "./app",
    },
    autoprefixer: {},
  },
};

export default config;
