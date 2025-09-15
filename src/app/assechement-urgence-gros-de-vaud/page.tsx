import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import CTAUrgence from '@/components/CTAUrgence';
import { CONTACT, COMPANY, BASE_URL } from '@/data/site-config';

const VILLE = 'Gros-de-Vaud';
const CODE_POSTAL = '1040-1148';
const QUARTIERS = [
  'Échallens', 'Bottens', 'Goumoens', 'Penthaz', 'Fey', 'Eclépens',
  'La Sarraz', 'Pompaples', 'Bavois', 'Sugnens', 'Sullens', 'Bettens'
];

export const metadata: Metadata = {
  title: `Entreprise Assèchement Gros-de-Vaud | Service rural Professionnel 24h/7j`,
  description: `ENTREPRISE assèchement Gros-de-Vaud depuis ${COMPANY.founded}! ⚡ Expert rural (${CODE_POSTAL}). Fermes, caves, bâtiments agricoles. Service spécialisé. Devis gratuit.`,
  openGraph: {
    title: `Entreprise Assèchement Gros-de-Vaud | Expert rural`,
    description: `Entreprise spécialisée assèchement Gros-de-Vaud. Expert bâtiments ruraux, fermes, caves agricoles. Service professionnel région rurale.`,
    url: `${BASE_URL}/assechement-urgence-gros-de-vaud`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-gros-de-vaud`,
  },
};

// Schema LocalBusiness spécifique Gros-de-Vaud
const grosDeVaudBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "H-Séchement Gros-de-Vaud - Entreprise Assèchement Rural",
  "description": "Entreprise spécialisée assèchement Gros-de-Vaud. Expert bâtiments ruraux, fermes, caves vinicoles, agriculture. Service professionnel 24h/7j région rurale.",
  "url": `${BASE_URL}/assechement-urgence-gros-de-vaud`,
  "telephone": CONTACT.emergencyPhone,
  "email": CONTACT.email,
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Gros-de-Vaud",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "@context": "https://schema.org",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 46.6406,
      "longitude": 6.5547
    },
    "geoRadius": "20000"
  },
  "priceRange": "CHF 120-450",
  "openingHours": "Mo-Su 00:00-24:00"
};

export default function AssechementUrgenceGrosDeVaudPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Schema LocalBusiness Gros-de-Vaud */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(grosDeVaudBusinessSchema)
        }}
      />

      {/* Hero Section RURAL Gros-de-Vaud */}
      <section className="bg-gradient-to-br from-hsechement-red to-hsechement-red/90 text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🌾</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Entreprise Assèchement Gros-de-Vaud
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Service rural Professionnel - Expert Agriculture
            </div>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention en 30 minutes • 24h/7j • Région Agricole ({CODE_POSTAL})
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🌾</div>
                <div className="font-bold text-lg">Région Agricole</div>
                <div className="text-sm mt-2">
                  Échallens • La Sarraz • Pompaples • Bavois
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <div className="font-bold text-lg">Expert rural</div>
                <div className="text-sm mt-2">
                  Fermes • Caves • Étables • Silos
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center animate-bounce"
              >
                🌾 ENTREPRISE RURALE
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors shadow-xl"
              >
                Devis Agricole Gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Rurale Gros-de-Vaud */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Expertise Assèchement Rural Gros-de-Vaud
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  🌾 Spécialiste Agriculture Gros-de-Vaud
                </h3>
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🚜</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Bâtiments Agricoles</div>
                        <p className="text-gray-700">
                          <strong>Expertise fermes, étables, silos.</strong>
                          Contraintes sanitaires agriculture, normes vétérinaires,
                          respect activité agricole. Matériel adapté milieu rural.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🍷</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Caves Vinicoles</div>
                        <p className="text-gray-700">
                          <strong>Savoir-faire caves à vin région.</strong>
                          Préservation conditions œnologiques, température, humidité
                          contrôlée. Protection stocks précieux.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">🏡</div>
                      <div>
                        <div className="font-bold text-lg mb-2">Habitat Rural</div>
                        <p className="text-gray-700">
                          <strong>Maisons de maître, fermes rénovées.</strong>
                          Respect architecture traditionnelle, matériaux locaux,
                          techniques ancestrales + technologies modernes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                  Services Spécialisés Ruraux
                </h3>
                <div className="space-y-4">
                  <div className="border border-green-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">💧</span>
                      <h4 className="font-bold text-lg">Urgences eau agricoles</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Rupture abreuvoir, fuite système irrigation, inondation étable.
                      Impact immédiat sur le bétail et les cultures.
                    </p>
                    <div className="text-sm text-hsechement-red font-semibold">
                      Bétail • Cultures • Systèmes irrigation
                    </div>
                  </div>

                  <div className="border border-emerald-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🌾</span>
                      <h4 className="font-bold text-lg">Stockage Récoltes</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Assèchement silos, granges, hangars stockage céréales.
                      Préservation qualité récoltes, prévention moisissures.
                    </p>
                    <div className="text-sm text-hsechement-orange font-semibold">
                      Silos • Granges • Céréales • Conservation
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🔧</span>
                      <h4 className="font-bold text-lg">Maintenance préventive</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Contrôles saisonniers, entretien étanchéité, surveillance
                      humidité. Éviter pannes coûteuses période critique.
                    </p>
                    <div className="text-sm text-gray-600 font-semibold">
                      Prévention • Surveillance • Entretien
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communes Gros-de-Vaud */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-corporate-dark">
              Communes Desservies Gros-de-Vaud
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Service rural professionnel dans tout le district Gros-de-Vaud
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {QUARTIERS.map((commune, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-green-100">
                  <div className="text-2xl mb-3">🌾</div>
                  <h3 className="font-bold text-lg mb-2">{commune}</h3>
                  <div className="text-sm text-gray-600">
                    Service rural en 30min
                  </div>
                  <div className="text-xs text-hsechement-red mt-1 font-semibold">
                    Zone agricole
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold mb-6 text-hsechement-red">
                🌾 Temps d&apos;Intervention Rural
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">≤ 20min</div>
                  <div className="text-sm text-gray-700">Échallens • Centre région</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-orange">≤ 25min</div>
                  <div className="text-sm text-gray-700">La Sarraz • Pompaples • Bavois</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hsechement-red">en 30min</div>
                  <div className="text-sm text-gray-700">Communes périphériques</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Défis Agriculture */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">
              Défis Spécifiques Agriculture Gros-de-Vaud
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚜</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Contraintes agricoles</h3>
                <p className="text-gray-700">
                  Intervention sans perturber activité agricole. Respect cycles
                  saisonniers, bien-être animal, normes sanitaires strictes.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Impact Économique</h3>
                <p className="text-gray-700">
                  Dégâts eau = pertes récoltes, mortalité bétail, arrêt production.
                  Intervention urgente pour limiter pertes financières.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Bâtiments Spécialisés</h3>
                <p className="text-gray-700">
                  Architecture rurale spécifique: ventilation naturelle,
                  matériaux locaux, contraintes techniques particulières.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Ruraux */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Témoignages Agriculteurs Gros-de-Vaud
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="text-green-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">François B. - Agriculteur Échallens</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Rupture canalisation dans l&apos;étable un dimanche matin.
                  H-Séchement a compris l&apos;urgence: 60 vaches à traire!
                  Intervention express, respect total des animaux. Merci!&quot;
                </p>
                <div className="text-sm text-hsechement-red font-semibold">
                  🚜 Exploitation Laitière - Février 2025
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
                <div className="flex items-center mb-4">
                  <div className="text-green-400 text-xl mr-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-semibold">Domaine Vinicole - La Sarraz</div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;Infiltration dans notre cave historique. Intervention
                  délicate réussie: vins sauvés, cave assainie. Expertise
                  œnologique remarquable. Recommandons vivement!&quot;
                </p>
                <div className="text-sm text-hsechement-orange font-semibold">
                  🍷 Cave Vinicole - Septembre 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rural */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-corporate-dark">
              Questions Agriculture Gros-de-Vaud
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-200">
                <h3 className="text-xl font-bold mb-3 text-hsechement-red">
                  Comprenez-vous les contraintes agricoles?
                </h3>
                <p className="text-gray-700">
                  <strong>Parfaitement. Nous sommes région agricole.</strong>
                  Respect cycles traite, bien-être animal, normes sanitaires.
                  Intervention adaptée aux contraintes exploitation.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 shadow-sm border border-emerald-200">
                <h3 className="text-xl font-bold mb-3 text-emerald-700">
                  Intervenez-vous dans les caves vinicoles?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, expertise œnologique spécialisée.</strong>
                  Préservation conditions température/humidité, protection stocks,
                  respect processus vinification. Références domaines région.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-700">
                  Proposez-vous maintenance préventive fermes?
                </h3>
                <p className="text-gray-700">
                  <strong>Oui, surveillance saisonnière recommandée.</strong>
                  Contrôles avant période critique (traite, récolte), entretien
                  préventif, détection précoce problèmes. Éviter pannes coûteuses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Rural */}
      <section className="section-padding bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              🌾 Urgence Agricole Gros-de-Vaud?
            </h2>
            <p className="text-xl mb-8">
              Chaque heure compte en agriculture. Notre équipe rurale
              comprend vos enjeux et intervient immédiatement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-hsechement-red px-12 py-4 rounded-full font-black text-2xl hover:bg-gray-100 transition-colors shadow-xl animate-pulse"
              >
                🌾 URGENCE RURALE
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-hsechement-red transition-colors"
              >
                Devis Agricole
              </a>
            </div>

            <div className="mt-8 text-lg">
              <strong>Expert agriculture région</strong> • Service spécialisé bâtiments ruraux
            </div>
          </div>
        </div>
      </section>

      <CTAUrgence />
    </main>
  );
}