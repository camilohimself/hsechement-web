import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Nyon';
const CODE_POSTAL = '1260-1267';
const QUARTIERS = [
  'Centre-ville Nyon', 'Rive', 'Marens', 'Perdtemps', 'Cossonay-Ville',
  'Crans-près-Céligny', 'Eysins', 'Prangins', 'Gland', 'Rolle'
];

export const metadata: Metadata = {
  title: `Dégât d.eau Nyon | Assèchement d'Urgence 24h/7j - Service en 30min`,
  description: `URGENCE dégât d'eau Nyon? ⚡ Intervention express en 30min dans tout Nyon (${CODE_POSTAL}). Équipe professionnelle 24h/7j. Agréé assurances. Devis gratuit.`,
  openGraph: {
    title: `Assèchement d'Urgence Nyon | Dégât d.eau 24h/7j`,
    description: `Service d'assèchement urgence Nyon en 30min. Intervention 24h/7j dans tout Nyon et région. Équipe agréée assurances.`,
    url: `${BASE_URL}/assechement-urgence-nyon`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-nyon`,
  },
};

// Schema LocalBusiness spécifique Nyon
const nyonBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Nyon - Dégât d.eau Urgence",
  "description": "Service d'assèchement d'urgence à Nyon. Intervention rapide 24h/7j pour dégâts d'eau, inondations, fuites. Équipe professionnelle agréée assurances région Nyon.",
  "url": `${BASE_URL}/assechement-urgence-nyon`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Nyon",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.3833,
      "longitude": 6.2389
    },
    "geoRadius": "12000"
  },
  "priceRange": "CHF 150-500",
  "openingHours": "Mo-Su 00:00-24:00"
};

export default function AssechementUrgenceNyonPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Nyon */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nyonBusinessSchema)
        }}
      />

      {/* Hero Section URGENCE Nyon */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🚨</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Dégât d&apos;Eau Nyon
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Assèchement d&apos;Urgence Nyon - Service en 30min
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention en 30 minutes • 24h/7j • Région Nyon ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="font-bold text-lg">Zone Nyon</div>
                <div className="text-sm mt-2">
                  Nyon • Gland • Rolle • Crans • Prangins
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-lg">Intervention Express</div>
                <div className="text-sm mt-2">
                  Équipe locale Nyon en moins de 30 minutes
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                📞 URGENCE NYON
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Gratuit Nyon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spécialisés Nyon */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Service Assèchement d&apos;Urgence Nyon
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Pourquoi H-Séchement à Nyon?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏠</div>
                    <div>
                      <div className="font-bold">Connaissance Locale Nyon</div>
                      <div className="text-gray-700">
                        Parfaite maîtrise du réseau d&apos;eau nyonnais et des spécificités architecturales
                        de la région. Interventions dans toute la commune de Nyon et environs.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⚡</div>
                    <div>
                      <div className="font-bold">Temps Intervention Nyon</div>
                      <div className="text-gray-700">
                        <strong>Moins de 30 minutes</strong> pour rejoindre n&apos;importe quel point
                        de Nyon, Gland, Rolle ou Prangins. Équipe locale dédiée région.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">👥</div>
                    <div>
                      <div className="font-bold">Équipe Experte Nyon</div>
                      <div className="text-gray-700">
                        {COMPANY.experience} d&apos;expérience dans la région nyonnaise.
                        Certifications professionnelles et agréments assurances suisses.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Types d&apos;Interventions Nyon
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-hsechement-red/30 transition-colors">
                    <div className="font-bold flex items-center">
                      <span className="text-xl mr-3">💧</span>
                      Fuites d&apos;Eau Urgence Nyon
                    </div>
                    <div className="text-sm text-gray-700 mt-2">
                      Canalisation percée, robinet cassé, fuite salle de bain
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-hsechement-red/30 transition-colors">
                    <div className="font-bold flex items-center">
                      <span className="text-xl mr-3">🏠</span>
                      Inondation Domicile Nyon
                    </div>
                    <div className="text-sm text-gray-700 mt-2">
                      Appartement, villa, cave inondée - Pompage et assèchement
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-hsechement-red/30 transition-colors">
                    <div className="font-bold flex items-center">
                      <span className="text-xl mr-3">🏢</span>
                      Commerce/Bureau Nyon
                    </div>
                    <div className="text-sm text-gray-700 mt-2">
                      Intervention express pour minimiser l&apos;arrêt d&apos;activité
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:border-hsechement-red/30 transition-colors">
                    <div className="font-bold flex items-center">
                      <span className="text-xl mr-3">🔧</span>
                      Assainissement Nyon
                    </div>
                    <div className="text-sm text-gray-700 mt-2">
                      Traitement moisissures, désinfection après dégât d&apos;eau
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Intervention Détaillée Nyon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Intervention Région Nyon
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service d&apos;assèchement disponible 24h/7j dans toute la région nyonnaise
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-3">📍</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Intervention en 30min
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hsechement-red/5 rounded-xl p-8 border border-hsechement-red/20">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                Temps d&apos;Intervention Garantis Région Nyon
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700">Centre Nyon • Rive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 25min</div>
                  <div className="text-sm text-gray-700">Gland • Rolle • Prangins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">en 30min</div>
                  <div className="text-sm text-gray-700">Crans • Eysins • Communes limitrophes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Nyon */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Témoignages Clients Nyon
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">Patricia R. - Nyon Centre</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Fuite importante dans ma cuisine un samedi matin. H-Séchement
                  est arrivé en 18 minutes chrono! Intervention parfaite et assurance
                  a tout pris en charge.&quot;
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  Intervention Nyon Centre - Février 2025
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">Marc D. - Gland</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Cave inondée suite à rupture canalisation. Équipe très professionnelle,
                  matériel de pointe. Tout sec en 48h, aucun dégât résiduel.&quot;
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  Intervention Gland - Mars 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Spécifique Nyon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Questions Fréquentes Nyon
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Combien de temps pour arriver à Nyon en urgence?
                </h3>
                <p className="text-gray-700">
                  <strong>Moins de 30 minutes</strong> partout dans la région nyonnaise.
                  Nyon centre: 15-20min, Gland/Rolle: 20-25min, communes limitrophes: max 30min.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Travaillez-vous avec les assurances à Nyon?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, facturation directe possible.</strong> Nous sommes agréés
                  par toutes les principales compagnies d&apos;assurance suisses.
                  Devis gratuit et gestion complète de votre dossier.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Quels équipements utilisez-vous à Nyon?
                </h3>
                <p className="text-gray-700">
                  <strong>Matériel professionnel de pointe:</strong> déshumidificateurs industriels,
                  ventilateurs axiaux, détecteurs d&apos;humidité, caméras thermiques.
                  Équipement adapté à chaque type d&apos;intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Nyon */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Dégât d&apos;Eau à Nyon? N&apos;attendez pas!
            </h2>
            <p className="text-xl mb-8">
              Plus vous attendez, plus les dégâts s&apos;aggravent.
              Nos équipes Nyon interviennent immédiatement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                📞 URGENCE NYON
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Devis Gratuit
              </a>
            </div>

            <div className="mt-8 text-lg">
              <strong>Intervention garantie en 30 minutes</strong> dans toute la région Nyon
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}