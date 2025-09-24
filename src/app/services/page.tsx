import { Metadata } from 'next';
import { Search, Droplets, Shield, CheckCircle, Eye, Thermometer, Camera, Wind, Zap, AlertCircle, Clock, Phone } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import { COMPANY, CONTACT, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Services Assèchement urgence | H-Sèchement Suisse romande',
  description: 'Détection fuites, assèchement expert et assainissement après dégât d\'eau. Technologies avancées, intervention 24h/7j en Suisse romande.',
  openGraph: {
    title: 'Services Assèchement urgence | H-Sèchement Suisse romande',
    description: 'Détection fuites, assèchement expert et assainissement. Technologies de pointe pour tous dégâts d\'eau.',
    url: `${BASE_URL}/services`,
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

const services = [
  {
    id: 'detection-fuites',
    icon: <Search className="w-8 h-8" />,
    title: 'Détection de Fuites',
    subtitle: 'Protégez votre habitation des dégâts des eaux',
    description: 'Notre service de détection de fuites est conçu pour identifier et localiser précisément toute fuite, qu\'elle soit visible ou invisible à l\'œil nu. Nous comprenons l\'importance critique de la détection précoce pour prévenir les dommages, économiser vos factures d\'eau et éviter moisissures.',
    problems: [
      'Dommages structurels dans votre logement',
      'Développement de moisissures nocives pour la santé',
      'Augmentation significative des factures d\'eau',
      'Problèmes d\'humidité chroniques'
    ],
    technologies: [
      { name: 'Caméra thermique', icon: <Thermometer className="w-5 h-5" /> },
      { name: 'Caméra endoscopique', icon: <Camera className="w-5 h-5" /> },
      { name: 'Détecteur d\'humidité', icon: <Droplets className="w-5 h-5" /> },
      { name: 'Produit fluorescent', icon: <Eye className="w-5 h-5" /> }
    ],
    benefits: [
      'Détection précoce = prévention des gros dégâts',
      'Économies importantes sur factures d\'eau',
      'Protection de votre santé et structure',
      'Intervention rapide 24h/7j'
    ],
    urgent: true
  },
  {
    id: 'assechement-expert',
    icon: <Wind className="w-8 h-8" />,
    title: 'Assèchement Expert',
    subtitle: 'Restauration Rapide et Durable',
    description: 'L\'assèchement est une étape essentielle dans le processus de restauration après une fuite ou un dégât des eaux. Notre équipe spécialisée utilise des méthodes avancées pour éliminer toute trace d\'humidité dans les structures affectées.',
    problems: [
      'Humidité persistante dans les murs',
      'Risque de moisissures secondaires',
      'Détérioration progressive des matériaux',
      'Odeurs d\'humidité désagréables'
    ],
    technologies: [
      { name: 'Assèchement périphérique', icon: <Wind className="w-5 h-5" /> },
      { name: 'Panneaux radiants infrarouges', icon: <Zap className="w-5 h-5" /> },
      { name: 'Déshumidificateur à condensation', icon: <Droplets className="w-5 h-5" /> },
      { name: 'Déshumidificateur confort', icon: <Shield className="w-5 h-5" /> },
      { name: 'Chauffage et générateur d\'air chaud', icon: <Thermometer className="w-5 h-5" /> },
      { name: 'Ventilateur industriel', icon: <Wind className="w-5 h-5" /> },
      { name: 'Surpresseur espaces creux', icon: <Zap className="w-5 h-5" /> },
      { name: 'Neutralisateur d\'odeurs', icon: <Wind className="w-5 h-5" /> }
    ],
    benefits: [
      'Restauration rapide à l\'état sec et sain',
      'Prévention des dommages secondaires',
      'Technologies de pointe pour résultats durables',
      'Intervention 24h/7j partout en Suisse romande'
    ],
    urgent: true
  },
  {
    id: 'assainissement',
    icon: <Shield className="w-8 h-8" />,
    title: 'Assainissement Après Dégât',
    subtitle: 'Environnement Sain et Sécurisé Long Terme',
    description: 'Un dégât des eaux ne s\'arrête pas une fois les surfaces sèches. Un assainissement professionnel est crucial pour garantir un environnement sain et sécurisé sur le long terme. Notre processus va bien au-delà de la simple rénovation.',
    problems: [
      'Bactéries et micro-organismes invisibles',
      'Spores de moisissures cachées',
      'Odeurs persistantes de moisi',
      'Risques pour la santé des occupants'
    ],
    technologies: [
      { name: 'Décontamination et Désinfection', icon: <Shield className="w-5 h-5" /> },
      { name: 'Élimination des Moisissures', icon: <Shield className="w-5 h-5" /> },
      { name: 'Neutralisation des Odeurs', icon: <Wind className="w-5 h-5" /> },
      { name: 'Remise en État et Rénovation', icon: <CheckCircle className="w-5 h-5" /> }
    ],
    benefits: [
      'Environnement certifié 100% sain',
      'Protection durable de votre santé',
      'Remise en état esthétique complète',
      'Garantie qualité professionnelle'
    ],
    urgent: false
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
              <span className="text-hsechement-red">Services d&apos;Urgence</span>
              <br />
              <span className="text-hsechement-orange">Assèchement Suisse romande</span>
            </h1>
            <p className="text-xl md:text-2xl text-corporate-gray max-w-4xl mx-auto mb-8">
              <strong className="text-corporate-dark">Intervention en 30 minutes</strong> pour tous vos dégâts d&apos;eau.
              <br />
              Technologies de pointe • Service 24h/24 • Agréé assurances
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-hsechement-orange" />
                <span className="text-corporate-dark font-semibold">Détection précise</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-hsechement-orange" />
                <span className="text-corporate-dark font-semibold">Assèchement expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-hsechement-orange" />
                <span className="text-corporate-dark font-semibold">Assainissement total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding">
        <div className="container-custom">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Contenu principal */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mr-4 text-white">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-corporate-dark mb-2">
                        {service.title}
                      </h2>
                      <p className="text-xl text-hsechement-orange font-semibold">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {service.urgent && (
                    <div className="bg-hsechement-red/10 text-hsechement-red px-4 py-2 rounded-lg text-center font-semibold mb-6">
                      🚨 Service d&apos;urgence
                    </div>
                  )}

                  <p className="text-lg text-corporate-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Problèmes traités */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-corporate-dark mb-4 flex items-center">
                      <AlertCircle className="w-6 h-6 text-hsechement-red mr-2" />
                      Problèmes traités
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.problems.map((problem, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-hsechement-red rounded-full mt-3 flex-shrink-0" />
                          <span className="text-corporate-gray">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Avantages */}
                  <div>
                    <h3 className="text-xl font-bold text-corporate-dark mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-hsechement-orange mr-2" />
                      Nos avantages
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-hsechement-orange mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies et méthodes */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-corporate-dark mb-6 text-center">
                      Technologies & Méthodes
                    </h3>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {service.technologies.map((tech, i) => (
                        <div key={i} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-hsechement-orange/10 rounded-full flex items-center justify-center text-hsechement-orange">
                              {tech.icon}
                            </div>
                            <span className="font-semibold text-corporate-dark">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA dans chaque section */}
                    <CTAUrgence variant="section" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processus d'intervention */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Notre Processus d&apos;Intervention
            </h2>
            <p className="text-xl text-corporate-gray">
              Une approche méthodique pour des résultats durables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Appel d\'urgence', desc: 'Contactez-nous 24h/7j', time: '0 min' },
              { step: '2', title: 'Intervention rapide', desc: 'Sur site en 30 minutes', time: '30 min' },
              { step: '3', title: 'Diagnostic expert', desc: 'Évaluation complète des dégâts', time: '45 min' },
              { step: '4', title: 'Traitement professionnel', desc: 'Solution adaptée et durable', time: '1-24h' }
            ].map((process, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-corporate-dark mb-2">
                  {process.title}
                </h3>
                <p className="text-corporate-gray mb-2">
                  {process.desc}
                </p>
                <span className="text-hsechement-orange font-semibold">
                  {process.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi H-Sèchement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Pourquoi choisir H-Sèchement ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Technologies de Pointe
              </h3>
              <p className="text-corporate-gray">
                Équipements professionnels dernière génération pour une efficacité maximale et des résultats durables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                {COMPANY.experience} d&apos;Expérience
              </h3>
              <p className="text-corporate-gray">
                Expertise reconnue en assèchement et traitement des dégâts d&apos;eau. Agréé par toutes les assurances suisses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Garantie Qualité
              </h3>
              <p className="text-corporate-gray">
                Travail certifié avec garantie. Suivi post-intervention pour assurer la qualité durable de nos prestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dégât d&apos;eau ? Chaque minute compte !
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Plus vous attendez, plus les dégâts s&apos;aggravent. Contactez nos experts pour une intervention immédiate et professionnelle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30 min</div>
              <div>Intervention sur site</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24h/7j</div>
              <div>Service d&apos;urgence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div>Agréé assurances</div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              aria-label={`Appeler d'urgence H-Sèchement au ${CONTACT.emergencyPhone}`}
              className="inline-block w-full bg-white text-hsechement-red px-8 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
              APPELER <span className="numeric">{CONTACT.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
