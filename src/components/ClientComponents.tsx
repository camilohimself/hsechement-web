'use client';

import { useState, useEffect } from 'react';
import { useEmergencyMode } from '@/hooks/useEmergencyMode';
import EmergencyOverlay from '@/components/EmergencyOverlay';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import PhoneSticky from '@/components/PhoneSticky';

export default function ClientComponents() {
  const { isEmergencyMode } = useEmergencyMode();
  const [showEmergencyOverlay, setShowEmergencyOverlay] = useState(false);

  // Auto-show emergency overlay if detected
  useEffect(() => {
    if (isEmergencyMode) {
      const timer = setTimeout(() => {
        setShowEmergencyOverlay(true);
      }, 2000); // Attendre 2s pour que l'utilisateur s'oriente

      return () => clearTimeout(timer);
    }
  }, [isEmergencyMode]);

  return (
    <>
      {/* Mode urgence overlay */}
      <EmergencyOverlay
        isVisible={showEmergencyOverlay}
        onClose={() => setShowEmergencyOverlay(false)}
      />

      {/* WhatsApp flottant (sauf si mode urgence actif) */}
      {!showEmergencyOverlay && <WhatsAppFloat />}

      {/* CTA téléphone sticky (sauf si mode urgence actif) */}
      {!showEmergencyOverlay && <PhoneSticky />}
    </>
  );
}