import { ContactInfo, Service, LocalArea, CompanyInfo, Testimonial } from '@/types';

// === INFORMATIONS CONTACT ===
export const CONTACT: ContactInfo = {
  phone: '021 882 29 52',
  emergencyPhone: '021 882 29 52',
  email: 'contact@hsechement.ch',
  address: 'Route de Daillens 14, 1042 Bettens'
};

// === INFORMATIONS ENTREPRISE ===
export const COMPANY: CompanyInfo = {
  name: 'H-Sèchement Sàrl',
  description: 'Spécialiste de l\'assèchement d\'urgence en Suisse romande. Intervention rapide 24h/24, 7j/7 pour tous vos dégâts d\'eau.',
  founded: '2020',
  experience: '5+ ans',
  certifications: [
    'Certification professionnelle assèchement',
    'Agréé assurances',
    'Formation continue BTP'
  ],
  interventionTime: '30 minutes',
  availability: '24h/7j'
};

// === SERVICES PRINCIPAUX ===
export const SERVICES: Service[] = [
  {
    id: 'assechement-urgence',
    title: 'Assèchement d\'urgence',
    description: 'Intervention immédiate pour stopper les dégâts d\'eau. Pompage, extraction et assèchement professionnel.',
    icon: '💧',
    urgent: true,
    features: [
      'Intervention sous 30 minutes',
      'Pompage d\'eau professionnel',
      'Déshumidification industrielle',
      'Surveillance 24h/7j',
      'Rapport détaillé pour assurances'
    ]
  },
  {
    id: 'degat-eau-appartement',
    title: 'Dégât d\'eau appartement',
    description: 'Prise en charge complète des dégâts d\'eau en appartement. De l\'urgence à la rénovation.',
    icon: '🏠',
    features: [
      'Arrêt d\'eau d\'urgence',
      'Protection mobilier',
      'Assèchement murs et sols',
      'Coordination assurances',
      'Suivi rénovation'
    ]
  },
  {
    id: 'inondation-cave',
    title: 'Inondation cave/sous-sol',
    description: 'Évacuation d\'eau et assèchement spécialisé pour caves et sous-sols inondés.',
    icon: '⬇️',
    features: [
      'Pompage haute capacité',
      'Assèchement souterrain',
      'Prévention moisissures',
      'Déshumidification longue durée',
      'Contrôle humidité'
    ]
  },
  {
    id: 'recherche-fuite',
    title: 'Recherche de fuites',
    description: 'Détection précise de fuites avec matériel professionnel. Sans destruction.',
    icon: '🔍',
    features: [
      'Détection non-destructive',
      'Caméra thermique',
      'Gaz traceur',
      'Rapport technique détaillé',
      'Devis réparation'
    ]
  }
];

// === ZONES COUVERTES ===
export const LOCAL_AREAS: LocalArea[] = [
  {
    city: 'Lausanne',
    zipCode: '1000',
    slug: 'lausanne',
    coverageRadius: 15,
    description: 'Intervention d\'urgence assèchement à Lausanne et région. Service 24h/24 pour tous dégâts d\'eau.'
  },
  {
    city: 'Montreux',
    zipCode: '1820',
    slug: 'montreux',
    coverageRadius: 12,
    description: 'Service d\'assèchement urgence Montreux. Spécialiste dégât d\'eau Riviera vaudoise.'
  },
  {
    city: 'Nyon',
    zipCode: '1260',
    slug: 'nyon',
    coverageRadius: 15,
    description: 'Assèchement d\'urgence Nyon et région. Intervention rapide 30 minutes, 24h/7j.'
  },
  {
    city: 'Vevey',
    zipCode: '1800',
    slug: 'vevey',
    coverageRadius: 12,
    description: 'Service assèchement Vevey. Expert dégât d\'eau, intervention immédiate arc lémanique.'
  },
  {
    city: 'Yverdon-les-Bains',
    zipCode: '1400',
    slug: 'yverdon-les-bains',
    coverageRadius: 15,
    description: 'Assèchement urgence Yverdon-les-Bains. Service professionnel 24h/24 nord vaudois.'
  },
  {
    city: 'Morges',
    zipCode: '1110',
    slug: 'morges',
    coverageRadius: 12,
    description: 'Service d\'urgence assèchement Morges et environs. Intervention rapide dégât d\'eau.'
  },
  {
    city: 'Renens',
    zipCode: '1020',
    slug: 'renens',
    coverageRadius: 10,
    description: 'Assèchement d\'urgence Renens. Spécialiste dégât d\'eau ouest lausannois, 24h/7j.'
  }
];

// === TÉMOIGNAGES ===
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marie C.',
    city: 'Lausanne',
    rating: 5,
    comment: 'Intervention très rapide suite à un dégât d\'eau dans notre salon. Équipe professionnelle et efficace. Je recommande !',
    service: 'Assèchement appartement',
    date: '2024-08-15'
  },
  {
    id: '2',
    name: 'Pierre M.',
    city: 'Montreux',
    rating: 5,
    comment: 'Cave inondée un dimanche matin. H-Séchement est intervenu en 25 minutes ! Service impeccable.',
    service: 'Inondation cave',
    date: '2024-07-22'
  },
  {
    id: '3',
    name: 'Sophie L.',
    city: 'Nyon',
    rating: 5,
    comment: 'Fuite détectée rapidement sans casser nos murs. Matériel moderne et équipe compétente.',
    service: 'Recherche fuite',
    date: '2024-09-01'
  },
  {
    id: '4',
    name: 'Jean-Marc D.',
    city: 'Vevey',
    rating: 5,
    comment: 'Dégât d\'eau majeur géré de A à Z. Coordination parfaite avec notre assurance. Merci !',
    service: 'Assèchement urgence',
    date: '2024-08-30'
  }
];

// === URL DE BASE ===
export const BASE_URL = 'https://www.hsechement.ch';

// === MÉTA-DONNÉES PAR DÉFAUT ===
export const DEFAULT_SEO = {
  title: 'H-Sèchement | Assèchement Urgence 24h/7 Suisse Romande',
  description: 'Spécialiste assèchement d\'urgence en Suisse romande. Intervention sous 30 min, 24h/7j. Dégât d\'eau, inondation, fuite. Agréé assurances.',
  keywords: [
    'assèchement urgence',
    'dégât eau',
    'inondation',
    'fuite eau',
    'Suisse romande',
    'Lausanne',
    'intervention 24h',
    'pompage eau',
    'déshumidification'
  ]
};