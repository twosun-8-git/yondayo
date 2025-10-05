/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: (() => {
        const spacing = {};
        // 0から250まで0.25刻みで生成（0px〜1000px）
        for (let i = 0; i <= 250; i += 0.25) {
          const pxValue = i * 4; // 4pxを基準値として計算
          spacing[i.toString()] = `${pxValue}px`;
        }
        return spacing;
      })(),
      boxShadow: {
        original: "0 0 2px 0 rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        sans: ["System", "sans-serif"],
      },
      fontSize: {
        xxs: 8,
        xs: 10,
        sm: 12,
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
          100: "#FAFAFA",
          200: "#EEEEEE",
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
        white: {
          700: "#FFFFFF",
        },
      },
    },
  },

  plugins: [],
};
