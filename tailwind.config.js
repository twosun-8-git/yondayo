/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: {
        app: 14,
        button: 44,
      },
      boxShadow: {
        original: "0 0 2px 0 rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        sans: ["System", "sans-serif"],
      },
      fontSize: {
        xs: 8,
        s: 10,
        base: 14,
        m: 16,
        l: 20,
        xl: 24,
      },
      colors: {
        black: {
          900: "#444444",
        },
        blue: {
          500: "#81D3F3",
          700: "#60C6F0",
        },
        gray: {
          100: "#fafafa",
          200: "#eeeeee",
          300: "#C6C6C6",
          500: "#999999",
          700: "#666666",
        },
        red: {
          700: "#FA7777",
        },
        yellow: {
          700: "#FFD497",
        },
      },
    },
  },

  plugins: [],
};
