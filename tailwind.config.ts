import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "var(--theme)",
      },
      backgroundImage: {
        card: "var(--card-gradient)",
      },
      boxShadow: {
        card: "var(--card-shadow)",
      },
      spacing: {
        "page-container": "var(--page-container-width)",
      },
    },
  },
  plugins: [],
} satisfies Config;
