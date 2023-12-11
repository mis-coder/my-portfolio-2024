import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "grey-color": "#7B7D7D",
      "dark-fern": "#3A4D39",
      "moss-green": "#4F6F52",
      "sage-green": "#739072",
      "vanilla-cream": "#ECE3CE",
    },
  },
  plugins: [],
};
export default config;
