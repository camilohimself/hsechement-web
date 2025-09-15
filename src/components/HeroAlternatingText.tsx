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
      highlight: "Urgence dégât d'eau",
      subtitle: "en Suisse romande ?",
      icon: "🚨"
    },
    {
      highlight: "Le pro de l'assèchement",
      subtitle: "et assainissement en Suisse romande",
      icon: "🏆"
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
    <div className="min-h-[140px] flex flex-col justify-center">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
        }`}
      >
        {currentMessage.icon && (
          <span className="text-5xl mb-4 inline-block animate-bounce">
            {currentMessage.icon}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-dark mb-6">
          <span className="text-hsechement-red block">
            {currentMessage.highlight}
          </span>
          <span className="text-hsechement-orange block mt-2">
            {currentMessage.subtitle}
          </span>
        </h1>
      </div>
    </div>
  );
}