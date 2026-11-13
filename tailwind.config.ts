import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F6F1E9",
          linen: "#F6F1E9",
          light: "#FAF7F2",
          dark: "#EFE8DC",
        },
        sand: {
          DEFAULT: "#E9E0D1",
          warm: "#E9E0D1",
        },
        oat: {
          DEFAULT: "#D4C8B5",
          stone: "#D4C8B5",
        },
        charcoal: {
          DEFAULT: "#2B2723",
          umber: "#2B2723",
          deep: "#1C1916",
        },
        taupe: {
          DEFAULT: "#6B635A",
          soft: "#82796F",
        },
        moss: {
          DEFAULT: "#4F5B4A",
          deep: "#4F5B4A",
          dark: "#3B4537",
          light: "#63705C",
        },
        sage: {
          DEFAULT: "#8A9A83",
          soft: "#9FB098",
        },
        walnut: {
          DEFAULT: "#8B6B4E",
          warm: "#8B6B4E",
          dark: "#6F5238",
        },
        clay: {
          blush: "#DDBFAE",
        },
        dusk: {
          umber: "#3A332C",
        },
        warmglow: {
          DEFAULT: "#F3D9A8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-dmsans)", "DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        button: "0.12em",
      },
      borderRadius: {
        subtle: "2px",
      },
      boxShadow: {
        calm: "0 8px 30px rgba(43, 39, 35, 0.06)",
        card: "0 14px 40px rgba(43, 39, 35, 0.08)",
        floating: "0 20px 50px rgba(43, 39, 35, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

