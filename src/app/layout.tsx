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
    siteName: 'H-Séchement',
    locale: 'fr_CH',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'H-Séchement - Assèchement urgence Suisse romande',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [`${BASE_URL}/images/og-image.jpg`],
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
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/CeraPRO-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/CeraPRO-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch pour les domaines externes */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics - À configurer */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
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
              "name": "H-Séchement",
              "url": BASE_URL,
              "logo": `${BASE_URL}/images/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+41 79 123 45 67",
                "contactType": "emergency",
                "availableLanguage": ["French"],
                "serviceArea": {
                  "@type": "Place",
                  "name": "Suisse romande"
                }
              },
              "sameAs": [
                // Réseaux sociaux si applicable
              ]
            })
          }}
        />
      </body>
    </html>
  )
}