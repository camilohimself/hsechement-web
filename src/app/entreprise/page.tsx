import { Metadata } from 'next';
import { Calendar, Award, Shield, Users, CheckCircle, Phone } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { COMPANY, TESTIMONIALS, BASE_URL, LOCAL_AREAS } from '@/data/site-config';

export const metadata: Metadata = {
  title: `À propos de ${COMPANY.name} | Spécialiste Assèchement Suisse Romande`,
  description: `Découvrez H-Séchement, votre spécialiste en assèchement d'urgence depuis ${COMPANY.founded}. ${COMPANY.experience} d'expérience, agréé assurances, intervention 24h/7j.`,
  openGraph: {
    title: `À propos de ${COMPANY.name} | Expert Assèchement Urgence`,
    description: `Entreprise spécialisée en assèchement d'urgence en Suisse romande. Équipe professionnelle, matériel de pointe, service 24h/7j.`,
    url: `${BASE_URL}/entreprise`,
  },
  alternates: {
    canonical: `${BASE_URL}/entreprise`,
  },
};

export default function EntreprisePage() {
  return (
    <>
      <LocalSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-corporate-gray-bg to-osom-secondary/10 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
              À propos de {COMPANY.name}
            </h1>
            <p className="text-xl md:text-2xl text-corporate-gray mb-8">
              {COMPANY.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-osom-secondary mb-1">
                  {COMPANY.founded}
                </div>
                <div className="text-sm text-corporate-gray">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-osom-primary mb-1">
                  {COMPANY.experience}
                </div>
                <div className="text-sm text-corporate-gray">D&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-osom-secondary mb-1">
                  30min
                </div>
                <div className="text-sm text-corporate-gray">Temps max intervention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-osom-primary mb-1">
                  24/7
                </div>
                <div className="text-sm text-corporate-gray">Service d&apos;urgence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
                Notre histoire
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-corporate-gray">
                  Fondée en <strong>{COMPANY.founded}</strong>, {COMPANY.name} est née d&apos;un constat simple :
                  lors d&apos;un dégât d&apos;eau, chaque minute compte. Nos fondateurs, forts de leur
                  expérience dans le bâtiment, ont voulu créer un service d&apos;intervention
                  ultra-rapide en Suisse romande.
                </p>

                <p className="text-lg text-corporate-gray">
                  Aujourd&apos;hui, avec <strong>{COMPANY.experience} d&apos;expérience</strong>, nous sommes
                  devenus la référence en matière d&apos;assèchement d&apos;urgence dans l&apos;Arc Lémanique.
                  Notre promesse : <strong>être sur site en moins de 30 minutes</strong>,
                  24h/24 et 7j/7.
                </p>

                <div className="bg-osom-primary/10 rounded-lg p-6">
                  <h3 className="font-bold text-corporate-dark mb-3">Notre mission</h3>
                  <p className="text-corporate-gray">
                    Limiter au maximum les dégâts causés par l&apos;eau en intervenant
                    rapidement avec du matériel professionnel et une expertise reconnue.
                    Nous accompagnons nos clients de l&apos;urgence jusqu&apos;à la remise en état.
                  </p>
                </div>
              </div>
            </div>

            {/* Image/Stats */}
            <div className="bg-gradient-to-br from-osom-secondary/20 to-osom-primary/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-corporate-dark mb-4">
                  {COMPANY.name} en chiffres
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-osom-secondary">500+</div>
                    <div className="text-sm text-corporate-gray">Interventions/an</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-osom-primary">7</div>
                    <div className="text-sm text-corporate-gray">Villes couvertes</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-osom-secondary">95%</div>
                    <div className="text-sm text-corporate-gray">Clients satisfaits</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-osom-primary">24h/7j</div>
                    <div className="text-sm text-corporate-gray">Disponibilité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
              Ce qui guide notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-urgent-red rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-3">
                Réactivité
              </h3>
              <p className="text-corporate-gray">
                Intervention garantie sous 30 minutes, 24h/24 et 7j/7.
                Parce qu&apos;une urgence ne peut pas attendre.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-3">
                Excellence
              </h3>
              <p className="text-corporate-gray">
                Matériel professionnel de pointe, techniques éprouvées et
                formation continue de nos équipes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-osom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-corporate-dark" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-3">
                Proximité
              </h3>
              <p className="text-corporate-gray">
                À l&apos;écoute de nos clients, nous les accompagnons avec
                empathie dans ces moments difficiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications et agréments */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Certifications & Agréments
            </h2>
            <p className="text-xl text-corporate-gray">
              Votre garantie de qualité et de professionnalisme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY.certifications.map((certification, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-osom-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-osom-secondary" />
                </div>
                <h3 className="font-bold text-corporate-dark mb-2">
                  {certification}
                </h3>
                <p className="text-corporate-gray text-sm">
                  Certification reconnue et mise à jour régulièrement
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-osom-primary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-corporate-dark mb-4">
              Agréé par toutes les assurances suisses
            </h3>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              Nous travaillons directement avec toutes les compagnies d&apos;assurance
              et nous occupons de toutes les démarches administratives pour vous.
            </p>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Notre équipe
            </h2>
            <p className="text-xl text-corporate-gray">
              Des professionnels expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                role: "Techniciens certifiés",
                description: "Spécialisés en assèchement et déshumidification",
                icon: "👨‍🔧"
              },
              {
                role: "Coordinateurs urgence",
                description: "Disponibles 24h/7j pour dispatching rapide",
                icon: "📞"
              },
              {
                role: "Experts sinistres",
                description: "Interface avec les compagnies d'assurance",
                icon: "📋"
              },
              {
                role: "Équipes mobiles",
                description: "Véhicules équipés dans toute la région",
                icon: "🚐"
              }
            ].map((team, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-4">{team.icon}</div>
                <h3 className="text-lg font-bold text-corporate-dark mb-2">
                  {team.role}
                </h3>
                <p className="text-corporate-gray text-sm">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de couverture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Notre zone d&apos;intervention
            </h2>
            <p className="text-xl text-corporate-gray">
              Service d&apos;urgence disponible dans toute la Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-corporate-dark mb-6">
                Villes principales couvertes
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LOCAL_AREAS.map((area) => (
                  <div key={area.slug} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
                    <CheckCircle className="w-5 h-5 text-osom-secondary flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-corporate-dark">
                        {area.city}
                      </div>
                      <div className="text-sm text-corporate-gray">
                        Intervention < 30 min
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-osom-secondary/10 rounded-lg p-6">
                <p className="text-corporate-gray">
                  <strong className="text-corporate-dark">+ de nombreuses autres communes</strong>
                  {' '}dans l&apos;Arc Lémanique et en Suisse romande.
                  Contactez-nous pour vérifier si votre commune est couverte.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-osom-secondary/20 to-osom-primary/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">🗺️</div>
                <div className="font-bold text-2xl text-corporate-dark mb-2">
                  Suisse Romande
                </div>
                <div className="text-corporate-gray">
                  Arc Lémanique • Canton de Vaud
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Ce que disent nos clients
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
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
      <section className="section-padding bg-gradient-to-r from-osom-secondary to-osom-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faites confiance aux experts
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {COMPANY.experience} d&apos;expérience, une équipe professionnelle
            et un service d&apos;urgence 24h/7j. Nous sommes là pour vous aider.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <button
              onClick={() => window.location.href = 'tel:+41791234567'}
              className="bg-urgent-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-urgent-red-dark transition-colors shadow-xl flex items-center"
            >
              <Phone className="w-6 h-6 mr-3 animate-bounce-phone" />
              APPEL D&apos;URGENCE
            </button>

            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-osom-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </>
  );
}