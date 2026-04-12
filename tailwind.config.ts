import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brew: {
          green: {
            50: '#E1F5EE',
            100: '#9FE1CB',
            400: '#1D9E75',
            600: '#0F6E56',
            800: '#085041',
          },
          coral: {
            50: '#FAECE7',
            100: '#F5C4B3',
            400: '#D85A30',
            600: '#993C1D',
            800: '#712B13',
          },
          gray: {
            50: '#F5F5F0',
            100: '#EEECE6',
            200: '#E8E6E0',
            300: '#D0CEC8',
            500: '#888888',
            900: '#1A1A1A',
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
