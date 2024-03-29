/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "1fr-auto": "1fr auto",
      },
      fontFamily: {
        usace: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        "nav-light-gray": "#d0d0d0",
        "nav-gray": "hsla(0, 0%, 80%, 0.9)",
        "nav-translucent-gray": "hsla(0, 0%, 100%, 0.2)",
        "nav-dark-gray": "rgba(85, 85, 85, 0.98)",
        "nav-black": "#18181b",
        "usace-box-light-gray": "#ededed",
        "usace-box-red": "#de1e2e",
        "footer-black": "#1b1b1b",
        "footer-gray": "#333",
        "footer-light-gray": "#ccc",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
