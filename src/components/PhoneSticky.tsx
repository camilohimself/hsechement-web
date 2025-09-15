'use client';

import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT } from '@/data/site-config';

export default function PhoneSticky() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton sticky après 200px de scroll
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call_click', {
        event_category: 'CTA',
        event_label: 'sticky_mobile_cta',
        value: 1
      });
    }

    window.location.href = `tel:${CONTACT.emergencyPhone}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Version Mobile - Sticky bottom */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 no-print">
        <button
          onClick={handleCall}
          className="w-full bg-hsechement-red text-white px-4 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-hsechement-red/90 transition-all duration-300 animate-pulse-urgent"
          style={{
            boxShadow: '0 10px 25px rgba(220, 38, 38, 0.4)'
          }}
        >
          <Phone className="w-6 h-6 mr-3 inline animate-bounce-phone" />
          URGENCE • {CONTACT.emergencyPhone}
        </button>
      </div>

      {/* Version Desktop - Sticky côté droit */}
      <div className="hidden md:block fixed right-6 bottom-6 z-50 no-print">
        <button
          onClick={handleCall}
          className="bg-hsechement-red text-white p-4 rounded-full shadow-2xl hover:bg-hsechement-red/90 hover:scale-110 transition-all duration-300 group"
          title="Appel d'urgence"
          style={{
            boxShadow: '0 8px 20px rgba(220, 38, 38, 0.3)'
          }}
        >
          <Phone className="w-8 h-8 animate-bounce-phone" />
        </button>

        {/* Tooltip desktop */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Appel urgence: {CONTACT.emergencyPhone}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </>
  );
}

// Types pour TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      action: string,
      parameters: {
        event_category: string;
        event_label: string;
        value: number;
      }
    ) => void;
  }
}