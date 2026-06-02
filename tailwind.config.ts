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
        mint: "#44c7a1",
        aqua: "#58c6ff",
        sun: "#f7c948",
        coral: "#ff7a7a",
        grape: "#7757d8",
        cloud: "#f7fbff"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(20, 33, 61, 0.14)",
        soft: "0 14px 40px rgba(20, 33, 61, 0.1)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
