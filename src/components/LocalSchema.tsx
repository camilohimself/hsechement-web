import { LocalBusinessSchema } from '@/types';
import { COMPANY, CONTACT, SERVICES, BASE_URL } from '@/data/site-config';

interface LocalSchemaProps {
  city?: string;
  zipCode?: string;
  specificServices?: string[];
}

export default function LocalSchema({
  city = 'Suisse romande',
  zipCode,
  specificServices
}: LocalSchemaProps) {

  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: city ? `${COMPANY.name} ${city}` : COMPANY.name,
    description: `Service d'assèchement d'urgence ${city ? `à ${city}` : 'en Suisse romande'}. Intervention 24h/7j pour dégâts d'eau, inondation et fuites.`,
    url: BASE_URL,
    telephone: CONTACT.phone,

    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressRegion: "Vaud",
      addressLocality: city,
      ...(zipCode && { postalCode: zipCode }),
      streetAddress: CONTACT.address
    },

    // Heures d'ouverture 24h/7j
    openingHours: [
      "Mo-Su 00:00-23:59"
    ],

    // Zone de service
    serviceArea: [
      {
        "@type": "Place",
        name: "Arc Lémanique"
      },
      {
        "@type": "Place",
        name: "Suisse romande"
      },
      {
        "@type": "Place",
        name: "Canton de Vaud"
      }
    ],

    // Villes desservies
    areaServed: [
      "Lausanne",
      "Montreux",
      "Nyon",
      "Vevey",
      "Yverdon-les-Bains",
      "Morges",
      "Renens",
      "Prilly",
      "Ecublens",
      "Lutry"
    ],

    // Catalogue de services
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services d'assèchement d'urgence",
      itemListElement: (specificServices ?
        SERVICES.filter(service => specificServices.includes(service.id)) :
        SERVICES
      ).map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        }
      }))
    }
  };

  // Ajouter géolocalisation si ville spécifique
  if (city && city !== 'Suisse romande') {
    // Coordonnées approximatives des villes principales
    const coordinates: Record<string, { lat: number; lng: number }> = {
      'Lausanne': { lat: 46.5197, lng: 6.6323 },
      'Montreux': { lat: 46.4312, lng: 6.9107 },
      'Nyon': { lat: 46.3833, lng: 6.2333 },
      'Vevey': { lat: 46.4600, lng: 6.8433 },
      'Yverdon-les-Bains': { lat: 46.7785, lng: 6.6410 },
      'Morges': { lat: 46.5089, lng: 6.4998 },
      'Renens': { lat: 46.5367, lng: 6.5889 }
    };

    if (coordinates[city]) {
      schema.geo = {
        "@type": "GeoCoordinates",
        latitude: coordinates[city].lat,
        longitude: coordinates[city].lng
      };
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}