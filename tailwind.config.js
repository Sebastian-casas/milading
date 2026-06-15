/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0D',
        panel: '#141417',
        line: '#262629',
        bone: '#F5F3EE',
        smoke: '#9C9CA3',
        magenta: '#EF00FF',
        'magenta-dim': '#9A0AA8',
      },
      fontFamily: {
        display: ['"Permanent Marker"', 'cursive'],
        head: ['"Anton"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
