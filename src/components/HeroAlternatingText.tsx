'use client';

import { useState, useEffect } from 'react';

interface HeroMessage {
  highlight: string;
  subtitle: string;
  icon?: string;
}

export default function HeroAlternatingText() {
  const messages: HeroMessage[] = [
    {
      highlight: "Dégât d'eau en urgence ?",
      subtitle: "Intervention 30 min • 24h/7j",
      icon: "AlertTriangle"
    },
    {
      highlight: "Assèchement professionnel",
      subtitle: "Agréé assurances Suisse romande",
      icon: "Award"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Change text after fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        // Fade in
        setIsVisible(true);
      }, 500); // Half of transition duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  const currentMessage = messages[currentIndex];

  return (
    <div className="min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-hsechement-cta-red block mb-3" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
          }}>
            {currentMessage.highlight}
          </span>
          <span className="text-white block" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
          }}>
            {currentMessage.subtitle}
          </span>
        </h1>
      </div>
    </div>
  );
}