import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14213d",
        mint: "#238b7b",
        aqua: "#69a9bf",
        sun: "#eabf52",
        coral: "#d86f5f",
        grape: "#66548f",
        cloud: "#f3f7f7"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(20, 33, 61, 0.12)",
        soft: "0 10px 30px rgba(20, 33, 61, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
