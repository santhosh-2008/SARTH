/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f4fd',
          200: '#bae8fb',
          300: '#7dd6f6',
          400: '#3cbfec',
        },
        aqua: {
          400: '#22c3d6',
          500: '#0ea9bf',
          600: '#0b8a9d',
        },
        leaf: {
          400: '#4ade80',
          500: '#22c55e',
        },
        ink: {
          700: '#1e3a5f',
          800: '#16324a',
          900: '#0f2438',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(14, 116, 144, 0.15)',
        card: '0 2px 12px -2px rgba(14, 116, 144, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.5) inset, 0 4px 20px -4px rgba(14,116,144,0.2)',
      },
      backgroundImage: {
        'aero-gradient': 'linear-gradient(180deg, #eaf7fd 0%, #d8f0fb 40%, #e8f9f3 100%)',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'float-slower': 'float 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
