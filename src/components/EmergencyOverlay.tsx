'use client';

import { Phone, MapPin, Clock, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT } from '@/data/site-config';

interface EmergencyOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function EmergencyOverlay({ isVisible, onClose }: EmergencyOverlayProps) {
  const [userLocation, setUserLocation] = useState<string>('votre zone');
  const [estimatedTime, setEstimatedTime] = useState<number>(30);

  useEffect(() => {
    if (!isVisible) return;

    // Vibration si supportée
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }

    // Géolocalisation simple pour estimer zone
    const getLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Simulation mapping coordinates → zone
            const { latitude, longitude } = position.coords;

            // Zone approximative Suisse romande
            if (latitude > 46.5 && latitude < 46.6 && longitude > 6.6 && longitude < 6.7) {
              setUserLocation('Lausanne');
              setEstimatedTime(25);
            } else if (latitude > 46.1 && latitude < 46.3 && longitude > 6.1 && longitude < 6.2) {
              setUserLocation('Genève');
              setEstimatedTime(28);
            } else if (latitude > 46.4 && latitude < 46.5 && longitude > 6.8 && longitude < 6.9) {
              setUserLocation('Montreux');
              setEstimatedTime(22);
            } else {
              setUserLocation('Suisse romande');
              setEstimatedTime(30);
            }
          },
          () => {
            // Fallback si géoloc refusée
            setUserLocation('votre région');
          },
          { timeout: 5000 }
        );
      }
    };

    getLocation();
  }, [isVisible]);

  const handleEmergencyCall = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'emergency_call', {
        event_category: 'Emergency',
        event_label: 'panic_mode_call',
        value: 1
      });
    }

    // Vibration confirmation
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100, 50, 100]);
    }

    window.location.href = `tel:${CONTACT.emergencyPhone}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-hsechement-cta-red flex flex-col">
      {/* Header avec fermeture */}
      <div className="flex justify-between items-center p-4 bg-hsechement-cta-red/90">
        <div className="text-white font-bold text-lg">MODE URGENCE</div>
        <button
          onClick={onClose}
          className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Fermer mode urgence"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 text-white text-center">
        {/* Animation urgence */}
        <div className="animate-pulse text-8xl mb-6">🚨</div>

        <h1 className="text-3xl md:text-4xl font-black mb-4 text-shadow">
          URGENCE DÉGÂT D'EAU
        </h1>

        <p className="text-xl mb-6 opacity-90">
          Pas de panique, nous arrivons !
        </p>

        {/* Info localisation */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-8 w-full max-w-sm">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-semibold">Zone: {userLocation}</span>
          </div>
          <div className="flex items-center justify-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>Arrivée estimée: {estimatedTime} minutes</span>
          </div>
        </div>

        {/* GROS BOUTON APPEL */}
        <button
          onClick={handleEmergencyCall}
          className="w-full max-w-md bg-white text-hsechement-cta-red py-8 px-6 rounded-2xl font-black text-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl animate-pulse mb-6"
          style={{
            boxShadow: '0 0 30px rgba(255,255,255,0.5)',
            animationDuration: '1s'
          }}
        >
          <Phone className="w-10 h-10 mx-auto mb-3 animate-bounce" />
          APPELER MAINTENANT
          <div className="text-lg font-bold mt-2 opacity-80">
            {CONTACT.emergencyPhone}
          </div>
        </button>

        {/* Instructions urgence */}
        <div className="text-sm opacity-80 max-w-md">
          <p className="mb-2">✓ Coupez l'eau si possible</p>
          <p className="mb-2">✓ Éloignez objets de valeur</p>
          <p>✓ Notre équipe arrive dans {estimatedTime} minutes</p>
        </div>
      </div>

      {/* Alternative contact */}
      <div className="p-4 bg-hsechement-cta-red/90 text-center">
        <p className="text-white/80 text-sm mb-2">
          Impossible d'appeler ?
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href={`sms:${CONTACT.emergencyPhone}?body=URGENCE dégât d'eau à ${userLocation}. Besoin intervention immédiate.`}
            className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors"
          >
            📱 SMS
          </a>
          <a
            href={`https://wa.me/41${CONTACT.emergencyPhone.replace(/\s/g, '').substring(1)}?text=🚨 URGENCE dégât d'eau à ${userLocation}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}