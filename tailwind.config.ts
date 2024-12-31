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
        secondary: "#28333e", // Near black color
        text: "#151f27", // Text color
        accent: "#1506ed", // Unique color
        border: "#d6e0ea", // Border color
        btn_color: "#04ba26", // Button color
      },
    },
  },
  plugins: [],
} satisfies Config;
