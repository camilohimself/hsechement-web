import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT, COMPANY, LOCAL_AREAS } from '@/data/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-corporate-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Informations entreprise */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-hsechement-red to-hsechement-orange rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">H</span>
              </div>
              <div className="font-bold text-xl">{COMPANY.name}</div>
            </div>

            <p className="text-gray-300 mb-4">
              Spécialiste de l&apos;assèchement d&apos;urgence en Suisse romande.
              Intervention rapide 24h/24, 7j/7.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-hsechement-orange" />
                <span>Service 24h/7j</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-hsechement-orange" />
                <span>Intervention sous 30 min</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hsechement-orange">
              Nos Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-hsechement-orange transition-colors"
                >
                  Assèchement d&apos;urgence
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-hsechement-orange transition-colors"
                >
                  Dégât d&apos;eau appartement
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-hsechement-orange transition-colors"
                >
                  Inondation cave/sous-sol
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-hsechement-orange transition-colors"
                >
                  Recherche de fuites
                </Link>
              </li>
              <li>
                <Link
                  href="/urgence-degat-eau"
                  className="hover:text-hsechement-red transition-colors font-semibold"
                >
                  🚨 Service d&apos;urgence
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones couvertes */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hsechement-orange">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2 text-gray-300">
              {LOCAL_AREAS.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/assechement-urgence-${area.slug}`}
                    className="hover:text-hsechement-orange transition-colors"
                  >
                    {area.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="hover:text-hsechement-red transition-colors text-sm"
                >
                  + autres communes...
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-hsechement-orange">
              Contact Urgence
            </h3>

            <div className="space-y-4">
              {/* Téléphone urgence */}
              <div className="bg-hsechement-red rounded-lg p-4 text-center">
                <div className="text-sm mb-1">Urgence 24h/7j</div>
                <Link
                  href={`tel:${CONTACT.emergencyPhone}`}
                  className="font-bold text-xl hover:underline flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT.emergencyPhone}
                </Link>
              </div>

              {/* Autres contacts */}
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-hsechement-orange" />
                  <Link
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-hsechement-orange transition-colors"
                  >
                    {CONTACT.email}
                  </Link>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-hsechement-orange mt-0.5" />
                  <span>{CONTACT.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-gray-400 text-sm">
              © {currentYear} {COMPANY.name} - Assèchement d&apos;urgence Suisse romande
            </div>

            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link href="/mentions-legales" className="hover:text-hsechement-red transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-hsechement-red transition-colors">
                Confidentialité
              </Link>
              <Link href="/plan-site" className="hover:text-hsechement-red transition-colors">
                Plan du site
              </Link>
            </div>

            <div className="text-gray-500 text-xs">
              Site optimisé par{' '}
              <Link
                href="https://osom.ch"
                target="_blank"
                className="text-hsechement-orange hover:underline"
              >
                OSOM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}