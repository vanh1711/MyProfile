/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFFDF5',        // Cream paper background
          ink: '#000000',       // Pure black
          accent: '#FF6B6B',    // Hot Red
          secondary: '#FFD93D', // Vivid Yellow
          muted: '#C4B5FD',     // Soft Violet
          white: '#FFFFFF',
          green: '#4ADE80',
          blue: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Be Vietnam Pro"', '"Outfit"', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Be Vietnam Pro"', '"Outfit"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo': '8px 8px 0px 0px #000000',
        'neo-lg': '12px 12px 0px 0px #000000',
        'neo-xl': '16px 16px 0px 0px #000000',
        'neo-white': '8px 8px 0px 0px #FFFFFF',
        'neo-accent': '8px 8px 0px 0px #FF6B6B',
        'neo-secondary': '8px 8px 0px 0px #FFD93D',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}
