import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PhoneSticky from '@/components/PhoneSticky'
import { DEFAULT_SEO, BASE_URL } from '@/data/site-config'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  keywords: DEFAULT_SEO.keywords,

  // Open Graph
  openGraph: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    url: BASE_URL,
    siteName: 'H-Sèchement',
    locale: 'fr_CH',
    type: 'website',
    // Images OG temporairement supprimées pour éviter 404s
  },

  // Twitter Card optimisé
  twitter: {
    card: 'summary',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
  },

  // Autres métadonnées
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-verification-code', // À remplacer par le vrai code
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      'fr-CH': BASE_URL,
    },
  },

  other: {
    'google-site-verification': 'your-google-verification-code',
    'format-detection': 'telephone=yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-CH">
      <head>
        {/* Fonts optimisées avec fallback système pour performance */}

        {/* DNS Prefetch optimisé */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics - Temporairement désactivé pour optimisation performance */}
      </head>

      <body className={`${inter.className} antialiased`}>
        {/* Structure principale */}
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        {/* CTA téléphone sticky */}
        <PhoneSticky />

        {/* Schema.org pour l'entreprise globale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "H-Sèchement Sàrl",
              "url": BASE_URL,
              "logo": `${BASE_URL}/images/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "021 882 29 52",
                "contactType": "emergency",
                "availableLanguage": ["French"],
                "serviceArea": {
                  "@type": "Place",
                  "name": "Suisse romande"
                }
              },
              "sameAs": [
                "https://www.youtube.com/channel/UC8Z-XkDRD1rGgwK9WJsDqOg",
                "https://x.com/HSechement",
                "https://www.linkedin.com/company/h-sechement/",
                "https://www.instagram.com/hsechement_ch/",
                "https://www.facebook.com/profile.php?id=61573832616234"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}