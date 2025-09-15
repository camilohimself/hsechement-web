import { Metadata } from 'next';
import { Clock, CheckCircle, Phone, Users, Award, Shield } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { COMPANY, SERVICES, TESTIMONIALS, LOCAL_AREAS, BASE_URL } from '@/data/site-config';

// SEO metadata pour la homepage
export const metadata: Metadata = {
  title: 'H-Séchement | Assèchement Urgence 24h/7 Suisse Romande',
  description: 'Spécialiste assèchement d\'urgence en Suisse romande. Intervention sous 30 min, 24h/7j. Dégât d\'eau, inondation, fuite. Agréé assurances.',
  openGraph: {
    title: 'H-Séchement | Assèchement Urgence 24h/7 Suisse Romande',
    description: 'Intervention d\'urgence sous 30 minutes pour tous vos dégâts d\'eau en Suisse romande. Service professionnel 24h/24.',
    url: BASE_URL,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema markup pour SEO local */}
      <LocalSchema />

      {/* Hero Section - Focus desktop 75% */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Contenu principal */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-dark mb-6">
                <span className="text-urgent-red">Urgence dégât d&apos;eau</span>
                <br />
                <span className="text-osom-secondary">en Suisse romande ?</span>
              </h1>

              <p className="text-xl md:text-2xl text-corporate-gray mb-8">
                <strong className="text-corporate-dark">Intervention sous 30 minutes</strong>
                <br />
                Service professionnel 24h/24, 7j/7
              </p>

              {/* Points forts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Intervention sous 30 min</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Service 24h/7j</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Agréé assurances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Suisse romande</span>
                </div>
              </div>

              {/* CTA Mobile responsive */}
              <div className="block md:hidden mb-8">
                <CTAUrgence variant="section" />
              </div>
            </div>

            {/* CTA Desktop XXL - 75% focus */}
            <div className="hidden md:block">
              <CTAUrgence variant="hero" className="max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-200/30 to-transparent pointer-events-none" />
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Nos services d&apos;urgence
            </h2>
            <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
              Intervention rapide pour tous types de dégâts d&apos;eau en Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-corporate-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-corporate-gray mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-osom-secondary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.urgent && (
                    <div className="bg-urgent-red/10 text-urgent-red px-4 py-2 rounded-lg text-center font-semibold">
                      🚨 Service d&apos;urgence
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Pourquoi choisir H-Séchement ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-osom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-corporate-dark" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Intervention ultra-rapide
              </h3>
              <p className="text-corporate-gray">
                Sur site en moins de 30 minutes, 24h/24 et 7j/7 en Suisse romande
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Agréé assurances
              </h3>
              <p className="text-corporate-gray">
                Travaillons directement avec toutes les compagnies d&apos;assurance suisses
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-corporate-dark" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                {COMPANY.experience} d&apos;expérience
              </h3>
              <p className="text-corporate-gray">
                Expertise reconnue en assèchement et traitement des dégâts d&apos;eau
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones couvertes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Zones d&apos;intervention
            </h2>
            <p className="text-xl text-corporate-gray">
              Service d&apos;urgence disponible dans toute la Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {LOCAL_AREAS.map((area) => (
              <div
                key={area.slug}
                className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-corporate-dark">
                  {area.city}
                </div>
                <div className="text-sm text-corporate-gray">
                  {area.zipCode}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-corporate-gray">
              <strong>+ de nombreuses autres communes</strong> dans l&apos;Arc Lémanique et en Suisse romande
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Ils nous font confiance
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-osom-primary text-2xl">★</span>
                ))}
              </div>
              <span className="text-corporate-gray font-semibold">4.9/5 sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-osom-primary">★</span>
                  ))}
                </div>
                <p className="text-corporate-gray italic mb-4">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <div className="font-semibold text-corporate-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-corporate-gray">
                      {testimonial.city} • {testimonial.service}
                    </div>
                  </div>
                  <div className="text-corporate-gray">
                    {new Date(testimonial.date).toLocaleDateString('fr-CH')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-urgent-red to-urgent-red-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une urgence ? N&apos;attendez pas !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Chaque minute compte lors d&apos;un dégât d&apos;eau.
            Contactez-nous immédiatement pour une intervention rapide.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={() => window.location.href = 'tel:+41791234567'}
              className="w-full bg-white text-urgent-red px-8 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
              APPELER MAINTENANT
            </button>
            <p className="mt-4 text-lg">
              Service disponible 24h/24 • Intervention sous 30 min
            </p>
          </div>
        </div>
      </section>
    </>
  );
}