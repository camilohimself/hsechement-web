'use client';

import { useState, useEffect } from 'react';

export function useEmergencyMode() {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);

  useEffect(() => {
    // Détecter mode urgence basé sur:
    const detectEmergency = () => {
      if (typeof window === 'undefined') return false;

      const currentPath = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);
      const referrer = document.referrer;

      // Conditions d'urgence
      const emergencyPaths = [
        '/urgence-degat-eau',
        '/assechement-urgence-',
      ];

      const emergencyKeywords = [
        'urgence',
        'fuite',
        'inondation',
        'dégât eau',
        'emergency',
      ];

      // 1. URL contient urgence
      const isEmergencyPath = emergencyPaths.some(path =>
        currentPath.includes(path)
      );

      // 2. Paramètre urgence
      const hasUrgencyParam = searchParams.has('urgence') ||
                              searchParams.get('utm_content')?.includes('urgence');

      // 3. Vient de Google avec mots-clés urgence
      const isFromEmergencySearch = emergencyKeywords.some(keyword =>
        referrer.toLowerCase().includes(keyword) ||
        searchParams.get('q')?.toLowerCase().includes(keyword)
      );

      // 4. Heure tardive (22h-6h) = plus probable urgence
      const currentHour = new Date().getHours();
      const isNightTime = currentHour >= 22 || currentHour <= 6;

      // 5. Détection mobile (urgences plus fréquentes sur mobile)
      const isMobile = window.innerWidth <= 768;

      return isEmergencyPath || hasUrgencyParam || isFromEmergencySearch ||
             (isNightTime && isMobile && currentPath !== '/');
    };

    setIsEmergencyMode(detectEmergency());

    // Réevaluer si changement de page
    const handleRouteChange = () => {
      setIsEmergencyMode(detectEmergency());
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return { isEmergencyMode };
}