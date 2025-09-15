import { Metadata } from 'next';
import { Clock, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { SERVICES, COMPANY, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Services Assèchement Urgence | H-Séchement Suisse Romande',
  description: 'Services professionnels d\'assèchement d\'urgence: dégât d\'eau, inondation cave, recherche fuite. Intervention 24h/7j en Suisse romande.',
  openGraph: {
    title: 'Services Assèchement Urgence | H-Séchement',
    description: 'Découvrez nos services d\'assèchement d\'urgence en Suisse romande. Intervention rapide pour tous vos dégâts d\'eau.',
    url: `${BASE_URL}/services`,
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <LocalSchema specificServices={SERVICES.map(s => s.id)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hsechement-orange/10 to-blue-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
              Services d&apos;assèchement professionnel
            </h1>
            <p className="text-xl md:text-2xl text-corporate-gray mb-8">
              Intervention d&apos;urgence 24h/7j pour tous vos dégâts d&apos;eau en Suisse romande
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-corporate-dark">
                <Clock className="w-6 h-6 text-hsechement-orange" />
                <span className="font-semibold">Intervention en 30min</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-corporate-dark">
                <CheckCircle className="w-6 h-6 text-hsechement-orange" />
                <span className="font-semibold">Service 24h/7j</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-corporate-dark">
                <CheckCircle className="w-6 h-6 text-hsechement-orange" />
                <span className="font-semibold">Agréé assurances</span>
              </div>
            </div>

            {/* CTA Hero */}
            <div className="max-w-md mx-auto">
              <CTAUrgence variant="section" />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Contenu */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    {service.urgent && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-hsechement-red text-white mb-4">
                        🚨 Service d&apos;urgence
                      </span>
                    )}
                    <div className="text-5xl mb-4">{service.icon}</div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-corporate-gray mb-6">
                    {service.description}
                  </p>

                  {/* Caractéristiques du service */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-hsechement-orange mt-0.5 flex-shrink-0" />
                        <span className="text-corporate-dark">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA pour chaque service */}
                  {service.urgent ? (
                    <a
                      href="tel:+41791234567"
                      className="btn-urgent inline-flex items-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appel d&apos;urgence
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="btn-primary inline-flex items-center hover:bg-hsechement-red/90"
                    >
                      Demander un devis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  )}
                </div>

                {/* Image/Illustration */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-hsechement-orange/20 to-hsechement-red/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-8xl opacity-50">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'intervention */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Notre processus d&apos;intervention
            </h2>
            <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
              Une méthode éprouvée pour traiter efficacement tous vos dégâts d&apos;eau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Appel d\'urgence',
                description: 'Contact immédiat, évaluation téléphonique et dispatching de l\'équipe la plus proche.'
              },
              {
                step: '2',
                title: 'Arrivée sur site',
                description: 'Intervention en 30 minutes avec tout le matériel professionnel nécessaire.'
              },
              {
                step: '3',
                title: 'Évaluation & action',
                description: 'Diagnostic rapide, arrêt des dégâts et mise en place du plan d\'assèchement.'
              },
              {
                step: '4',
                title: 'Suivi & rapport',
                description: 'Surveillance 24h/7j et rapport détaillé pour votre compagnie d\'assurance.'
              }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-corporate-dark mb-3">
                  {process.title}
                </h3>
                <p className="text-corporate-gray">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties et certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Nos garanties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Intervention garantie
              </h3>
              <p className="text-corporate-gray">
                {COMPANY.interventionTime} maximum ou intervention gratuite
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Travail assuré
              </h3>
              <p className="text-corporate-gray">
                RC professionnelle et garantie décennale pour tous nos services
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Satisfaction client
              </h3>
              <p className="text-corporate-gray">
                Plus de 95% de nos clients nous recommandent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;une intervention d&apos;urgence ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            N&apos;attendez pas que les dégâts s&apos;aggravent.
            Notre équipe est disponible 24h/24 pour vous aider.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="tel:+41791234567"
              className="btn-urgent flex items-center text-xl py-4 px-8"
            >
              <Phone className="w-6 h-6 mr-3 animate-bounce-phone" />
              APPEL D&apos;URGENCE
            </a>

            <span className="text-white/80">ou</span>

            <a
              href="/contact"
              className="btn-secondary bg-white text-corporate-dark hover:bg-gray-100 flex items-center"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}