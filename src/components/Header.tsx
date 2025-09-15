'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react';
import { CONTACT, COMPANY } from '@/data/site-config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Urgence', href: '/urgence-degat-eau' },
    { name: 'Entreprise', href: '/entreprise' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleCallClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call_click', {
        event_category: 'Header',
        event_label: 'header_phone_click',
        value: 1
      });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Top bar info - Desktop uniquement */}
      <div className="hidden md:block bg-osom-secondary text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Service 24h/7j</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Suisse romande</span>
              </div>
            </div>
            <div className="font-semibold">
              Intervention sous 30 minutes
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-osom-primary to-osom-secondary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-corporate-dark">H</span>
            </div>
            <div>
              <div className="font-bold text-xl text-corporate-dark">
                {COMPANY.name}
              </div>
              <div className="text-sm text-corporate-gray">
                Assèchement urgence
              </div>
            </div>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-corporate-dark hover:text-osom-secondary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Téléphone desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-corporate-gray">Urgence 24h/7j</div>
              <div className="font-bold text-lg text-corporate-dark">
                {CONTACT.phone}
              </div>
            </div>
            <Link
              href={`tel:${CONTACT.phone}`}
              onClick={handleCallClick}
              className="bg-urgent-red text-white p-3 rounded-full hover:bg-urgent-red-dark transition-colors shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
            </Link>
          </div>

          {/* Menu mobile button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Téléphone mobile */}
            <Link
              href={`tel:${CONTACT.phone}`}
              onClick={handleCallClick}
              className="bg-urgent-red text-white p-2 rounded-full"
            >
              <Phone className="w-5 h-5" />
            </Link>

            {/* Bouton menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-corporate-dark"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-corporate-dark hover:text-osom-secondary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Info urgence mobile */}
            <div className="mt-6 p-4 bg-corporate-gray-bg rounded-lg">
              <div className="text-center">
                <div className="text-sm text-corporate-gray mb-1">
                  Service d&apos;urgence 24h/7j
                </div>
                <div className="font-bold text-lg text-corporate-dark">
                  {CONTACT.phone}
                </div>
                <div className="text-sm text-osom-secondary mt-1">
                  Intervention sous 30 minutes
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}