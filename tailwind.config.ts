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
      },
      colors: {
        "outline-color": "rgba(77, 40, 33,0.4)",
        "main-color": "rgb(77, 40, 33)",
        "secondary-color": "linear-gradient(90deg,#c7929a,#d27303)",
        "background-main":
          "linear-gradient(360deg,rgba(var(--background-start-rgb)) 0%,rgba(var(--background-end-rgb)) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
