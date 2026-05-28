import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fafaf8',
        bg2: '#f4f2ee',
        surface: '#ffffff',
        border: '#e8e5df',
        border2: '#d4cfc6',
        ink: '#1a1814',
        ink2: '#5a5650',
        ink3: '#9a958e',
        accent: '#3d5afe',
        green: '#1a7a5e',
        'green-bg': '#eef7f4',
        'green-border': '#b8ddd4',
        red: '#c0392b',
        'red-bg': '#fdf3f2',
        'red-border': '#f0c8c4',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        container: '1080px',
        sm: '680px',
      },
    },
  },
  plugins: [],
}

export default config
