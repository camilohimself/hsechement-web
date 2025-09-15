import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, CheckCircle, Phone, MapPin, Star, Users } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { LOCAL_AREAS, SERVICES, TESTIMONIALS, CONTACT, BASE_URL } from '@/data/site-config';

interface PageProps {
  params: {
    ville: string;
  };
}

// Génération des pages statiques pour chaque ville
export async function generateStaticParams() {
  // Simplify to prevent build timeouts - generate only key cities
  const keyCities = LOCAL_AREAS.slice(0, 4); // First 4 cities to prevent timeout
  return keyCities.map((area) => ({
    ville: area.slug,
  }));
}

// Génération dynamique des métadonnées SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const area = LOCAL_AREAS.find((area) => area.slug === params.ville);

  if (!area) {
    return {
      title: 'Page non trouvée',
    };
  }

  const title = `Assèchement Urgence ${area.city} 24h/7 - Intervention Rapide`;
  const description = `Spécialiste assèchement d'urgence à ${area.city}. Intervention sous 30 min, 24h/7j. Dégât d'eau, inondation, fuite. Service professionnel ${area.zipCode}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/assechement-urgence-${area.slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/assechement-urgence-${area.slug}`,
    },
    other: {
      'geo.region': 'CH-VD',
      'geo.placename': area.city,
      'geo.position': '46.5197;6.6323', // Coordonnées approximatives
      'ICBM': '46.5197, 6.6323',
    },
  };
}

export default function LocalPage({ params }: PageProps) {
  const area = LOCAL_AREAS.find((area) => area.slug === params.ville);

  if (!area) {
    notFound();
  }

  // Filtrer les témoignages pour cette ville
  const localTestimonials = TESTIMONIALS.filter((testimonial) =>
    testimonial.city.toLowerCase() === area.city.toLowerCase()
  );

  // Si pas assez de témoignages locaux, prendre des témoignages généraux
  const displayTestimonials = localTestimonials.length >= 2
    ? localTestimonials.slice(0, 2)
    : [...localTestimonials, ...TESTIMONIALS.filter(t => t.city !== area.city)].slice(0, 2);

  return (
    <>
      {/* Schema markup spécifique à la ville */}
      <LocalSchema
        city={area.city}
        zipCode={area.zipCode}
        specificServices={['assechement-urgence', 'degat-eau-appartement']}
      />

      {/* Hero Section Local */}
      <section className="bg-gradient-to-br from-blue-50 to-osom-secondary/10 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Contenu principal */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-osom-secondary" />
                <span className="text-osom-secondary font-semibold">{area.city} • {area.zipCode}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-dark mb-6">
                <span className="text-urgent-red">Urgence dégât d&apos;eau</span>
                <br />
                <span className="text-osom-secondary">à {area.city} ?</span>
              </h1>

              <p className="text-xl md:text-2xl text-corporate-gray mb-8">
                <strong className="text-corporate-dark">Intervention en 30 minutes maximum</strong>
                <br />
                Service d&apos;urgence 24h/24 • Zone couverte: {area.coverageRadius}km
              </p>

              {/* Points forts locaux */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Équipe locale {area.city}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Intervention 24h/7j</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Agréé assurances</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-osom-secondary flex-shrink-0" />
                  <span className="text-corporate-dark">Devis gratuit</span>
                </div>
              </div>

              {/* CTA Mobile */}
              <div className="block md:hidden mb-8">
                <CTAUrgence variant="section" />
              </div>
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <CTAUrgence variant="hero" className="max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services disponibles localement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Services d&apos;assèchement à {area.city}
            </h2>
            <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
              {area.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-corporate-dark">
                        {service.title}
                      </h3>
                      <p className="text-sm text-corporate-gray">
                        Disponible à {area.city}
                      </p>
                    </div>
                  </div>

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
                      🚨 Service d&apos;urgence 24h/7j
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention locale */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
                Zone d&apos;intervention {area.city}
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-osom-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-corporate-dark">
                      {area.city} et environs ({area.zipCode})
                    </div>
                    <div className="text-corporate-gray">
                      Rayon d&apos;intervention: {area.coverageRadius} kilomètres
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-osom-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-corporate-dark">
                      Temps d&apos;intervention
                    </div>
                    <div className="text-corporate-gray">
                      Maximum 30 minutes depuis notre base locale
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-osom-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-corporate-dark">
                      Équipe dédiée
                    </div>
                    <div className="text-corporate-gray">
                      Techniciens spécialisés connaissant la région {area.city}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-osom-primary/10 rounded-lg p-6">
                <h3 className="font-bold text-corporate-dark mb-2">
                  Communes desservies depuis {area.city}:
                </h3>
                <p className="text-corporate-gray text-sm">
                  Toutes les communes dans un rayon de {area.coverageRadius}km,
                  y compris les quartiers et villages environnants.
                  Intervention garantie en moins de 30 minutes.
                </p>
              </div>
            </div>

            {/* Visualisation zone */}
            <div className="bg-gradient-to-br from-osom-secondary/20 to-osom-primary/20 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <div className="font-bold text-2xl text-corporate-dark">
                  {area.city}
                </div>
                <div className="text-corporate-gray">
                  Zone couverte: {area.coverageRadius}km
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages locaux */}
      {displayTestimonials.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
                Ils nous font confiance à {area.city}
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-osom-primary fill-current" />
                  ))}
                </div>
                <span className="text-corporate-gray font-semibold">Avis clients {area.city}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {displayTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-osom-primary fill-current" />
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
      )}

      {/* Pourquoi choisir H-Séchement à [ville] */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Pourquoi choisir H-Séchement à {area.city} ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-osom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-corporate-dark" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Proximité {area.city}
              </h3>
              <p className="text-corporate-gray">
                Équipe locale basée à proximité de {area.city} pour une intervention ultra-rapide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Intervention rapide
              </h3>
              <p className="text-corporate-gray">
                Maximum 30 minutes pour arriver à {area.city} et stopper les dégâts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-corporate-dark" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Connaissance locale
              </h3>
              <p className="text-corporate-gray">
                Nos techniciens connaissent parfaitement la région de {area.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Local */}
      <section className="section-padding bg-gradient-to-r from-urgent-red to-urgent-red-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dégât d&apos;eau à {area.city} ? N&apos;attendez pas !
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe locale peut être chez vous en moins de 30 minutes.
            Chaque minute compte pour limiter les dégâts.
          </p>

          <div className="max-w-md mx-auto">
            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              className="inline-block w-full bg-white text-urgent-red px-8 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
            >
              <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
              URGENCE {area.city.toUpperCase()}
            </a>

            <p className="mt-4 text-lg">
              {CONTACT.emergencyPhone} • Intervention sous 30 min
            </p>

            <div className="mt-4 text-sm opacity-90">
              Service d&apos;urgence disponible 24h/24 à {area.city} et dans un rayon de {area.coverageRadius}km
            </div>
          </div>
        </div>
      </section>
    </>
  );
}