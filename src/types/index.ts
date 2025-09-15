// === H-SÉCHEMENT TYPES ===

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  emergencyPhone: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  urgent?: boolean;
}

export interface LocalArea {
  city: string;
  zipCode: string;
  coverageRadius: number; // en km
  description: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  founded: string;
  experience: string;
  certifications: string[];
  interventionTime: string; // "30 minutes"
  availability: string; // "24h/7"
}

export interface SEOPage {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  localBusiness?: LocalBusinessSchema;
}

export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    addressCountry: string;
    addressRegion: string;
    addressLocality: string;
    postalCode?: string;
    streetAddress: string;
  };
  geo?: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  serviceArea: {
    "@type": string;
    name: string;
  }[];
  areaServed: string[];
  hasOfferCatalog: {
    "@type": string;
    name: string;
    itemListElement: Array<{
      "@type": string;
      itemOffered: {
        "@type": string;
        name: string;
        description: string;
      };
    }>;
  };
}

export interface CTAProps {
  variant: 'primary' | 'secondary' | 'urgent';
  size: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}