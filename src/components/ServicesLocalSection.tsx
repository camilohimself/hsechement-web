'use client';

import { Search, Droplets, Shield, CheckCircle, Eye, Thermometer, Camera, Wind, Zap, AlertCircle } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';

interface ServicesLocalSectionProps {
  cityName: string;
  showTitle?: boolean;
}

const localServices = [
  {
    id: 'detection-fuites',
    icon: <Search className="w-6 h-6" />,
    title: 'Détection de fuites',
    description: 'Localisation précise de toute fuite avec nos technologies de pointe.',
    technologies: ['Caméra thermique', 'Caméra endoscopique', 'Détecteur d\'humidité', 'Produit fluorescent'],
    benefits: ['Détection précoce des dégâts', 'Économies sur factures d\'eau', 'Protection santé'],
    urgent: true
  },
  {
    id: 'assechement-expert',
    icon: <Wind className="w-6 h-6" />,
    title: 'Assèchement expert',
    description: 'Restauration rapide et durable avec méthodes avancées d\'assèchement.',
    technologies: ['Assèchement périphérique', 'Panneaux radiants infrarouges', 'Déshumidificateurs', 'Ventilateurs industriels'],
    benefits: ['Restauration rapide', 'Prévention dommages secondaires', 'Résultats durables'],
    urgent: true
  },
  {
    id: 'assainissement',
    icon: <Shield className="w-6 h-6" />,
    title: 'Assainissement complet',
    description: 'Environnement sain et sécurisé avec traitement professionnel complet.',
    technologies: ['Décontamination', 'Élimination moisissures', 'Neutralisation odeurs', 'Remise en état'],
    benefits: ['Environnement 100% sain', 'Protection santé durable', 'Garantie qualité'],
    urgent: false
  }
];

export default function ServicesLocalSection({ cityName, showTitle = true }: ServicesLocalSectionProps) {
  return (
    <section className="section-padding bg-corporate-gray-bg">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Nos services d&apos;assèchement à {cityName}
            </h2>
            <p className="text-xl text-corporate-gray">
              Technologies professionnelles pour tous vos dégâts d&apos;eau à {cityName}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {localServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-hsechement-orange rounded-full flex items-center justify-center mr-4 text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-corporate-dark">
                      {service.title}
                    </h3>
                    {service.urgent && (
                      <span className="text-sm text-hsechement-cta-red font-semibold">
                        Service d&apos;urgence
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-corporate-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-corporate-dark mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-hsechement-blue mr-2" />
                    Technologies
                  </h4>
                  <div className="space-y-2">
                    {service.technologies.slice(0, 4).map((tech, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-hsechement-blue rounded-full mr-3 flex-shrink-0" />
                        <span className="text-corporate-gray">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avantages */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-corporate-dark mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-hsechement-blue mr-2" />
                    Avantages
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-hsechement-blue mr-2 flex-shrink-0" />
                        <span className="text-corporate-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.urgent && (
                  <div className="bg-hsechement-cta-red/10 text-hsechement-cta-red px-4 py-3 rounded-lg text-center font-semibold">
                    🚨 Intervention en 30 minutes à {cityName}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Processus local */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-corporate-dark mb-8 text-center">
            Notre intervention à {cityName}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Appel', desc: `Contact immédiat depuis ${cityName}`, time: '0 min' },
              { step: '2', title: 'Déplacement', desc: `Équipe en route vers ${cityName}`, time: '5 min' },
              { step: '3', title: 'Arrivée', desc: `Sur site à ${cityName}`, time: '30 min' },
              { step: '4', title: 'Action', desc: 'Diagnostic et traitement', time: '45 min' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-hsechement-cta-red rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {process.step}
                </div>
                <h4 className="font-bold text-corporate-dark mb-1">
                  {process.title}
                </h4>
                <p className="text-sm text-corporate-gray mb-1">
                  {process.desc}
                </p>
                <span className="text-hsechement-orange font-semibold text-sm">
                  {process.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAUrgence variant="section" />
          </div>
        </div>
      </div>
    </section>
  );
}