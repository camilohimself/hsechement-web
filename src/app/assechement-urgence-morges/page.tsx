import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Morges';
const CODE_POSTAL = '1110-1117';
const QUARTIERS = [
  'Centre Morges', 'Vertou', 'Champ-Colomb', 'Beausobre', 'Saint-Prex',
  'Lully', 'Bremblens', 'Romanel-sur-Morges', 'Vufflens-le-Château', 'Denens'
];

export const metadata: Metadata = {
  title: `Assèchement Morges | Expert Dégât d.eau 24h/7j - Intervention 30min`,
  description: `EXPERT assèchement Morges depuis ${COMPANY.founded}! ⚡ Position #1 région Morges (${CODE_POSTAL}). Intervention 30min, agréé assurances. Leader incontesté!`,
  openGraph: {
    title: `#1 Assèchement Morges | Expert reconnu Dégât d.eau`,
    description: `LEADER assèchement Morges depuis ${COMPANY.founded}. Expert reconnu dégâts d'eau région Morges. Service premium 30min. Références exceptionnelles.`,
    url: `${BASE_URL}/assechement-urgence-morges`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-morges`,
  },
};

// Schema LocalBusiness spécifique Morges - LEADER
const morgesBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Morges - Expert assèchement #1",
  "description": "LEADER assèchement d'urgence à Morges depuis 2015. Expert reconnu dégâts d'eau, inondations. Service premium 24h/7j. Références exceptionnelles région Morges.",
  "url": `${BASE_URL}/assechement-urgence-morges`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "City",
    "name": "Morges",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.5108,
      "longitude": 6.4969
    },
    "geoRadius": "12000"
  },
  "priceRange": "CHF 150-500",
  "openingHours": "Mo-Su 00:00-24:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

export default function AssechementUrgenceMorgesPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Morges */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(morgesBusinessSchema)
        }}
      />

      {/* Hero Section LEADER Morges */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center items-center mb-6">
              <span className="text-6xl animate-pulse">👑</span>
              <span className="text-4xl ml-3">#1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Assèchement Morges
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4 bg-white/20 backdrop-blur rounded-xl p-4 border border-white/30">
              🏆 EXPERT #1 RÉGION MORGES DEPUIS {COMPANY.founded} 🏆
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention en 30 minutes • 24h/7j • Leader Incontesté ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-3">🏆</div>
                <div className="font-bold text-lg">Leader morges</div>
                <div className="text-sm mt-2">
                  Position #1 • {COMPANY.experience} d&apos;excellence
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl mb-3">⭐</div>
                <div className="font-bold text-lg">127+ Références</div>
                <div className="text-sm mt-2">
                  Note 4.9/5 • Clients satisfaits région
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce border-4 border-yellow-300"
              >
                👑 EXPERT #1 MORGES
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Expert Gratuit
              </a>
            </div>
          </div>
        </div>

        {/* Éléments premium animés */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute animate-bounce top-10 left-10">👑</div>
          <div className="absolute animate-bounce top-20 right-20 delay-100">🏆</div>
          <div className="absolute animate-bounce bottom-20 left-20 delay-200">⭐</div>
          <div className="absolute animate-bounce bottom-10 right-10 delay-300">💎</div>
        </div>
      </section>

      {/* Pourquoi #1 à Morges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Pourquoi H-Séchement est #1 à Morges?
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  🏆 Leadership Incontesté Morges
                </h3>
                <div className="space-y-6">
                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">👑</div>
                      <div>
                        <div className="font-bold text-xl mb-2">Expert reconnu depuis {COMPANY.founded}</div>
                        <p className="text-gray-700">
                          <strong>Premier intervenant</strong> de la région morgienne.
                          Réputation bâtie sur {COMPANY.experience} d&apos;excellence ininterrompue.
                          Référence absolue pour assurances, architectes, syndics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🏠</div>
                      <div>
                        <div className="font-bold text-xl mb-2">Connaissance parfaite Morges</div>
                        <p className="text-gray-700">
                          <strong>Chaque rue, chaque bâtiment connu.</strong>
                          Expertise unique architecture morgienne: villas Belle Époque,
                          bâtiments historiques, lotissements modernes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">⚡</div>
                      <div>
                        <div className="font-bold text-xl mb-2">Intervention express Morges</div>
                        <p className="text-gray-700">
                          <strong>Record: 12 minutes</strong> pour atteindre centre Morges.
                          Équipe locale dédiée, matériel stocké sur place.
                          Disponibilité 24h/7j garantie.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  🌟 Service premium Morges
                </h3>
                <div className="space-y-4">
                  <div className="border border-yellow-200 rounded-xl p-6 bg-gradient-to-r from-yellow-50 to-amber-50">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">💎</span>
                      <h4 className="font-bold text-xl">Service haut de gamme</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Intervention premium avec équipe senior expérimentée.
                      Matériel de pointe, techniques avancées, finitions soignées.
                    </p>
                    <div className="text-sm text-hsechement-red font-semibold">
                      Équipe certifiée • Matériel premium • Garantie étendue
                    </div>
                  </div>

                  <div className="border border-amber-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">⭐</span>
                      <h4 className="font-bold text-xl">Satisfaction client exceptionnelle</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      <strong>127+ interventions Morges</strong> avec note moyenne 4.9/5.
                      Suivi personnalisé, conseil expert, relation de confiance.
                    </p>
                    <div className="text-sm text-hsechement-orange font-semibold">
                      Note 4.9/5 • Recommandations • Fidélité client
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏆</span>
                      <h4 className="font-bold text-xl">Références Prestigieuses</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Interventions villa de maître, château, entreprises renommées.
                      Confiance des plus grandes compagnies d&apos;assurance suisses.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">
                      Patrimoine historique • Entreprises • Assurances premium
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Expertise Morges */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Zone d&apos;Excellence Région Morges
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service expert disponible 24h/7j dans toute la région morgienne
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((quartier, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-2 border-yellow-100">
                  <div className="text-2xl mb-3">👑</div>
                  <h3 className="font-bold text-lg mb-2">{quartier}</h3>
                  <div className="text-sm text-gray-600">
                    Service expert ≤ 20min
                  </div>
                  <div className="text-xs text-hsechement-red mt-1 font-semibold">
                    Zone premium
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-8 border-2 border-yellow-300">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                🏆 Temps d&apos;Intervention Expert Morges
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-hsechement-red">≤ 12min</div>
                  <div className="text-sm text-gray-700 font-semibold">Centre Morges • Record établi</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-hsechement-orange">≤ 18min</div>
                  <div className="text-sm text-gray-700 font-semibold">Vertou • Beausobre • Saint-Prex</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700 font-semibold">Communes limitrophes • Garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Premium Morges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              ⭐ Témoignages Clients Premium Morges
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl mr-3">⭐⭐⭐⭐⭐</div>
                  <div className="font-bold">Dr. Marie-Claire P. - Villa Beausobre</div>
                </div>
                <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                  &quot;Fuite majeure dans notre villa Belle Époque un dimanche soir.
                  H-Séchement est arrivé en 15 minutes avec une équipe exceptionnelle.
                  Travail de maître, respect total du patrimoine. RECOMMANDE VIVEMENT!&quot;
                </p>
                <div className="text-sm text-hsechement-red font-bold">
                  ⭐ Intervention Premium Villa Historique - Janvier 2025
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-2xl mr-3">⭐⭐⭐⭐⭐</div>
                  <div className="font-bold">Jean-Luc M. - Directeur Morges SA</div>
                </div>
                <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                  &quot;Rupture canalisation dans nos bureaux centre Morges. H-Séchement
                  a géré l&apos;urgence de A à Z. Professionnalisme exemplaire,
                  aucun arrêt d&apos;activité. Notre partenaire de confiance!&quot;
                </p>
                <div className="text-sm text-hsechement-orange font-bold">
                  🏆 Client Entreprise Fidèle - Mars 2025
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                🏆 Statistiques Excellence Morges
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">127+</div>
                  <div className="text-sm text-gray-700">Interventions réussies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-orange">4.9/5</div>
                  <div className="text-sm text-gray-700">Note satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">{COMPANY.experience}</div>
                  <div className="text-sm text-gray-700">Années d&apos;excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-700">100%</div>
                  <div className="text-sm text-gray-700">Recommandation client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Technique Morges */}
      <section className="section-padding bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              💎 Expertise Technique Premium Morges
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  🏛️ Spécialiste Patrimoine Morgien
                </h3>
                <p className="text-gray-700">
                  <strong>Expert reconnu bâtiments historiques Morges.</strong>
                  Techniques de restauration respectueuses, matériaux d&apos;époque,
                  collaboration architectes du patrimoine. Conservation + efficacité moderne.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-bold mb-3 text-hsechement-orange">
                  🏠 Architecture Résidentielle Morges
                </h3>
                <p className="text-gray-700">
                  <strong>Maîtrise parfaite typologie morgienne:</strong>
                  villas Belle Époque, maisons vigneronnes, appartements modernes.
                  Chaque intervention adaptée au style architectural spécifique.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-500">
                <h3 className="text-xl font-bold mb-3 text-gray-600">
                  🔬 Technologies de Pointe
                </h3>
                <p className="text-gray-700">
                  <strong>Équipement professionnel dernière génération:</strong>
                  caméras thermiques FLIR, hygromètres calibrés, déshumidificateurs
                  industriels. Diagnostic précis + intervention ciblée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Expert Morges */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              👑 Expert #1 Morges à Votre Service!
            </h2>
            <p className="text-xl mb-8">
              Faites confiance au LEADER incontesté de l&apos;assèchement morgien.
              {COMPANY.experience} d&apos;excellence vous garantissent le meilleur service.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl mb-3">👑</div>
                <div className="font-bold text-xl mb-2">Position #1 Morges</div>
                <div className="text-lg font-semibold">{CONTACT.emergencyPhone}</div>
                <div className="text-sm mt-2">Leader incontesté • Service premium</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-xl mb-2">Intervention express</div>
                <div className="text-lg font-semibold">Record: 12 minutes</div>
                <div className="text-sm mt-2">Centre Morges • Équipe dédiée</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse border-4 border-yellow-300"
              >
                👑 EXPERT #1 MORGES
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Service premium Gratuit
              </a>
            </div>

            <div className="mt-8 text-lg bg-white/20 backdrop-blur rounded-xl p-4">
              <strong>🏆 LEADER INCONTESTÉ MORGES DEPUIS {COMPANY.founded}</strong>
              <br />
              127+ références • Note 4.9/5 • Service premium garanti
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}