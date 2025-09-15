import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle, FileText } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { CONTACT, COMPANY, BASE_URL, LOCAL_AREAS } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact H-Séchement | Urgence 24h/7j Suisse Romande',
  description: 'Contactez H-Séchement pour une intervention d\'urgence. Téléphone 24h/7j, devis gratuit. Service assèchement Suisse romande.',
  openGraph: {
    title: 'Contact H-Séchement | Urgence Assèchement 24h/7j',
    description: 'Besoin d\'une intervention d\'urgence ? Contactez H-Séchement maintenant. Service disponible 24h/24 en Suisse romande.',
    url: `${BASE_URL}/contact`,
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-corporate-gray-bg to-blue-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
              Contactez H-Séchement
            </h1>
            <p className="text-xl md:text-2xl text-corporate-gray mb-8">
              Service d&apos;urgence disponible <span className="font-bold text-hsechement-red">24h/24, 7j/7</span> en Suisse romande
            </p>
          </div>
        </div>
      </section>

      {/* Contact principal */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Urgence - Focus sur le téléphone */}
            <div className="space-y-8">
              {/* CTA Urgence principal - TRÈS VISIBLE */}
              <div className="bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    🚨 URGENCE DÉGÂT D&apos;EAU
                  </h2>

                  <p className="text-xl mb-6">
                    Intervention sous <span className="font-bold">30 minutes</span>
                  </p>

                  <div className="mb-6">
                    <div className="text-sm mb-2 text-white/80">Appelez maintenant:</div>
                    <a
                      href={`tel:${CONTACT.emergencyPhone}`}
                      className="inline-block bg-white text-hsechement-red px-8 py-4 rounded-full font-bold text-3xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
                    >
                      <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
                      {CONTACT.emergencyPhone}
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Disponible 24h/7j
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Suisse romande
                    </div>
                  </div>
                </div>
              </div>

              {/* Contacts normaux */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-corporate-dark mb-6">
                  Autres contacts
                </h3>

                <div className="space-y-4">
                  {/* Téléphone normal */}
                  <div className="flex items-center space-x-4 p-4 bg-corporate-gray-bg rounded-lg">
                    <div className="w-12 h-12 bg-hsechement-orange rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-corporate-gray">Téléphone</div>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="font-bold text-lg text-corporate-dark hover:text-hsechement-orange transition-colors"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4 p-4 bg-corporate-gray-bg rounded-lg">
                    <div className="w-12 h-12 bg-hsechement-red rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-corporate-gray">Email</div>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="font-bold text-lg text-corporate-dark hover:text-hsechement-orange transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-center space-x-4 p-4 bg-corporate-gray-bg rounded-lg">
                    <div className="w-12 h-12 bg-hsechement-orange rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-corporate-gray">Zone d&apos;intervention</div>
                      <div className="font-bold text-lg text-corporate-dark">
                        {CONTACT.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-corporate-dark mb-6">
                Demande de devis
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-corporate-dark mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-corporate-dark mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-corporate-dark mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-corporate-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                    placeholder="votre@email.ch"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-corporate-dark mb-2">
                    Ville/Commune
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez votre commune</option>
                    {LOCAL_AREAS.map((area) => (
                      <option key={area.slug} value={area.city}>
                        {area.city}
                      </option>
                    ))}
                    <option value="autre">Autre commune</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-corporate-dark mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="urgence">🚨 Urgence dégât d&apos;eau</option>
                    <option value="assechement">Assèchement appartement</option>
                    <option value="inondation">Inondation cave/sous-sol</option>
                    <option value="fuite">Recherche de fuite</option>
                    <option value="autre">Autre service</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-corporate-dark mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hsechement-orange focus:border-transparent transition-colors"
                    placeholder="Décrivez votre situation ou vos besoins..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-corporate-gray">
                    J&apos;accepte d&apos;être contacté par H-Séchement concernant ma demande *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Informations pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Horaires */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Disponibilité
              </h3>
              <div className="text-corporate-gray">
                <div className="font-semibold text-hsechement-red">Urgences: 24h/24, 7j/7</div>
                <div className="mt-2">Devis/Conseils:</div>
                <div>Lun-Ven: 8h-18h</div>
                <div>Sam: 9h-16h</div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-hsechement-red rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Zone d&apos;intervention
              </h3>
              <div className="text-corporate-gray">
                <div>Toute la Suisse romande</div>
                <div className="mt-2 text-sm">
                  Arc Lémanique • Canton de Vaud<br />
                  + communes limitrophes
                </div>
              </div>
            </div>

            {/* Devis */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-hsechement-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                Devis gratuit
              </h3>
              <div className="text-corporate-gray">
                <div>Évaluation gratuite</div>
                <div className="mt-2 text-sm">
                  Devis détaillé sous 24h<br />
                  Sans engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Dans combien de temps pouvez-vous intervenir ?",
                answer: "En cas d'urgence, nous intervenons en 30 minutes maximum partout en Suisse romande. Notre service d'urgence est disponible 24h/24, 7j/7."
              },
              {
                question: "Travaillez-vous avec les assurances ?",
                answer: "Oui, nous travaillons directement avec toutes les compagnies d'assurance suisses. Nous nous occupons de toutes les démarches administratives pour vous."
              },
              {
                question: "Le devis est-il gratuit ?",
                answer: "Oui, l'évaluation et le devis sont entièrement gratuits et sans engagement. Nous nous déplaçons pour évaluer la situation et vous proposer la meilleure solution."
              },
              {
                question: "Couvrez-vous toute la Suisse romande ?",
                answer: "Oui, nous couvrons tout l'Arc Lémanique et la Suisse romande, avec des équipes basées dans les principales villes pour garantir une intervention rapide."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-corporate-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-corporate-gray">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une urgence ne peut pas attendre
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plus vous attendez, plus les dégâts s&apos;aggravent.
            Contactez-nous immédiatement pour limiter les dégâts.
          </p>

          <a
            href={`tel:${CONTACT.emergencyPhone}`}
            className="inline-block bg-white text-hsechement-red px-8 py-6 rounded-full font-bold text-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
          >
            <Phone className="w-8 h-8 mr-3 inline animate-bounce-phone" />
            APPEL D&apos;URGENCE: {CONTACT.emergencyPhone}
          </a>

          <div className="mt-6 text-lg">
            Réponse immédiate • Intervention en 30 min • Service 24h/7j
          </div>
        </div>
      </section>
    </>
  );
}