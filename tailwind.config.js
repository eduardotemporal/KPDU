/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add Inter font
      },
      colors: {
      'kpdu-background': '#0b0f12',
      'kpdu-card': '#111827',
      'kpdu-accent': '#176a49',
      'kpdu-text-light': '#ffffff',
      'kpdu-text-dark': '#9ca3af',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
