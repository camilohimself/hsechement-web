import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Vevey';
const CODE_POSTAL = '1800-1815';
const QUARTIERS = [
  'Centre Vevey', 'Gilamont', 'Plan', 'Tavelliez', 'Corsier-sur-Vevey',
  'Corseaux', 'La Tour-de-Peilz', 'Clarens', 'Montreux-Est', 'Saint-Légier'
];

export const metadata: Metadata = {
  title: `Assainissement Vevey | Assèchement d'Urgence 24h/7j - Service 30min`,
  description: `URGENCE assainissement Vevey? ⚡ Intervention sous 30min dans tout Vevey (${CODE_POSTAL}). Traitement moisissures, dégât d'eau. Agréé assurances. Devis gratuit.`,
  openGraph: {
    title: `Assèchement d'Urgence Vevey | Assainissement 24h/7j`,
    description: `Service assainissement urgence Vevey sous 30min. Traitement humidité, moisissures 24h/7j dans tout Vevey. Équipe agréée assurances.`,
    url: `${BASE_URL}/assechement-urgence-vevey`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-vevey`,
  },
};

// Schema LocalBusiness spécifique Vevey
const veveyBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Vevey - Assainissement Urgence",
  "description": "Service d'assainissement d'urgence à Vevey. Traitement moisissures, humidité, dégâts d'eau 24h/7j. Équipe professionnelle agréée assurances région Vevey.",
  "url": `${BASE_URL}/assechement-urgence-vevey`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Vevey",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.4607,
      "longitude": 6.8431
    },
    "geoRadius": "10000"
  },
  "priceRange": "CHF 150-500",
  "openingHours": "Mo-Su 00:00-24:00"
};

export default function AssechementUrgenceVeveyPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Vevey */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(veveyBusinessSchema)
        }}
      />

      {/* Hero Section URGENCE Vevey */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🏔️</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Assainissement Vevey
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Assèchement d&apos;Urgence Vevey - Traitement Humidité
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention sous 30 minutes • 24h/7j • Riviera Vevey ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏔️</div>
                <div className="font-bold text-lg">Riviera Vevey</div>
                <div className="text-sm mt-2">
                  Vevey • Montreux • Clarens • La Tour-de-Peilz
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">💧</div>
                <div className="font-bold text-lg">Spécialiste Humidité</div>
                <div className="text-sm mt-2">
                  Moisissures • Assainissement • Déshumidification
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                📞 URGENCE VEVEY
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Gratuit Vevey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Assainissement Vevey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Expertise Assainissement Vevey
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Spécialiste Humidité Région Vevey
                </h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🏔️</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Climat Léman Vevey</div>
                        <p className="text-gray-700">
                          Parfaite connaissance des défis d&apos;humidité spécifiques à la région
                          Riviera vevey. Proximité lac Léman, microclima montagnard,
                          bâtiments anciens nécessitent une expertise particulière.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🔬</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Diagnostic Précis Vevey</div>
                        <p className="text-gray-700">
                          Caméra thermique, hygromètre professionnel, détection fuites non destructive.
                          Analyse complète des causes d&apos;humidité avant traitement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">⚡</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Intervention Rapide Vevey</div>
                        <p className="text-gray-700">
                          <strong>Moins de 30 minutes</strong> pour rejoindre Vevey centre,
                          Clarens, La Tour-de-Peilz. Équipe locale spécialisée.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Services Assainissement Vevey
                </h3>
                <div className="space-y-4">
                  <div className="border border-hsechement-red/20 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🦠</span>
                      <h4 className="font-bold text-lg">Traitement Moisissures Vevey</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Élimination complète moisissures, désinfection, traitement préventif.
                      Respect normes sanitaires strictes.
                    </p>
                    <div className="text-sm text-hsechement-red font-semibold">
                      Cave • Salle bain • Chambre • Salon
                    </div>
                  </div>

                  <div className="border border-hsechement-orange/20 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">💨</span>
                      <h4 className="font-bold text-lg">Déshumidification Vevey</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Assèchement professionnel avec matériel industriel.
                      Surveillance continue taux d&apos;humidité.
                    </p>
                    <div className="text-sm text-hsechement-orange font-semibold">
                      Déshumidificateurs • Ventilation • Séchage
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏠</span>
                      <h4 className="font-bold text-lg">Rénovation Post-Dégât Vevey</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Remise en état complète après assainissement.
                      Peintures, revêtements, isolation si nécessaire.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">
                      Artisans partenaires • Garantie travaux
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Intervention Vevey */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Intervention Riviera Vevey
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service assainissement disponible 24h/7j dans toute la Riviera vaudoise
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="text-2xl mb-3">🏔️</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Service assainissement ≤ 30min
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hsechement-red/5 rounded-xl p-8 border border-hsechement-red/20">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                Temps d&apos;Intervention Assainissement Vevey
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700">Centre Vevey • Gilamont</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-orange">≤ 25min</div>
                  <div className="text-sm text-gray-700">Clarens • La Tour-de-Peilz</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 30min</div>
                  <div className="text-sm text-gray-700">Corsier • Corseaux • Montreux-Est</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes Humidité Spécifiques Vevey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Problèmes d&apos;Humidité Fréquents à Vevey
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hsechement-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Proximité Lac Léman</h3>
                <p className="text-gray-700">
                  L&apos;humidité du lac crée des conditions favorables aux moisissures
                  dans les bâtiments vevey. Traitement préventif essentiel.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-hsechement-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏘️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Bâtiments Anciens Vevey</h3>
                <p className="text-gray-700">
                  Architecture traditionnelle vevey nécessite expertise spécifique.
                  Isolation moderne + respect patrimoine historique.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">❄️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Variations Climatiques</h3>
                <p className="text-gray-700">
                  Alternance chaud/froid, gel/dégel fragilise les canalisations.
                  Prévention et intervention rapide cruciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Vevey */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Questions Fréquentes Assainissement Vevey
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Comment traiter l&apos;humidité récurrente à Vevey?
                </h3>
                <p className="text-gray-700">
                  <strong>Diagnostic complet d&apos;abord:</strong> identification des causes
                  (remontées capillaires, infiltration, condensation). Puis traitement adapté:
                  déshumidification, ventilation, étanchéité selon le cas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Les moisissures reviennent toujours dans ma cave à Vevey?
                </h3>
                <p className="text-gray-700">
                  <strong>Problème fréquent proximité Léman.</strong> Notre méthode: élimination
                  moisissures + traitement préventif longue durée + amélioration ventilation.
                  Garantie anti-récidive 2 ans.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Intervenez-vous dans les bâtiments historiques de Vevey?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, expertise spécialisée patrimoine.</strong> Techniques respectueuses
                  des bâtiments anciens. Collaboration avec architectes du patrimoine si nécessaire.
                  Conservation de l&apos;authenticité + efficacité moderne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Vevey */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Problème d&apos;Humidité à Vevey? Agissez vite!
            </h2>
            <p className="text-xl mb-8">
              L&apos;humidité et les moisissures s&apos;aggravent rapidement.
              Notre équipe Vevey intervient immédiatement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                📞 URGENCE VEVEY
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Diagnostic Gratuit
              </a>
            </div>

            <div className="mt-8 text-lg">
              <strong>Spécialiste humidité région Riviera</strong> • Intervention sous 30min
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}