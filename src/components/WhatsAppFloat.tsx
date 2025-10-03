'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT } from '@/data/site-config';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [userLocation, setUserLocation] = useState('votre zone');

  useEffect(() => {
    // Afficher après 3 secondes de navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Tooltip automatique après 10 secondes
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 10000);

    // Détecter zone approximative
    const getApproximateLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Approximation simple des zones suisses
            if (latitude > 46.5 && latitude < 46.6) setUserLocation('Lausanne');
            else if (latitude > 46.1 && latitude < 46.3) setUserLocation('Genève');
            else if (latitude > 46.4 && latitude < 46.5) setUserLocation('Montreux');
            else setUserLocation('Suisse romande');
          },
          () => setUserLocation('votre zone'),
          { timeout: 3000 }
        );
      }
    };

    getApproximateLocation();

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'floating_whatsapp',
        value: 1
      });
    }

    // Message pré-rempli intelligent
    const currentPath = window.location.pathname;
    let messageTemplate = '';

    if (currentPath.includes('urgence')) {
      messageTemplate = `🚨 URGENCE dégât d'eau à ${userLocation}

Situation: [Décrivez brièvement]
Lieu exact:
Téléphone:

Merci d'intervenir rapidement !`;
    } else if (currentPath.includes('assechement-urgence-')) {
      const ville = currentPath.split('assechement-urgence-')[1]?.replace('-', ' ') || userLocation;
      messageTemplate = `Bonjour H-Séchement,

J'ai besoin d'une intervention d'assèchement à ${ville}.

Problème:
Adresse:
Quand:

Pouvez-vous me recontacter ?`;
    } else {
      messageTemplate = `Bonjour H-Séchement,

Je souhaite obtenir des informations sur vos services d'assèchement à ${userLocation}.

Mon besoin:
Contact préféré:

Merci !`;
    }

    // Formater numéro pour WhatsApp (enlever espaces, ajouter 41)
    const whatsappNumber = '41' + CONTACT.emergencyPhone.replace(/\s/g, '').substring(1);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageTemplate)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Bouton principal WhatsApp */}
      <div className="fixed bottom-6 left-6 z-50 no-print">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full left-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce">
              💬 Besoin d'aide ? WhatsApp nous !
              <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900"></div>
            </div>
          )}

          {/* Bouton WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
            style={{
              boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
              animationDuration: '2s'
            }}
            aria-label="Contacter par WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />

            {/* Badge notification */}
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
              !
            </div>

            {/* Animation ripple */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
          </button>
        </div>
      </div>

      {/* Version mobile bottom bar alternative */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-green-500 text-white p-3 z-40 no-print shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="w-6 h-6 mr-3" />
            <div>
              <div className="font-bold text-sm">Urgence ? Écrivez-nous !</div>
              <div className="text-xs opacity-90">Réponse immédiate par WhatsApp</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-green-500 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Écrire
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white p-2 hover:bg-green-600 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}