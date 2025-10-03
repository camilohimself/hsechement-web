import { Metadata } from 'next';
import { CONTACT, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'URGENCE Assèchement Morges 24h/7j | Intervention 30min | H-Séchement',
  description: 'URGENCE dégât d\'eau Morges ? Assèchement professionnel en 30 minutes, 24h/7j. Service agréé assurances, centre-ville, lac Léman, vignobles.',
  openGraph: {
    title: 'Assèchement Urgence Morges | Intervention 30min 24h/7j',
    description: 'Dégât d\'eau urgent à Morges ? Intervention assèchement en 30 minutes. Agréé assurances, service 24h/7j.',
    url: `${BASE_URL}/amp/assechement-urgence-morges`,
  },
  alternates: {
    canonical: `${BASE_URL}/assechement-urgence-morges`,
  },
  other: {
    'amp-enabled': 'true'
  }
};

export default function AmpAssechementMorgesPage() {
  const ampCSS = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    .emergency-header {
      background: linear-gradient(135deg, #dc2626, #b91c1c);
      color: white;
      padding: 20px;
      text-align: center;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .city-badge {
      background: rgba(255,255,255,0.2);
      padding: 8px 20px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .emergency-icon { font-size: 4rem; margin: 20px 0; animation: blink 1s infinite; }
    @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0.3; } }
    .emergency-title {
      font-size: 2.5rem;
      font-weight: 900;
      margin: 20px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .emergency-subtitle { font-size: 1.2rem; margin: 15px 0; font-weight: bold; }
    .cta-button {
      background: white;
      color: #dc2626;
      padding: 20px 40px;
      border-radius: 50px;
      font-weight: 900;
      font-size: 1.3rem;
      text-decoration: none;
      display: inline-block;
      margin: 20px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      transition: transform 0.2s;
    }
    .phone-number { font-size: 1.5rem; font-weight: bold; margin: 10px; }
    .benefits {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 30px 0;
    }
    .benefit {
      background: rgba(255,255,255,0.1);
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }
    .benefit-icon { font-size: 2rem; margin-bottom: 10px; }
    .benefit-text { font-weight: bold; }
    .local-section {
      background: white;
      color: #333;
      padding: 30px;
    }
    .zones-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    .zone-card {
      border: 2px solid #dc2626;
      border-radius: 10px;
      padding: 15px;
      text-align: center;
      background: #f9f9f9;
    }
    .zone-name { font-weight: bold; color: #dc2626; margin-bottom: 5px; }
    .zone-time { font-size: 0.9rem; color: #666; }
    .testimonials {
      background: #f8f9fa;
      padding: 30px;
    }
    .testimonial {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin: 15px 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .testimonial-text { font-style: italic; margin-bottom: 10px; }
    .testimonial-author { font-weight: bold; color: #dc2626; }
    .fixed-call {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      background: #dc2626;
      color: white;
      padding: 15px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      box-shadow: 0 4px 20px rgba(220, 38, 38, 0.5);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 4px 20px rgba(220, 38, 38, 0.5); }
      50% { box-shadow: 0 4px 30px rgba(220, 38, 38, 0.8); }
      100% { box-shadow: 0 4px 20px rgba(220, 38, 38, 0.5); }
    }
    @media (max-width: 768px) {
      .emergency-title { font-size: 1.8rem; }
      .cta-button { padding: 15px 25px; font-size: 1.1rem; }
      .phone-number { font-size: 1.2rem; }
    }
  `;

  return (
    <html amp="" lang="fr-CH">
      <head>
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <style amp-custom dangerouslySetInnerHTML={{ __html: ampCSS }} />
        <style amp-boilerplate>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        <noscript>
          <style amp-boilerplate>{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
        </noscript>
        <link rel="canonical" href={`${BASE_URL}/assechement-urgence-morges`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "H-Séchement - Assèchement Urgence Morges",
            "url": `${BASE_URL}/assechement-urgence-morges`,
            "telephone": CONTACT.emergencyPhone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Morges",
              "addressRegion": "Vaud",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.5115",
              "longitude": "6.4985"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Morges et région"
            },
            "serviceType": "Assèchement urgence dégât d'eau",
            "openingHours": "24/7",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services assèchement Morges",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intervention urgence dégât d'eau Morges"
                  }
                }
              ]
            }
          })
        }} />
      </head>
      <body>
        {/* Header d'urgence Morges */}
        <header className="emergency-header">
          <div className="city-badge">📍 MORGES & RÉGION</div>
          <div className="emergency-icon">🚨</div>
          <h1 className="emergency-title">Assèchement Urgence Morges</h1>
          <p className="emergency-subtitle">
            Intervention en 30 minutes • 24h/7j • Centre, Lac Léman, Vignobles
          </p>

          <div style={{ margin: '30px 0' }}>
            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              className="cta-button"
              aria-label={`Appeler d'urgence au ${CONTACT.emergencyPhone}`}
            >
              📞 MORGES - APPEL URGENT
            </a>
            <div className="phone-number">{CONTACT.emergencyPhone}</div>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-text">Intervention 30min</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🏛️</div>
              <div className="benefit-text">Patrimoine protégé</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">✅</div>
              <div className="benefit-text">Agréé assurances</div>
            </div>
          </div>
        </header>

        {/* Zones d'intervention Morges */}
        <section className="local-section">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '30px' }}>
            Zones d'intervention à Morges
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1rem' }}>
            Service d'assèchement d'urgence dans toute la région morgienne
          </p>

          <div className="zones-grid">
            <div className="zone-card">
              <div className="zone-name">Centre-ville Morges</div>
              <div className="zone-time">⏱️ 15-20 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Port de Morges</div>
              <div className="zone-time">⏱️ 18-23 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Tolochenaz</div>
              <div className="zone-time">⏱️ 20-25 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Saint-Prex</div>
              <div className="zone-time">⏱️ 25-30 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Denens</div>
              <div className="zone-time">⏱️ 20-25 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Colombier VD</div>
              <div className="zone-time">⏱️ 22-27 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Préverenges</div>
              <div className="zone-time">⏱️ 15-20 min</div>
            </div>
            <div className="zone-card">
              <div className="zone-name">Echichens</div>
              <div className="zone-time">⏱️ 25-30 min</div>
            </div>
          </div>
        </section>

        {/* Spécificité Morges */}
        <section style={{ background: '#f0f9ff', padding: '30px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '30px' }}>
            Expertise Morges & Lac Léman
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#dc2626', fontWeight: 'bold', marginBottom: '10px' }}>🏛️ Bâtiments historiques</h3>
              <p>Expertise spéciale pour les maisons anciennes du centre de Morges, techniques adaptées au patrimoine.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#dc2626', fontWeight: 'bold', marginBottom: '10px' }}>🌊 Proximité lac</h3>
              <p>Interventions spécialisées pour les propriétés près du lac Léman, problématiques d'humidité spécifiques.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#dc2626', fontWeight: 'bold', marginBottom: '10px' }}>🍇 Zone viticole</h3>
              <p>Assèchement caves vinicoles, locaux techniques vignobles, expertise agriculture spécialisée.</p>
            </div>
          </div>
        </section>

        {/* Témoignages Morges */}
        <section className="testimonials">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '30px' }}>
            Nos interventions à Morges
          </h2>

          <div className="testimonial">
            <div className="testimonial-text">
              "Villa ancienne inondée près du port. H-Séchement a su traiter le problème avec respect du patrimoine. Excellente équipe."
            </div>
            <div className="testimonial-author">Jean-Claude R. - Port de Morges</div>
          </div>

          <div className="testimonial">
            <div className="testimonial-text">
              "Cave vinicole inondée à Tolochenaz. Intervention rapide et matériel adapté. Nos cuves ont été sauvées !"
            </div>
            <div className="testimonial-author">Domaine des Crêtes - Tolochenaz</div>
          </div>

          <div className="testimonial">
            <div className="testimonial-text">
              "Dégât d'eau majeur un samedi soir. Équipe H-Séchement sur place en 17 minutes. Service remarquable."
            </div>
            <div className="testimonial-author">famille Dubois - Saint-Prex</div>
          </div>
        </section>

        {/* CTA Final */}
        <footer style={{ background: '#dc2626', color: 'white', padding: '30px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Urgence à Morges ? Appelez maintenant !
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Intervention en 30 minutes dans toute la région morgienne
          </p>
          <a
            href={`tel:${CONTACT.emergencyPhone}`}
            className="cta-button"
            style={{ background: 'white', color: '#dc2626' }}
          >
            📞 {CONTACT.emergencyPhone}
          </a>
        </footer>

        {/* Bouton d'appel fixe */}
        <a
          href={`tel:${CONTACT.emergencyPhone}`}
          className="fixed-call"
          aria-label="Appel d'urgence Morges"
        >
          📞 MORGES
        </a>
      </body>
    </html>
  );
}