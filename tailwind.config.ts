import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Unbounded", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        primary: "#A78875",
        onPrimary: "#FAF9F5",
        surface: "#FAF9F5",
        onSurface: "#433E3F",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
