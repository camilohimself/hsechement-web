import { BASE_URL } from '@/data/site-config'

interface BusinessSchemaProps {
  city?: string
  customServices?: string[]
}

export default function BusinessSchema({ city, customServices }: BusinessSchemaProps) {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}#business`,
    "name": "H-Sèchement Sàrl",
    "alternateName": "H-Sèchement",
    "description": city
      ? `Service d'assèchement d'urgence à ${city}. Intervention 24h/7j pour dégâts d'eau, inondations, et problèmes d'humidité en Suisse romande.`
      : "Service d'assèchement d'urgence 24h/7j en Suisse romande. Spécialistes des dégâts d'eau, inondations, et traitement de l'humidité.",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Route de Daillens 14",
      "addressLocality": "Bettens",
      "postalCode": "1042",
      "addressRegion": "Vaud",
      "addressCountry": "CH"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.6845",
      "longitude": "6.5580"
    },

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "021 882 29 52",
      "contactType": "emergency",
      "availableLanguage": ["French"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },

    "serviceArea": {
      "@type": "Place",
      "name": city ? `${city} et environs` : "Suisse romande",
      "containedInPlace": {
        "@type": "Place",
        "name": "Suisse romande"
      }
    },

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services d'assèchement",
      "itemListElement": (customServices || [
        "Assèchement d'urgence 24h/7j",
        "Traitement dégâts d'eau",
        "Déshumidification professionnelle",
        "Assainissement après inondation",
        "Séchage de bâtiments",
        "Intervention urgence humidité"
      ]).map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "serviceType": "Emergency Water Damage Restoration"
        }
      }))
    },

    "openingHours": "Mo-Su 00:00-23:59",
    "telephone": "021 882 29 52",
    "url": BASE_URL,
    "sameAs": [
      "https://www.youtube.com/channel/UC8Z-XkDRD1rGgwK9WJsDqOg",
      "https://x.com/HSechement",
      "https://www.linkedin.com/company/h-sechement/",
      "https://www.instagram.com/hsechement_ch/",
      "https://www.facebook.com/profile.php?id=61573832616234"
    ],

    "areaServed": [
      {
        "@type": "City",
        "name": "Lausanne"
      },
      {
        "@type": "City",
        "name": "Morges"
      },
      {
        "@type": "City",
        "name": "Nyon"
      },
      {
        "@type": "City",
        "name": "Vevey"
      },
      {
        "@type": "City",
        "name": "Yverdon-les-Bains"
      },
      {
        "@type": "City",
        "name": "Montreux"
      },
      {
        "@type": "Place",
        "name": "Gros-de-Vaud"
      }
    ],

    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Service d'assèchement d'urgence",
        "serviceType": "Emergency Water Damage Restoration",
        "provider": {
          "@type": "LocalBusiness",
          "name": "H-Sèchement Sàrl"
        }
      },
      "availability": "https://schema.org/InStock",
      "businessFunction": "https://purl.org/goodrelations/v1#Repair"
    },

    // Données de performance pour améliorer la trouvabilité
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "worstRating": "1",
      "bestRating": "5"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData, null, 2)
      }}
    />
  )
}