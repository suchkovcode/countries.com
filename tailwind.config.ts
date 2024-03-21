import type { Config } from "tailwindcss";

export default {
   darkMode: "class",
   content: ["./src/**/*.vue"],
   theme: {
      screens: {
         "xs": "400px",
         "sm": "576px",
         "md": "768px",
         "lg": "992px",
         "xl": "1280px",
         "2xl": "1366px",
         "3xl": "1566px",
         "4xl": "1780px",
      },
      fontFamily: {
         Inter: ["Inter"],
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "15px",
         },
      },
   },
} satisfies Config;
