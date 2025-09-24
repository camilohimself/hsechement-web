import { Metadata } from 'next';
import Image from 'next/image';
import { Clock, CheckCircle, Phone, Users, Award, Shield, AlertTriangle } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import ChantierGallery from '@/components/ChantierGallery';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import HeroAlternatingText from '@/components/HeroAlternatingText';
import { COMPANY, SERVICES, TESTIMONIALS, LOCAL_AREAS, BASE_URL, CONTACT } from '@/data/site-config';

// SEO metadata pour la homepage
export const metadata: Metadata = {
  title: 'H-Séchement | Assèchement urgence 24h/7 Suisse romande',
  description: 'Spécialiste assèchement d\'urgence en Suisse romande. Intervention en 30 min, 24h/7j. Dégât d\'eau, inondation, fuite. Agréé assurances.',
  openGraph: {
    title: 'H-Séchement | Assèchement urgence 24h/7 Suisse romande',
    description: 'Intervention d\'urgence en 30 minutes pour tous vos dégâts d\'eau en Suisse romande. Service professionnel 24h/24.',
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

      {/* Hero Section - Photo background professionnel */}
      <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Background photo H-Séchement - HTML direct */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/H12.jpg"
            alt="Technicien H-Séchement professionnel en intervention"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Overlay plus léger pour visibilité photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Contenu principal - Texte blanc sur photo */}
            <div className="text-white">
              <HeroAlternatingText />

              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                <strong className="text-white">Intervention en 30 minutes</strong>
                <br />
                Service professionnel 24h/24, 7j/7
              </p>

              {/* Points forts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-hsechement-orange flex-shrink-0" />
                  <span className="text-white">Intervention en 30 min</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-hsechement-orange flex-shrink-0" />
                  <span className="text-white">Service 24h/7j</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-hsechement-orange flex-shrink-0" />
                  <span className="text-white">Agréé assurances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-hsechement-orange flex-shrink-0" />
                  <span className="text-white">Suisse romande</span>
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
                  <div className="text-hsechement-orange mb-4">
                    <ServiceIcon iconName={service.icon} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-corporate-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-corporate-gray mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-hsechement-orange mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.urgent && (
                    <div className="bg-hsechement-red/10 text-hsechement-red px-4 py-2 rounded-lg text-center font-semibold flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Service d&apos;urgence
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
              <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Intervention ultra-rapide
              </h3>
              <p className="text-corporate-gray">
                Sur site en moins de 30 minutes, 24h/24 et 7j/7 en Suisse romande
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
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
                  <span key={i} className="text-hsechement-orange text-2xl">★</span>
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
                    <span key={i} className="text-hsechement-orange">★</span>
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
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une urgence ? N&apos;attendez pas !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Chaque minute compte lors d&apos;un dégât d&apos;eau.
            Contactez-nous immédiatement pour une intervention rapide.
          </p>

          <div className="max-w-md mx-auto">
            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              aria-label={`Appeler d'urgence H-Sèchement au ${CONTACT.emergencyPhone}`}
              className="inline-block w-full bg-white text-hsechement-red px-8 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 text-center"
            >
              <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
              APPELER MAINTENANT
            </a>
            <p className="mt-4 text-lg">
              Service disponible 24h/24 • Intervention en 30 min
            </p>
          </div>
        </div>
      </section>

      {/* Galerie des chantiers */}
      <ChantierGallery />
    </>
  );
}
