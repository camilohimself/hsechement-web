import { Metadata } from 'next';
import { Phone, Clock, AlertTriangle, CheckCircle, Droplets, Home, ArrowDown, Search } from 'lucide-react';
import CTAUrgence from '@/components/CTAUrgence';
import LocalSchema from '@/components/LocalSchema';
import { CONTACT, SERVICES, BASE_URL, LOCAL_AREAS } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'URGENCE Dégât d\'Eau 24h/7j | Intervention 30min Suisse Romande',
  description: 'URGENCE dégât d\'eau ? Appelez maintenant ! Intervention sous 30 minutes, 24h/7j en Suisse romande. Service professionnel agréé assurances.',
  openGraph: {
    title: '🚨 URGENCE Dégât d\'Eau | Intervention Immédiate 24h/7j',
    description: 'Dégât d\'eau en cours ? N\'attendez pas ! Intervention d\'urgence sous 30 minutes partout en Suisse romande. Appelez maintenant.',
    url: `${BASE_URL}/urgence-degat-eau`,
  },
  alternates: {
    canonical: `${BASE_URL}/urgence-degat-eau`,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
};

export default function UrgencePage() {
  const handleUrgentCall = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call_click', {
        event_category: 'Emergency',
        event_label: 'urgence_page_call',
        value: 1
      });
    }
  };

  return (
    <>
      <LocalSchema specificServices={['assechement-urgence']} />

      {/* Hero Section Urgence - TRÈS VISIBLE */}
      <section className="bg-gradient-to-br from-urgent-red to-urgent-red-dark text-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">

            {/* Alert visuel */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4 animate-pulse">
                <AlertTriangle className="w-16 h-16 text-white animate-bounce" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              🚨 URGENCE<br />
              DÉGÂT D&apos;EAU
            </h1>

            <p className="text-2xl md:text-3xl font-bold mb-8">
              INTERVENTION SOUS <span className="bg-white text-urgent-red px-4 py-2 rounded-full">30 MINUTES</span>
            </p>

            <p className="text-xl mb-8">
              Service d&apos;urgence 24h/24 • 7 jours sur 7 • Suisse romande
            </p>

            {/* CTA Principal ÉNORME */}
            <div className="mb-8">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                onClick={handleUrgentCall}
                className="inline-block bg-white text-urgent-red px-12 py-8 rounded-2xl font-black text-3xl md:text-4xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-pulse-urgent"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  boxShadow: '0 20px 40px rgba(255,255,255,0.3)'
                }}
              >
                <Phone className="w-12 h-12 mr-4 inline animate-bounce-phone" />
                APPELER MAINTENANT
              </a>
            </div>

            <div className="text-2xl font-bold bg-white/10 rounded-xl p-4 inline-block">
              📞 {CONTACT.emergencyPhone}
            </div>

            {/* Indicators urgence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="bg-white/10 rounded-xl p-4">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Disponible 24h/7j</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Intervention < 30min</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Agréé assurances</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-bounce">💧</div>
          <div className="absolute top-20 right-20 animate-bounce delay-100">💧</div>
          <div className="absolute bottom-20 left-20 animate-bounce delay-200">💧</div>
          <div className="absolute bottom-10 right-10 animate-bounce delay-300">💧</div>
        </div>
      </section>

      {/* Situations d'urgence */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Vous êtes dans une de ces situations ?
            </h2>
            <p className="text-xl text-urgent-red font-semibold">
              N&apos;ATTENDEZ PAS - CHAQUE MINUTE COMPTE !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-12 h-12" />,
                title: "Fuite d'eau importante",
                situations: [
                  "Canalisation qui a éclaté",
                  "Robinet ou WC qui déborde",
                  "Chauffe-eau qui fuit",
                  "Lave-vaisselle/linge en panne"
                ]
              },
              {
                icon: <Home className="w-12 h-12" />,
                title: "Inondation appartement",
                situations: [
                  "Eau qui s'étend partout",
                  "Sol trempé et déformé",
                  "Mobilier en danger",
                  "Voisins du dessous touchés"
                ]
              },
              {
                icon: <ArrowDown className="w-12 h-12" />,
                title: "Cave/sous-sol inondé",
                situations: [
                  "Niveau d'eau qui monte",
                  "Système électrique menacé",
                  "Objets stockés sous l'eau",
                  "Risque d'infiltration"
                ]
              }
            ].map((situation, index) => (
              <div key={index} className="bg-urgent-red/5 border-2 border-urgent-red/20 rounded-xl p-6">
                <div className="text-urgent-red mb-4">
                  {situation.icon}
                </div>
                <h3 className="text-xl font-bold text-corporate-dark mb-4">
                  {situation.title}
                </h3>
                <ul className="space-y-2">
                  {situation.situations.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-corporate-gray">
                      <CheckCircle className="w-4 h-4 text-urgent-red mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-urgent-red/10 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-urgent-red mb-4">
                ⚠️ ATTENTION : Les dégâts s&apos;aggravent rapidement !
              </h3>
              <p className="text-lg text-corporate-dark mb-6">
                Plus vous attendez, plus l&apos;eau s&apos;infiltre et cause des dégâts irréversibles.
                <br /><strong>Agissez maintenant pour limiter les coûts !</strong>
              </p>

              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                onClick={handleUrgentCall}
                className="btn-urgent text-2xl py-6 px-8 inline-flex items-center"
              >
                <Phone className="w-8 h-8 mr-3 animate-bounce-phone" />
                STOPPER LES DÉGÂTS MAINTENANT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'intervention urgence */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Notre intervention d&apos;urgence
            </h2>
            <p className="text-xl text-corporate-gray">
              Protocole éprouvé pour stopper les dégâts rapidement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                time: "0 min",
                title: "Appel reçu",
                description: "Prise en charge immédiate de votre appel. Évaluation de la situation et dispatching de l'équipe la plus proche.",
                color: "bg-urgent-red"
              },
              {
                step: "2",
                time: "5 min",
                title: "Équipe en route",
                description: "Nos techniciens partent avec tout le matériel nécessaire : pompes, déshumidificateurs, bâches de protection.",
                color: "bg-osom-primary"
              },
              {
                step: "3",
                time: "30 min",
                title: "Arrivée sur site",
                description: "Maximum 30 minutes après votre appel. Diagnostic rapide et mise en place immédiate des mesures d'urgence.",
                color: "bg-osom-secondary"
              },
              {
                step: "4",
                time: "45 min",
                title: "Dégâts stoppés",
                description: "Arrêt de la fuite, extraction de l'eau, protection du mobilier et début du processus d'assèchement.",
                color: "bg-urgent-red"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <div className="text-sm font-bold text-urgent-red mb-2">
                  {process.time}
                </div>
                <h3 className="text-xl font-bold text-corporate-dark mb-3">
                  {process.title}
                </h3>
                <p className="text-corporate-gray text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-corporate-dark mb-2">
                ⏱️ Garantie intervention sous 30 minutes
              </h3>
              <p className="text-corporate-gray">
                Si nous n&apos;arrivons pas dans les 30 minutes, l&apos;intervention est gratuite !
                <br />Service disponible 24h/24, 7j/7 dans toute la Suisse romande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services urgence détaillés */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Services d&apos;urgence disponibles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.filter(service => service.urgent).map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-urgent-red text-white p-4 text-center">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold">🚨 {service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-corporate-gray mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-osom-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-corporate-dark">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones couvertes urgence */}
      <section className="section-padding bg-corporate-gray-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
              Intervention d&apos;urgence disponible
            </h2>
            <p className="text-xl text-corporate-gray">
              Service 24h/7j dans toute la Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {LOCAL_AREAS.map((area) => (
              <div
                key={area.slug}
                className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow"
              >
                <div className="font-bold text-corporate-dark">{area.city}</div>
                <div className="text-sm text-urgent-red">< 30 minutes</div>
                <div className="text-xs text-corporate-gray">{area.zipCode}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                Votre commune n&apos;est pas listée ?
              </h3>
              <p className="text-corporate-gray mb-6">
                Nous couvrons également de nombreuses autres communes en Suisse romande.
                <br /><strong>Appelez-nous, nous vous confirmons immédiatement !</strong>
              </p>
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                onClick={handleUrgentCall}
                className="btn-urgent inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2 animate-bounce-phone" />
                Vérifier ma commune
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Urgence */}
      <section className="section-padding bg-gradient-to-r from-urgent-red via-urgent-red-dark to-urgent-red text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ⚠️ CHAQUE SECONDE COMPTE ⚠️
            </h2>

            <p className="text-2xl font-bold mb-8">
              Plus vous attendez, plus les dégâts coûtent cher !
            </p>

            <div className="bg-white/10 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                <div>
                  <div className="text-4xl font-black text-osom-primary">1h</div>
                  <div className="text-sm">Dégâts limités</div>
                  <div className="text-lg">~1&apos;000 CHF</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-yellow-400">24h</div>
                  <div className="text-sm">Dégâts étendus</div>
                  <div className="text-lg">~5&apos;000 CHF</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-300">+48h</div>
                  <div className="text-sm">Dégâts majeurs</div>
                  <div className="text-lg">15&apos;000+ CHF</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <a
                href={`tel:${CONTACT.emergencyPhone}`}
                onClick={handleUrgentCall}
                className="inline-block bg-white text-urgent-red px-16 py-8 rounded-2xl font-black text-4xl md:text-5xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
                style={{
                  animation: 'pulse 1.5s infinite',
                  boxShadow: '0 0 50px rgba(255,255,255,0.5)'
                }}
              >
                <Phone className="w-16 h-16 mr-4 inline" style={{animation: 'bounce 1s infinite'}} />
                APPEL D&apos;URGENCE
              </a>
            </div>

            <div className="text-3xl font-bold mb-2">
              📞 {CONTACT.emergencyPhone}
            </div>

            <div className="text-xl">
              Réponse immédiate • Sur site en 30 min max • Service 24h/7j
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Intervention garantie sous 30 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Disponible 24h/24, 7j/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Agréé par toutes les assurances</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span>Matériel professionnel de pointe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animation background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute animate-ping top-10 left-10">⚠️</div>
          <div className="absolute animate-ping top-20 right-20 delay-100">⚠️</div>
          <div className="absolute animate-ping bottom-20 left-20 delay-200">⚠️</div>
          <div className="absolute animate-ping bottom-10 right-10 delay-300">⚠️</div>
        </div>
      </section>
    </>
  );
}