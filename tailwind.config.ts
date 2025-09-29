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
        // NOUVELLE PALETTE H-SÉCHEMENT - Plus douce et professionnelle
        hsechement: {
          // Couleurs principales
          orange: '#FF9900',     // COULEUR DOMINANTE - Orange chaleureux
          'orange-dark': '#FF6600',  // Orange plus foncé pour gradients
          blue: '#4A90E2',       // BLEU COMPLÉMENTAIRE - Confiance & eau
          'blue-dark': '#357ABD', // Bleu foncé pour accents

          // Rouge UNIQUEMENT pour CTA urgence
          'cta-red': '#E74C3C',  // Rouge moins agressif (vs #D50309)

          // Neutres
          dark: '#2A2D3A',       // Gris foncé textes
          white: '#FFFFFF',      // Blanc arrière-plan
          gray: {
            light: '#F8F9FA',   // Gris clair sections
            medium: '#6B7280',   // Gris texte secondaire
            dark: '#4B5563',     // Gris foncé
          }
        },
        // Palette corporate pour compatibilité
        corporate: {
          dark: '#2A2D3A',
          gray: '#6B7280',
          orange: '#FF9900',
          blue: '#4A90E2',
        },
        'corporate-gray-bg': '#F8F9FA',
        'corporate-orange': '#FF9900',
        'corporate-blue': '#4A90E2',
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
