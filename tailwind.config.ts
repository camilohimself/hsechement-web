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
        // Couleurs exactes H-Séchement (extraites du site original)
        hsechement: {
          red: '#D50309',        // Rouge bouton CTA original
          orange: '#FF9900',     // Orange navigation original
          dark: '#2A2D3A',       // Gris foncé header exact (plus foncé pour logo)
          white: '#FFFFFF',      // Blanc arrière-plan
          gray: {
            light: '#F8F9FA',   // Gris clair sections
            medium: '#6B7280',   // Gris texte secondaire
          }
        },
        // Palette corporate utilisée dans les composants (classes text-corporate-*, bg-corporate-*)
        corporate: {
          dark: '#2A2D3A',       // Aligné avec hsechement-dark
          gray: '#6B7280',
        },
        'corporate-gray-bg': '#F8F9FA',
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
