import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Montreux';
const CODE_POSTAL = '1820-1824';
const QUARTIERS = [
  'Centre Montreux', 'Clarens', 'Territet', 'Glion', 'Caux',
  'Veytaux', 'La Tour-de-Peilz', 'Blonay', 'Saint-Légier', 'Corsier-sur-Vevey'
];

export const metadata: Metadata = {
  title: `Humidité Traitement Montreux | Assèchement urgence Riviera - Service premium`,
  description: `EXPERT humidité Montreux Riviera! ⚡ Traitement professionnel en 30min (${CODE_POSTAL}). Spécialiste climat lacustre. Service premium. Devis gratuit.`,
  openGraph: {
    title: `Traitement Humidité Montreux | Expert riviera vaudoise`,
    description: `Spécialiste traitement humidité Montreux. Expert climat Riviera, intervention premium 30min. Service 24h/7j région Montreux-Vevey.`,
    url: `${BASE_URL}/assechement-urgence-montreux`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-montreux`,
  },
};

// Schema LocalBusiness spécifique Montreux
const montreuxBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Montreux - Traitement Humidité Riviera",
  "description": "Spécialiste traitement humidité à Montreux. Expert climat Riviera vaudoise, intervention premium pour dégâts d'eau, moisissures. Service 24h/7j région lacustre.",
  "url": `${BASE_URL}/assechement-urgence-montreux`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Montreux",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.4312,
      "longitude": 6.9106
    },
    "geoRadius": "12000"
  },
  "priceRange": "CHF 180-600",
  "openingHours": "Mo-Su 00:00-24:00"
};

export default function AssechementUrgenceMontreuxPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Montreux */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(montreuxBusinessSchema)
        }}
      />

      {/* Hero Section PREMIUM Montreux */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🎼</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Humidité Traitement Montreux
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Assèchement d&apos;Urgence Riviera - Service premium
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention en 30 minutes • 24h/7j • Riviera vaudoise ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🎼</div>
                <div className="font-bold text-lg">Riviera Prestigieuse</div>
                <div className="text-sm mt-2">
                  Montreux • Clarens • Territet • Glion
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏔️</div>
                <div className="font-bold text-lg">Climat Lacustre</div>
                <div className="text-sm mt-2">
                  Expert humidité • Lac Léman • Microclima
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                🎼 URGENCE MONTREUX
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Service premium Riviera
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Climat Riviera */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Expert Humidité Climat Riviera
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Spécialiste Climat Lacustre Montreux
                </h3>
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🌊</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Microclima Léman</div>
                        <p className="text-gray-700">
                          <strong>Expertise unique conditions lacustres.</strong>
                          Humidité constante lac Léman, brouillards fréquents, variations
                          thermiques créent défis spécifiques traitement humidité.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🏰</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Patrimoine Riviera</div>
                        <p className="text-gray-700">
                          <strong>Savoir-faire bâtiments prestige:</strong>
                          palaces, villas Belle Époque, chalets traditionnels.
                          Techniques respectueuses du patrimoine architectural.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🎼</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Service premium Montreux</div>
                        <p className="text-gray-700">
                          <strong>Intervention haut de gamme</strong> adaptée au standing
                          Riviera. Discrétion, élégance, finitions parfaites.
                          Clientèle internationale exigeante.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Types d&apos;Interventions Montreux
                </h3>
                <div className="space-y-4">
                  <div className="border border-purple-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏰</span>
                      <h4 className="font-bold text-lg">Palaces & Hôtels Prestige</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Intervention discrète établissements de luxe. Aucune gêne
                      pour la clientèle, travail nocturne si nécessaire.
                    </p>
                    <div className="text-sm text-hsechement-red font-semibold">
                      5 étoiles • Luxury • Confidentialité absolue
                    </div>
                  </div>

                  <div className="border border-pink-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏡</span>
                      <h4 className="font-bold text-lg">Villas riviera premium</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Villas avec vue lac, propriétés d&apos;exception Clarens-Territet.
                      Service personnalisé, respect intimité propriétaires.
                    </p>
                    <div className="text-sm text-hsechement-orange font-semibold">
                      Vue lac • Propriétés exception • Service VIP
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🎪</span>
                      <h4 className="font-bold text-lg">Événementiel Montreux</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Interventions urgentes période Festival, Casino, Centre Congrès.
                      Gestion crise, solutions express événements.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">
                      Festival • Casino • Événements • Solutions express
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Riviera Premium */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Intervention Riviera Premium
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service premium humidité 24h/7j dans toute la Riviera vaudoise
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-purple-100">
                  <div className="text-2xl mb-3">🎼</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Service premium en 30min
                  </div>
                  <div className="text-xs text-hsechement-red mt-1 font-semibold">
                    Riviera exclusive
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                🎼 Temps d&apos;Intervention Riviera
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700">Centre Montreux • Clarens</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-orange">≤ 25min</div>
                  <div className="text-sm text-gray-700">Territet • Glion • Caux</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500">en 30min</div>
                  <div className="text-sm text-gray-700">Veytaux • Blonay • Région</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problèmes Humidité Riviera */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Défis Humidité Spécifiques Riviera
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Humidité Lacustre</h3>
                <p className="text-gray-700">
                  Proximité immédiate lac Léman génère humidité ambiante élevée
                  toute l&apos;année. Condensation, moisissures récurrentes.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Microclima montagne</h3>
                <p className="text-gray-700">
                  Contraste lac-montagne crée variations thermiques brutales.
                  Choc thermique, dilatation, infiltrations saisonnières.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏰</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Patrimoine exigeant</h3>
                <p className="text-gray-700">
                  Bâtiments historiques, palaces, villas prestige nécessitent
                  techniques spécialisées + matériaux nobles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Premium Montreux */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              ⭐ Références Prestige Montreux
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">Directeur Palace 5* - Montreux</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Infiltration critique en pleine saison. H-Séchement a géré
                  l&apos;urgence avec une discrétion exemplaire. Aucun client dérangé,
                  intervention de nuit. Service premium digne d&apos;un 5 étoiles.&quot;
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  🏰 Établissement Prestige - Juillet 2025
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-pink-200">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">Propriétaire Villa Clarens</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Problème humidité récurrent dans notre villa vue lac.
                  Diagnostic expert, solution définitive. Enfin débarrassés
                  des moisissures! Tarif correct pour la qualité.&quot;
                </p>
                <div className="text-sm text-hsechement-orange font-semibold">
                  🏡 Propriété Vue Lac - Avril 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Montreux */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Questions Traitement Humidité Montreux
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-200">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Pourquoi tant d&apos;humidité près du lac Léman?
                </h3>
                <p className="text-gray-700">
                  <strong>Évaporation constante du lac</strong> + relief montagnard créent
                  microclima très humide. Brouillards fréquents, condensation,
                  moisissures récurrentes nécessitent expertise spécialisée.
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 shadow-sm border border-pink-200">
                <h3 className="text-xl font-bold mb-3 text-hsechement-orange">
                  Intervenez-vous dans les palaces de Montreux?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, spécialiste établissements prestige.</strong> Interventions
                  discrètes, souvent nocturnes, aucune gêne clientèle. Références
                  hôtels 5 étoiles, respect standards luxury.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-600">
                  Comment traiter définitivement l&apos;humidité Riviera?
                </h3>
                <p className="text-gray-700">
                  <strong>Solution globale adaptée au climat lacustre:</strong>
                  ventilation mécanique, déshumidification permanente, étanchéité renforcée.
                  Maintenance préventive recommandée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Premium Montreux */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              🎼 Humidité Montreux? Solution Premium!
            </h2>
            <p className="text-xl mb-8">
              Expert climat Riviera à votre service. Intervention premium
              digne du standing Montreux-Riviera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                🎼 EXPERT RIVIERA
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Service premium
              </a>
            </div>

            <div className="mt-8 text-lg">
              <strong>Spécialiste climat lacustre</strong> • Service premium Riviera vaudoise
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}