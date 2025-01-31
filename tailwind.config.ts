import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
        black: {
          DEFAULT: "#000",
          100: "#191A23",
        },
        gray: {
          10: "#f3f3f3",
        },
        main: "#B9FF66",
      },
      fontFamily: {
        spaceGrotesk: [
          "var(--font-space-grotesk)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      dropShadow: {
        bold: "0 5px 0 #191A23",
      },
    },
  },
  plugins: [],
} satisfies Config;
