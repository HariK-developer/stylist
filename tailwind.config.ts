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
      fontFamily : {
        noto: ['var(--font-base-noto)'],
        notoSubFont: ['var(--font-notSans-italic)'],
        notoMedium: ['var(--font-notSans-medium)'],
        notoRegular: ['var(----font-notSans-regular)']
      },
      boxShadow: {
        'custom': '0 0 0 4px #4D4D4D, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
