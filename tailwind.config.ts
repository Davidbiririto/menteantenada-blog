import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#07111f',
        night: '#09182d',
        ocean: '#0f3a7d',
        cyanx: '#00d9ff'
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 217, 255, 0.18)'
      }
    }
  },
  plugins: []
}
export default config
