import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import { CONTACT, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Page non trouvée - H-Séchement',
  description: 'La page que vous recherchez n\'existe pas. Retrouvez nos services d\'assèchement d\'urgence en Suisse romande.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${BASE_URL}/404`,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-gray-bg to-blue-50 flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="text-8xl font-bold text-hsechement-orange/20 mb-8">
            404
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-6">
            Page non trouvée
          </h1>

          <p className="text-xl text-corporate-gray mb-8">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="btn-primary inline-flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Retour à l&apos;accueil
            </Link>

            <Link
              href="/services"
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voir nos services
            </Link>
          </div>

          {/* CTA Urgence */}
          <div className="bg-gradient-to-r from-hsechement-red to-hsechement-red/90 text-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              🚨 Une urgence dégât d&apos;eau ?
            </h2>

            <p className="text-lg mb-6">
              N&apos;attendez pas ! Notre équipe est disponible 24h/24
            </p>

            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              className="inline-block bg-white text-hsechement-red px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
            >
              <Phone className="w-6 h-6 mr-3 inline animate-bounce-phone" />
              {CONTACT.emergencyPhone}
            </a>

            <div className="mt-4 text-sm opacity-90">
              Intervention sous 30 minutes • Service 24h/7j
            </div>
          </div>

          {/* Navigation alternative */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link
              href="/"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-corporate-dark">Accueil</div>
              <div className="text-sm text-corporate-gray">Page principale</div>
            </Link>

            <Link
              href="/services"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-corporate-dark">Services</div>
              <div className="text-sm text-corporate-gray">Nos prestations</div>
            </Link>

            <Link
              href="/contact"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-corporate-dark">Contact</div>
              <div className="text-sm text-corporate-gray">Nous joindre</div>
            </Link>

            <Link
              href="/urgence-degat-eau"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="font-semibold text-corporate-dark">Urgence</div>
              <div className="text-sm text-corporate-gray">Service 24h/7j</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}