import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import { COMPANY, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: `À propos de ${COMPANY.name} | Spécialiste assèchement Suisse romande`,
  description: `Découvrez H-Séchement, votre spécialiste en assèchement d'urgence depuis ${COMPANY.founded}. ${COMPANY.experience} d'expérience, agréé assurances, intervention 24h/7j.`,
  openGraph: {
    title: `À propos de ${COMPANY.name} | Expert assèchement urgence`,
    description: `Entreprise spécialisée en assèchement d'urgence en Suisse romande. Équipe professionnelle, matériel de pointe, service 24h/7j.`,
    url: `${BASE_URL}/entreprise`,
  },
  alternates: {
    canonical: `${BASE_URL}/entreprise`,
  },
};

export default function EntreprisePage() {
  return (
    <main>
      <LocalSchema />

      <section className="bg-gradient-to-br from-corporate-gray-bg to-hsechement-orange/10 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
              À propos de {COMPANY.name}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Votre spécialiste en assèchement d&apos;urgence en Suisse romande
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-corporate-dark mb-6">
              Notre Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Depuis {COMPANY.founded}, {COMPANY.name} intervient 24h/7j pour tous vos dégâts d&apos;eau et problèmes d&apos;assèchement en Suisse romande.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-hsechement-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Intervention rapide</h3>
                <p className="text-gray-600">Service 24h/7j dans toute la Suisse romande</p>
              </div>
              <div className="text-center">
                <div className="bg-hsechement-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Équipement Professionnel</h3>
                <p className="text-gray-600">Matériel de pointe pour un assèchement efficace</p>
              </div>
              <div className="text-center">
                <div className="bg-hsechement-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Agréé Assurances</h3>
                <p className="text-gray-600">Prise en charge directe par votre assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}