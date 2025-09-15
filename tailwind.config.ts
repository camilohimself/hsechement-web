import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs OSOM d'après CLAUDE.md et dashboard
        osom: {
          primary: '#ffd507', // Jaune OSOM
          secondary: '#70c1a9', // Teal OSOM
        },
        // Urgence (rouge pour CTA mobiles)
        urgent: {
          red: '#dc2626',
          'red-dark': '#b91c1c',
        },
        // Corporate colors
        corporate: {
          dark: '#2d2d2d',
          gray: '#6b7280',
          'gray-light': '#9ca3af',
          'gray-bg': '#f8fafc',
        }
      },
      fontFamily: {
        'cera': ['Cera PRO', 'Arial', 'Helvetica', 'sans-serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'bounce-phone': 'bounce 1s infinite',
        'pulse-urgent': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

export default config