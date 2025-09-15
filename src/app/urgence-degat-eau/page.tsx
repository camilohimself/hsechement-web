import { Metadata } from 'next';
import LocalSchema from '@/components/LocalSchema';
import { CONTACT, SERVICES, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'URGENCE Dégât d\'Eau 24h/7j | Intervention 30min Suisse Romande',
  description: 'URGENCE dégât d\'eau ? Appelez maintenant ! Intervention sous 30 minutes, 24h/7j en Suisse romande. Service professionnel agréé assurances.',
  openGraph: {
    title: 'URGENCE Dégât d\'Eau | Intervention Immédiate 24h/7j',
    description: 'Dégât d\'eau urgent ? Intervention sous 30 minutes, 24h/7j. Service professionnel en Suisse romande, agréé assurances.',
    url: `${BASE_URL}/urgence-degat-eau`,
  },
  alternates: {
    canonical: `${BASE_URL}/urgence-degat-eau`,
  },
};

export default function UrgenceDegatEauPage() {
  return (
    <main>
      <LocalSchema specificServices={['assechement-urgence']} />

      <section className="bg-gradient-to-br from-urgent-red to-urgent-red-dark text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-pulse text-6xl mb-6">🚨</div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 animate-pulse">
              URGENCE DÉGÂT D'EAU
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-bold">
              Intervention sous 30 minutes • 24h/7j • Suisse Romande
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                className="bg-white text-urgent-red px-8 py-4 rounded-full font-black text-xl hover:bg-gray-100 transition-colors shadow-xl flex items-center animate-bounce"
              >
                📞 APPELER MAINTENANT
              </a>
              <div className="text-lg font-bold animate-pulse">
                {CONTACT.emergencyPhone}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold">Intervention 30min</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">🛠️</div>
                <div className="font-bold">Équipe professionnelle</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-3xl mb-2">✅</div>
                <div className="font-bold">Agréé assurances</div>
              </div>
            </div>
          </div>
        </div>

        {/* Éléments d'urgence animés */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute animate-ping top-10 left-10">⚠️</div>
          <div className="absolute animate-ping top-20 right-20 delay-100">⚠️</div>
          <div className="absolute animate-ping bottom-20 left-20 delay-200">⚠️</div>
          <div className="absolute animate-ping bottom-10 right-10 delay-300">⚠️</div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-urgent-red">
              Types d'Urgences que nous traitons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-urgent-red/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="font-bold mb-2">Fuite d'eau majeure</h3>
                <p className="text-gray-600">Canalisation percée, robinet cassé</p>
              </div>
              <div className="border border-urgent-red/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold mb-2">Inondation domicile</h3>
                <p className="text-gray-600">Appartement, maison inondée</p>
              </div>
              <div className="border border-urgent-red/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-bold mb-2">Dégât machines</h3>
                <p className="text-gray-600">Lave-linge, lave-vaisselle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}