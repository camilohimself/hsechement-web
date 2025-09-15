import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Lausanne';
const CODE_POSTAL = '1000-1018';
const QUARTIERS = [
  'Centre-ville', 'Ouchy', 'Flon', 'Montbenon', 'Chailly', 'Sauvabelin',
  'Bussigny', 'Renens', 'Prilly', 'Malley', 'Vidy', 'Beaulieu'
];

export const metadata: Metadata = {
  title: `Assèchement d'Urgence Lausanne | Dégât d'Eau 24h/7j - Intervention 30min`,
  description: `URGENCE dégât d'eau Lausanne? ⚡ Intervention sous 30min dans tout Lausanne (${CODE_POSTAL}). Service professionnel 24h/7j. Agréé assurances. Devis gratuit.`,
  openGraph: {
    title: `Dégât d'Eau Lausanne | Assèchement d'Urgence 24h/7j`,
    description: `Intervention urgence assèchement Lausanne sous 30min. Service professionnel 24h/7j dans tout Lausanne et région. Agréé assurances.`,
    url: `${BASE_URL}/assechement-urgence-lausanne`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-lausanne`,
  },
};

// Schema LocalBusiness spécifique Lausanne
const lausanneBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Lausanne - Assèchement d'Urgence",
  "description": "Service d'assèchement d'urgence à Lausanne. Intervention rapide 24h/7j pour dégâts d'eau, inondations, fuites. Équipe professionnelle agréée assurances.",
  "url": `${BASE_URL}/assechement-urgence-lausanne`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Lausanne",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.5197,
      "longitude": 6.6323
    },
    "geoRadius": "15000"
  },
  "priceRange": "CHF 150-500",
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": [
    "https://www.google.com/maps/place/Lausanne"
  ]
};

export default function AssechementUrgenceLausannePage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Lausanne */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lausanneBusinessSchema)
        }}
      />

      {/* Hero Section URGENCE Lausanne */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🚨</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Assèchement d&apos;Urgence Lausanne
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Dégât d&apos;Eau Lausanne - Service Professionnel 30min
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention sous 30 minutes • 24h/7j • Tout Lausanne ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="font-bold text-lg">Zone Lausanne</div>
                <div className="text-sm mt-2">
                  {QUARTIERS.slice(0, 6).join(' • ')}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-lg">Intervention Rapide</div>
                <div className="text-sm mt-2">
                  Équipe sur place en moins de 30 minutes
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                📞 APPEL URGENCE LAUSANNE
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Gratuit
              </a>
            </div>
          </div>
        </div>

        {/* Animation background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute animate-ping top-10 left-10">🌊</div>
          <div className="absolute animate-ping top-20 right-20 delay-100">💧</div>
          <div className="absolute animate-ping bottom-20 left-20 delay-200">🏠</div>
          <div className="absolute animate-ping bottom-10 right-10 delay-300">⚡</div>
        </div>
      </section>

      {/* Pourquoi H-Séchement à Lausanne */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Pourquoi Choisir H-Séchement à Lausanne?
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-hsechement-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Intervention Express Lausanne</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Moins de 30 minutes</strong> pour rejoindre n&apos;importe quel point de Lausanne.
                  Du Centre-ville à Ouchy, de Chailly à Renens.
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  Zones couvertes: {CODE_POSTAL}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-hsechement-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Équipe Locale Lausanne</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Connaissance parfaite</strong> du réseau d&apos;eau lausannois.
                  Interventions déjà réalisées dans tous les quartiers.
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  {COMPANY.experience} d&apos;expérience région
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-hsechement-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Agréé Assurances Lausanne</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Prise en charge directe</strong> par votre assurance.
                  Partenariats avec les principales compagnies suisses.
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  Devis gratuit • Facturation directe
                </div>
              </div>
            </div>

            {/* Témoignages spécifiques Lausanne */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Témoignages Clients Lausanne</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                    <div className="font-semibold">Marie L. - Ouchy</div>
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;Fuite majeure dans mon appartement à Ouchy un dimanche soir.
                    H-Séchement est arrivé en 25 minutes et a tout réglé. Service exceptionnel!&quot;
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                    <div className="font-semibold">Jean-Pierre M. - Centre-ville</div>
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;Dégât d&apos;eau dans mon bureau au centre-ville. Intervention ultra-rapide
                    et professionnelle. Mon assurance a tout pris en charge.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'Intervention Lausanne */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Intervention Lausanne et Environs
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service d&apos;assèchement d&apos;urgence disponible 24h/7j dans tout le Grand Lausanne
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-3">📍</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Intervention ≤ 30min
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hsechement-red/5 rounded-xl p-8 border border-hsechement-red/20">
              <h3 className="text-2xl font-bold mb-4 text-hsechement-red">
                Temps d&apos;Intervention Garantis Lausanne
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700">Centre-ville • Flon • Ouchy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 25min</div>
                  <div className="text-sm text-gray-700">Chailly • Montbenon • Sauvabelin</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 30min</div>
                  <div className="text-sm text-gray-700">Renens • Prilly • Bussigny</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spécifiques Lausanne */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Nos Services Assèchement à Lausanne
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🏢</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Bâtiments Commerciaux Lausanne</h3>
                      <p className="text-gray-700 mb-3">
                        Intervention spécialisée bureaux, commerces, restaurants du centre-ville lausannois.
                        Minimisation des arrêts d&apos;activité.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Secteurs: Centre • Flon • Gare
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🏠</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Résidences Lausanne</h3>
                      <p className="text-gray-700 mb-3">
                        Assèchement appartements, maisons, villas dans tous les quartiers lausannois.
                        Respect total de votre intimité.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Zones: Ouchy • Chailly • Sauvabelin • Montbenon
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🏫</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Institutions Lausanne</h3>
                      <p className="text-gray-700 mb-3">
                        Service dédié écoles, hôpitaux, administrations lausannoises.
                        Interventions discrètes en heures creuses.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Références: CHUV • UNIL • Ville de Lausanne
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">💧</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Urgences Eau Lausanne 24h/7j</h3>
                      <p className="text-gray-700 mb-3">
                        Intervention immédiate fuites, ruptures canalisations, inondations.
                        Équipes d&apos;astreinte permanente sur Lausanne.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Hotline: {CONTACT.emergencyPhone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">🔧</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Assainissement Lausanne</h3>
                      <p className="text-gray-700 mb-3">
                        Traitement moisissures, désinfection, remise en état après dégâts d&apos;eau.
                        Normes sanitaires strictes respectées.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Certifications: ISO • SUVA • Protection santé
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:border-hsechement-red/30 transition-colors">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📊</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Expertise Technique Lausanne</h3>
                      <p className="text-gray-700 mb-3">
                        Détection fuites non destructive, thermographie, mesures d&apos;humidité.
                        Rapports détaillés pour assurances.
                      </p>
                      <div className="text-sm text-hsechement-red font-semibold">
                        Technologies: Caméra thermique • Détecteurs ultrasoniques
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Lausanne */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Questions Fréquentes Lausanne
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Combien de temps pour arriver à Lausanne en cas d&apos;urgence?
                </h3>
                <p className="text-gray-700">
                  <strong>Moins de 30 minutes</strong> partout dans le Grand Lausanne.
                  Nos équipes sont stratégiquement positionnées pour couvrir rapidement
                  le centre-ville, Ouchy, Chailly, Renens et tous les quartiers lausannois.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Intervenez-vous la nuit et le weekend à Lausanne?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, 24h/24 et 7j/7</strong> sans exception. Notre service d&apos;urgence
                  fonctionne en permanence sur Lausanne. Appelez le {CONTACT.emergencyPhone}
                  à n&apos;importe quelle heure.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Quels quartiers de Lausanne couvrez-vous exactement?
                </h3>
                <p className="text-gray-700">
                  <strong>Tout le Grand Lausanne</strong>: {QUARTIERS.join(', ')},
                  ainsi que Pully, Lutry, Saint-Sulpice, et toutes les communes limitrophes.
                  Zone de couverture: rayon de 15km autour de Lausanne.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Mon assurance prend-elle en charge à Lausanne?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui dans la plupart des cas.</strong> Nous travaillons avec toutes
                  les assurances suisses et gérons la facturation directe.
                  Devis gratuit et expertise pour votre dossier assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Lausanne */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Dégât d&apos;Eau à Lausanne? Agissez Maintenant!
            </h2>
            <p className="text-xl mb-8">
              Chaque minute compte en cas de dégât d&apos;eau. Plus vous attendez,
              plus les dégâts s&apos;aggravent et coûtent cher.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <div className="font-bold text-xl mb-2">Appel d&apos;Urgence</div>
                <div className="text-lg font-semibold">{CONTACT.emergencyPhone}</div>
                <div className="text-sm mt-2">Réponse immédiate • 24h/7j</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-bold text-xl mb-2">Intervention Express</div>
                <div className="text-lg font-semibold">≤ 30 minutes</div>
                <div className="text-sm mt-2">Partout dans le Grand Lausanne</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                📞 APPELER MAINTENANT
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Devis Gratuit Lausanne
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Component */}
      <CTAUrgence />
    </main>
  );
}