/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      // Core colors
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      
      // Brand colors
      primary: '#3B82F6',      // Bleu primaire
      accent: '#F2A43B',        // Orange
      background: '#F5F5F5',    // Fond blanc
      
      // Neutral/light variants
      light: '#F8F9FA',
      'light-gray': '#E5E7EB',
      'gray': '#9CA3AF',
      'dark-gray': '#6B7280',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        // Alias for backward compat
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
