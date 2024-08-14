import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pattern": "repeating-linear-gradient(to right, #000 0 1px, transparent 1px 100%), repeating-linear-gradient(to bottom, #000 0 1px, transparent 1px 100%)",
      },
      backgroundSize: {
        "pattern": "100px 100px",
      },
    },
  },
  plugins: [],
};
export default config;