import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      zinc: colors.zinc,
      red: colors.red,
      orange: colors.orange,
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      titan: ["var(--font-titan)"],
    },
  },
  plugins: [],
};
export default config;
