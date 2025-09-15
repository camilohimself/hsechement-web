'use client';

import { Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT } from '@/data/site-config';

interface CTAUrgenceProps {
  variant?: 'hero' | 'section' | 'sticky';
  className?: string;
}

export default function CTAUrgence({ variant = 'section', className = '' }: CTAUrgenceProps) {
  const handleCall = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call_click', {
        event_category: 'CTA',
        event_label: `${variant}_cta_click`,
        value: 1
      });
    }

    // Initier l'appel
    window.location.href = `tel:${CONTACT.emergencyPhone}`;
  };

  if (variant === 'hero') {
    return (
      <div className={`hero-cta-desktop ${className}`}>
        <div className="bg-gradient-to-r from-hsechement-red to-hsechement-red/90 rounded-2xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4 animate-bounce-phone">
                <Phone className="w-8 h-8 text-hsechement-red" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              URGENCE DÉGÂT D&apos;EAU ?
            </h2>

            <p className="text-white/90 mb-6">
              Intervention en <span className="font-bold">30 minutes</span>
            </p>

            <button
              onClick={handleCall}
              className="btn-urgent w-full text-xl py-6 mb-4 hover:scale-105 transition-transform"
            >
              <Phone className="w-6 h-6 mr-3 inline" />
              APPELER MAINTENANT
            </button>

            <p className="text-white text-lg font-semibold">
              {CONTACT.emergencyPhone}
            </p>

            <div className="flex justify-center items-center space-x-4 mt-4 text-white/80 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                24h/7j
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Suisse romande
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'sticky') {
    return (
      <div className={`sticky-cta-mobile md:hidden ${className}`}>
        <button
          onClick={handleCall}
          className="btn-urgent w-full py-4 text-lg font-bold shadow-2xl"
        >
          <Phone className="w-5 h-5 mr-2 inline animate-bounce-phone" />
          APPEL URGENCE - {CONTACT.emergencyPhone}
        </button>
      </div>
    );
  }

  // variant === 'section' (default)
  return (
    <div className={`bg-hsechement-red text-white rounded-xl p-6 text-center ${className}`}>
      <div className="flex justify-center mb-3">
        <Phone className="w-8 h-8 animate-bounce-phone" />
      </div>

      <h3 className="text-xl font-bold mb-2">Urgence 24h/7j</h3>

      <p className="mb-4">
        Intervention en <span className="font-bold">30 minutes</span>
      </p>

      <button
        onClick={handleCall}
        className="bg-white text-hsechement-red px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full"
      >
        <Phone className="w-5 h-5 mr-2 inline" />
        {CONTACT.emergencyPhone}
      </button>
    </div>
  );
}