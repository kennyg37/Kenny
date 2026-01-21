/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'void-black': '#0a0a0a',
        'tech-gray': '#262626',
        'electric-amber': '#ff9d00',
        'terminal-green': '#00ff7f',
        'off-white': '#F0F0F0',

        // Light Mode Palette
        'paper-white': '#f5f5f5',
        'ink-black': '#1a1a1a',
        'subtle-gray': '#e5e5e5',
      },
      fontFamily: {
        serif: ['"Inter"', 'sans-serif'], // Replaced Playfair with Inter for "System Labels"
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        // Noise removed as per "clean void aesthetic"
      }
    },
  },
  plugins: [],
}