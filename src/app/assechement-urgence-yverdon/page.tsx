import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Yverdon-les-Bains';
const CODE_POSTAL = '1400-1406';
const QUARTIERS = [
  'Centre Yverdon', 'Bel-Air', 'Champ-Pittet', 'Sermuz', 'Grandson',
  'Yvonand', 'Champagne', 'Cheseaux-Noréaz', 'Suscévaz', 'Montagny-près-Yverdon'
];

export const metadata: Metadata = {
  title: `Assainissement Yverdon | Assèchement d'Urgence 24h/7j - Nord vaudois`,
  description: `URGENCE assainissement Yverdon? ⚡ Intervention en 30min dans tout Yverdon (${CODE_POSTAL}). Spécialiste Nord vaudois. Agréé assurances. Devis gratuit.`,
  openGraph: {
    title: `Assèchement d'Urgence Yverdon | Assainissement Nord vaudois`,
    description: `Service assainissement urgence Yverdon en 30min. Spécialiste dégâts d'eau Nord vaudois 24h/7j. Équipe agréée assurances.`,
    url: `${BASE_URL}/assechement-urgence-yverdon`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-yverdon`,
  },
};

// Schema LocalBusiness spécifique Yverdon
const yverdonBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Yverdon - Assainissement Nord vaudois",
  "description": "Service d'assainissement d'urgence à Yverdon-les-Bains. Spécialiste Nord vaudois, intervention 24h/7j pour dégâts d'eau, assèchement. Équipe agréée assurances.",
  "url": `${BASE_URL}/assechement-urgence-yverdon`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Yverdon-les-Bains",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.7786,
      "longitude": 6.6407
    },
    "geoRadius": "15000"
  },
  "priceRange": "CHF 150-500",
  "openingHours": "Mo-Su 00:00-24:00"
};

export default function AssechementUrgenceYverdonPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Yverdon */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(yverdonBusinessSchema)
        }}
      />

      {/* Hero Section URGENCE Yverdon */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🏛️</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Assainissement Yverdon
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Assèchement d&apos;Urgence Nord vaudois - Service en 30min
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention en 30 minutes • 24h/7j • Région Yverdon ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <div className="font-bold text-lg">Nord vaudois</div>
                <div className="text-sm mt-2">
                  Yverdon • Grandson • Yvonand • Champagne
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <div className="font-bold text-lg">Zone Industrielle</div>
                <div className="text-sm mt-2">
                  Entreprises • Industries • Commerces • Résidentiel
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                📞 URGENCE YVERDON
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Gratuit Nord vaudois
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Nord vaudois */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Spécialiste Assainissement Nord vaudois
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Pourquoi H-Séchement à Yverdon?
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🏭</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Expertise Industrielle</div>
                        <p className="text-gray-700">
                          Spécialisation secteur industriel yverdon. Grands volumes d&apos;eau,
                          contraintes techniques, arrêts de production minimisés.
                          Intervention 7j/7 même jours fériés.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🌾</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Région Agricole</div>
                        <p className="text-gray-700">
                          Connaissance parfaite spécificités Nord vaudois: bâtiments agricoles,
                          fermes, caves vinicoles. Matériel adapté milieu rural.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">⚡</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Couverture Étendue</div>
                        <p className="text-gray-700">
                          <strong>Rayon 15km autour d&apos;Yverdon</strong> garanti en 30 minutes.
                          Grandson, Yvonand, Champagne, toutes communes limitrophes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Services Complets Yverdon
                </h3>
                <div className="space-y-4">
                  <div className="border border-hsechement-red/20 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏭</span>
                      <h4 className="font-bold text-lg">Dégâts eau industriels</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Rupture canalisation industrielle, inondation atelier, panne système.
                      Intervention urgente pour limiter arrêt production.
                    </p>
                    <div className="text-sm text-hsechement-red font-semibold">
                      Usines • Ateliers • Entrepôts • Bureaux
                    </div>
                  </div>

                  <div className="border border-emerald-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏠</span>
                      <h4 className="font-bold text-lg">Résidentiel Yverdon</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Appartements, maisons, villas région yverdon. Service personnalisé,
                      respect de votre domicile, nettoyage complet.
                    </p>
                    <div className="text-sm text-hsechement-orange font-semibold">
                      Centre • Bel-Air • Quartiers résidentiels
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🌾</span>
                      <h4 className="font-bold text-lg">Bâtiments Agricoles</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Fermes, étables, caves vinicoles, silos. Matériel adapté,
                      respect contraintes sanitaires agriculture.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">
                      Expertise rurale • Matériel spécialisé
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Intervention Nord vaudois */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Intervention Nord vaudois
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service assainissement 24h/7j dans tout le Nord vaudois depuis Yverdon
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-green-100">
                  <div className="text-2xl mb-3">🏛️</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Service assainissement en 30min
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hsechement-red/5 rounded-xl p-8 border border-hsechement-red/20">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                Temps d&apos;Intervention Nord vaudois
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 15min</div>
                  <div className="text-sm text-gray-700">Centre Yverdon • Bel-Air</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-orange">≤ 25min</div>
                  <div className="text-sm text-gray-700">Grandson • Yvonand • Champagne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">en 30min</div>
                  <div className="text-sm text-gray-700">Communes limitrophes • Zone rurale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Nord vaudois */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Défis Spécifiques Nord vaudois
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Secteur industriel</h3>
                <p className="text-gray-700">
                  Zone industrielle yverdon concentre de nombreuses entreprises.
                  Dégâts d&apos;eau = arrêt production coûteux. Intervention express cruciale.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Région Agricole</h3>
                <p className="text-gray-700">
                  Nombreuses fermes, caves, bâtiments agricoles. Contraintes sanitaires,
                  saisons, matériel spécialisé pour milieu rural.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💧</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Lac de Neuchâtel</h3>
                <p className="text-gray-700">
                  Proximité lac génère humidité particulière. Bâtiments anciens centre-ville
                  nécessitent expertise spécifique étanchéité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Yverdon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Questions Fréquentes Nord vaudois
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Intervenez-vous dans les entreprises d&apos;Yverdon?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, spécialisation secteur industriel.</strong> Intervention 24h/7j
                  y compris weekends et jours fériés. Matériel industriel, équipes formées
                  contraintes production. Facturation directe assurances entreprise.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Couvrez-vous les communes rurales autour d&apos;Yverdon?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, rayon 15km garanti.</strong> Grandson, Yvonand, Champagne,
                  Montagny-près-Yverdon, toutes les communes. Matériel adapté bâtiments
                  agricoles et fermes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Avez-vous des références dans le Nord vaudois?
                </h3>
                <p className="text-gray-700">
                  <strong>{COMPANY.experience} d&apos;expérience région.</strong>
                  Références entreprises industrielles, fermes vinicoles, commerces yverdon,
                  particuliers. Portfolio disponible sur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Yverdon */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Dégât d&apos;Eau dans le Nord vaudois? Action Immédiate!
            </h2>
            <p className="text-xl mb-8">
              Secteur industriel ou résidentiel: chaque minute compte.
              Notre équipe Nord vaudois répond immédiatement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                📞 URGENCE NORD VAUDOIS
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Devis Express
              </a>
            </div>

            <div className="mt-8 text-lg">
              <strong>Spécialiste industriel + rural</strong> • Intervention en 30min dans tout le Nord vaudois
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}