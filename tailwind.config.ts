import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause': '0px 4px 17px 0px #00000008',
      },
      spacing: {
        '6.25': '6.25rem',
        '8.5': '8.5rem',
        '3.75': '3.75rem'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '50': '50',
        '999': '999'
      },
      colors: {
        primary: "#99E39E",
        secondary: "#1DC8CD",
        midnight_text: "#263238",
        muted: "#d8dbdb",
        error: "#CF3127",
        warning: "#F7931A",
        light_grey: "#505050",
        grey: "#F5F7FA",
        dark_grey: "#1E2229",
        border: "#E1E1E1",
        success: "#3cd278",
        section: "#737373",
        darkmode: "#000510",
        darklight: "#0c372a",
        dark_border: "#959595",
        tealGreen: "#477E70",
        charcoalGray: "#666C78",
        deepSlate: "#282C36",
        slateGray: "#2F3543",
      },
      fontSize: {
        '2xs': '0.75rem',
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      backgroundImage: {
        "start": "url('/images/work/bg-start.png')",
        "perk": "url('/images/perks/perk-bg.png')",
      },
      blur: {
        '220': '220px',
        '400': '400px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
      }
    },
  },
  plugins: [],
};
export default config;
