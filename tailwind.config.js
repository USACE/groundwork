/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'gw-',
  content: [
    './index.html',
    './lib/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
      },
      fontFamily: {
        usace: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'nav-light-gray': '#d0d0d0',
        'nav-gray': 'hsla(0, 0%, 80%, 0.9)',
        'nav-translucent-gray': 'hsla(0, 0%, 100%, 0.2)',
        'nav-black': '#18181b',
        'nav-dark-gray': 'rgba(51,51,51,.95)',
        'usace-box-light-gray': '#ededed',
        'usace-box-red': '#de1e2e',
        'footer-black': '#1b1b1b',
        'footer-gray': '#333',
        'footer-light-gray': '#ccc',
        'usace-black': '#18181b',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
