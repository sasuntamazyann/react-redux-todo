// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".h-1-d": {
          fontWeight: 700,
          fontSize: 88,
          lineHeight: "120%",
        },
        ".h-2-d": {
          fontWeight: 700,
          fontSize: 64,
          lineHeight: "120%",
        },
        ".h-3-d": {
          fontWeight: 700,
          fontSize: 48,
          lineHeight: "120%",
        },
        ".h-4-d": {
          fontWeight: 500,
          fontSize: 32,
          lineHeight: "120%",
        },
        ".h-5-d": {
          fontWeight: 500,
          fontSize: 24,
          lineHeight: "120%",
        },
        ".h-6-d": {
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "120%",
        },
        ".h-7-d": {
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "120%",
        },
        ".p-large-d": {
          fontWeight: 400,
          fontSize: 24,
          lineHeight: "120%",
        },
        ".p-d": {
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "120%",
        },
        ".p-small-d": {
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "120%",
        },
        ".b-d": {
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "120%",
        },
        ".b-large-d": {
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "120%",
        },
        ".b-small-d": {
          fontWeight: 500,
          fontSize: 13.25,
          lineHeight: "120%",
          letterSpacing: "-1%",
        },
        ".link-d": {
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "120%",
          textDecoration: "underline",
        },

        /* -----------mobile----------- */

        ".h-1-m": {
          fontWeight: 700,
          fontSize: 40,
          lineHeight: "120%",
        },
        ".h-2-m": {
          fontWeight: 700,
          fontSize: 32,
          lineHeight: "120%",
        },
        ".h-3-m": {
          fontWeight: 700,
          fontSize: 28,
          lineHeight: "120%",
        },

        ".h-4-m": {
          fontWeight: 500,
          fontSize: 24,
          lineHeight: "120%",
        },

        ".h-5-m": {
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "120%",
        },

        ".h-6-m": {
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "120%",
        },

        ".h-7-m": {
          fontWeight: 500,
          fontSize: 8,
          lineHeight: "120%",
        },

        ".p-m": {
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "120%",
        },
        ".p-small-m": {
          fontWeight: 400,
          fontSize: 13.25,
          lineHeight: "120%",
        },

        ".b-large-m": {
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "120%",
        },

        ".b-small-m": {
          fontWeight: 500,
          fontSize: 13.25,
          lineHeight: "120%",
        },

        ".link-m": {
          fontWeight: 700,
          fontSize: 13.25,
          lineHeight: "120%",
          textDecoration: "underline",
        },
      });
    }),
  ],
};
