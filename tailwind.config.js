/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          bg: '#080808',         // Deep Dark background
          surface: '#111111',    // Dark card surface
          elevated: '#161616',   // Slightly elevated card
          border: '#242424',     // Subtle dark border
          borderLight: '#383838',// Visible divider
          borderFocus: '#FFFFFF',// Inverted focus border
          text: '#FFFFFF',       // Stark white text
          muted: '#8E8E8E',      // Muted secondary text
          dim: '#555555',        // Dim text & hints
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', '"Be Vietnam Pro"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '0px',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
