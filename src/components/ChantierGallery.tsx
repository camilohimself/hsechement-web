import Image from 'next/image';
import { CheckCircle, Clock, Wrench, Home } from 'lucide-react';

interface ChantierGalleryProps {
  className?: string;
  showTitle?: boolean;
}

const chantierData = [
  {
    id: 1,
    image: '/images/gallery/H3.jpg',
    title: 'Équipement Professionnel',
    description: 'Matériel d\'assèchement industriel déployé pour intervention d\'urgence',
    tags: ['Matériel Pro', 'Assèchement', 'Urgence'],
    icon: <Wrench className="w-5 h-5" />
  },
  {
    id: 2,
    image: '/images/gallery/H6.jpg',
    title: 'Technicien Expert',
    description: 'Intervention technique par nos spécialistes certifiés',
    tags: ['Expert', 'Certifié', 'Professionnel'],
    icon: <Home className="w-5 h-5" />
  },
  {
    id: 3,
    image: '/images/gallery/H7.jpg',
    title: 'Intervention Rapide',
    description: 'Déploiement rapide sur site avec équipement complet',
    tags: ['Rapide', '24h/7j', 'Complet'],
    icon: <Clock className="w-5 h-5" />
  }
];

export default function ChantierGallery({ className = "", showTitle = true }: ChantierGalleryProps) {
  return (
    <section className={`section-padding bg-corporate-gray-bg ${className}`}>
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Nos Interventions Réalisées
            </h2>
            <p className="text-xl text-corporate-gray">
              Découvrez notre expertise sur le terrain en Suisse romande
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chantierData.map((chantier) => (
            <div
              key={chantier.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={chantier.image}
                  alt={chantier.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <div className="bg-hsechement-orange/20 backdrop-blur p-2 rounded-full mr-2">
                      {chantier.icon}
                    </div>
                    <span className="font-semibold">{chantier.title}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-corporate-gray mb-4">
                  {chantier.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {chantier.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-hsechement-orange/10 text-hsechement-orange px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm text-hsechement-red">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Intervention réussie</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-corporate-gray mb-6">
            Plus de <strong>500 interventions</strong> réalisées avec succès en Suisse romande
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-corporate-gray">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-hsechement-orange mr-2" />
              <span>Matériel professionnel</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-hsechement-orange mr-2" />
              <span>Équipe certifiée</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-hsechement-orange mr-2" />
              <span>Résultats garantis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}