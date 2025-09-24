export interface ImageConfig {
  src: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  priority?: boolean;
}

export const GALLERY_IMAGES: Record<string, ImageConfig> = {
  'H3': {
    src: '/images/gallery/H3.jpg',
    alt: 'Équipement d\'assèchement professionnel H-Séchement en intervention',
    title: 'Matériel d\'assèchement industriel',
    description: 'Technicien H-Séchement utilisant l\'équipement professionnel d\'assèchement pour traiter un dégât d\'eau',
    tags: ['assèchement', 'équipement', 'professionnel', 'intervention', 'urgence']
  },
  'H6': {
    src: '/images/gallery/H6.jpg',
    alt: 'Technicien H-Séchement expert en intervention de déshumidification',
    title: 'Expert en déshumidification',
    description: 'Spécialiste H-Séchement déployant le matériel de déshumidification sur site',
    tags: ['technicien', 'expert', 'déshumidification', 'matériel', 'intervention']
  },
  'H7': {
    src: '/images/gallery/H7.jpg',
    alt: 'Intervention rapide H-Séchement avec équipement complet d\'assèchement',
    title: 'Intervention rapide complète',
    description: 'Déploiement complet du matériel H-Séchement pour intervention d\'urgence',
    tags: ['intervention', 'rapide', 'urgence', 'équipement', 'complet']
  },
  'H8': {
    src: '/images/gallery/H8.jpg',
    alt: 'Matériel d\'assèchement H-Séchement déployé sur site d\'intervention',
    title: 'Matériel professionnel sur site',
    description: 'Équipement d\'assèchement H-Séchement installé pour traitement d\'urgence',
    tags: ['matériel', 'site', 'installation', 'urgence', 'traitement']
  },
  'H12': {
    src: '/images/gallery/H12.jpg',
    alt: 'Technicien H-Séchement professionnel en déplacement pour intervention urgente',
    title: 'Professionnel H-Séchement en action',
    description: 'Technicien H-Séchement se rendant sur site pour intervention d\'urgence',
    tags: ['technicien', 'professionnel', 'déplacement', 'urgence', 'service']
  },
  'H16': {
    src: '/images/gallery/H16 (1)_edited.jpg',
    alt: 'Service d\'urgence H-Séchement disponible 24h/7j en Suisse romande',
    title: 'Service d\'urgence 24h/7j',
    description: 'Service H-Séchement disponible en permanence pour interventions urgentes',
    tags: ['service', 'urgence', '24h', 'disponible', 'suisse-romande']
  }
};

export const HERO_IMAGES = {
  homepage: GALLERY_IMAGES.H12,
  services: GALLERY_IMAGES.H8,
  contact: GALLERY_IMAGES.H6
};

// Optimisation des tailles d'images
export const IMAGE_SIZES = {
  hero: {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw'
  },
  gallery: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw'
  },
  card: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '25vw'
  }
} as const;

export const getSizes = (type: keyof typeof IMAGE_SIZES) => {
  const config = IMAGE_SIZES[type];
  return `(max-width: 768px) ${config.mobile}, (max-width: 1200px) ${config.tablet}, ${config.desktop}`;
};