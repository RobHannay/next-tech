const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {}, // common layout options
      themes: {
        light: {
          layout: {}, // light theme layout options
          colors: {},
          // ...
        },
        dark: {
          layout: {}, // dark theme layout options
          colors: {},
          // ...
        },
      },
    }),
  ],
};
