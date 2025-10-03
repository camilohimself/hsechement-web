import { Metadata } from 'next';
import { CONTACT, BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'URGENCE Dégât d\'Eau 24h/7j | Intervention 30min Suisse romande',
  description: 'URGENCE dégât d\'eau ? Appelez maintenant ! Intervention en 30 minutes, 24h/7j en Suisse romande. Service professionnel agréé assurances.',
  openGraph: {
    title: 'URGENCE Dégât d\'Eau | Intervention Immédiate 24h/7j',
    description: 'Dégât d\'eau urgent ? Intervention en 30 minutes, 24h/7j. Service professionnel en Suisse romande, agréé assurances.',
    url: `${BASE_URL}/amp/urgence-degat-eau`,
  },
  alternates: {
    canonical: `${BASE_URL}/urgence-degat-eau`,
  },
  other: {
    'amp-enabled': 'true'
  }
};

export default function AmpUrgenceDegatEauPage() {
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
    .cta-button:hover { transform: scale(1.05); }
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
    .urgency-types {
      background: white;
      color: #333;
      padding: 30px;
    }
    .types-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 20px 0;
    }
    .type-card {
      border: 2px solid #dc2626;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
    }
    .type-icon { font-size: 3rem; margin-bottom: 15px; }
    .type-title { font-weight: bold; margin-bottom: 10px; color: #dc2626; }
    .footer-cta {
      background: #dc2626;
      color: white;
      padding: 30px;
      text-align: center;
    }
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
        <link rel="canonical" href={`${BASE_URL}/urgence-degat-eau`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "H-Séchement - Service d'Urgence Dégât d'Eau",
            "url": `${BASE_URL}/urgence-degat-eau`,
            "telephone": CONTACT.emergencyPhone,
            "availableChannel": {
              "@type": "ServiceChannel",
              "availableLanguage": "French",
              "serviceType": "Emergency water damage intervention",
              "serviceLocation": {
                "@type": "Place",
                "name": "Suisse romande"
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "Suisse romande"
            },
            "serviceType": "Emergency water damage drying and restoration",
            "provider": {
              "@type": "LocalBusiness",
              "name": "H-Séchement Sàrl",
              "telephone": CONTACT.emergencyPhone
            }
          })
        }} />
      </head>
      <body>
        {/* Header d'urgence */}
        <header className="emergency-header">
          <div className="emergency-icon">🚨</div>
          <h1 className="emergency-title">Urgence Dégât d'Eau</h1>
          <p className="emergency-subtitle">
            Intervention en 30 minutes • 24h/7j • Suisse romande
          </p>

          <div style={{ margin: '30px 0' }}>
            <a
              href={`tel:${CONTACT.emergencyPhone}`}
              className="cta-button"
              aria-label={`Appeler d'urgence au ${CONTACT.emergencyPhone}`}
            >
              📞 APPELER MAINTENANT
            </a>
            <div className="phone-number">{CONTACT.emergencyPhone}</div>
          </div>

          <div className="benefits">
            <div className="benefit">
              <div className="benefit-icon">⚡</div>
              <div className="benefit-text">Intervention 30min</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🛠️</div>
              <div className="benefit-text">Équipe professionnelle</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">✅</div>
              <div className="benefit-text">Agréé assurances</div>
            </div>
          </div>
        </header>

        {/* Types d'urgences */}
        <section className="urgency-types">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '30px' }}>
            Types d'Urgences que nous traitons
          </h2>

          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">💧</div>
              <h3 className="type-title">Fuite d'eau majeure</h3>
              <p>Canalisation percée, robinet cassé</p>
            </div>
            <div className="type-card">
              <div className="type-icon">🏠</div>
              <h3 className="type-title">Inondation domicile</h3>
              <p>Appartement, maison inondée</p>
            </div>
            <div className="type-card">
              <div className="type-icon">🔧</div>
              <h3 className="type-title">Dégât machines</h3>
              <p>Lave-linge, lave-vaisselle</p>
            </div>
            <div className="type-card">
              <div className="type-icon">🌧️</div>
              <h3 className="type-title">Infiltration toit</h3>
              <p>Toit endommagé, cave inondée</p>
            </div>
            <div className="type-card">
              <div className="type-icon">🚰</div>
              <h3 className="type-title">Canalisation bouchée</h3>
              <p>Refoulement, évacuation bloquée</p>
            </div>
            <div className="type-card">
              <div className="type-icon">❄️</div>
              <h3 className="type-title">Gel des conduites</h3>
              <p>Tuyaux gelés, éclatement</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <footer className="footer-cta">
          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Une urgence ? N'attendez pas !
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Chaque minute compte lors d'un dégât d'eau.
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
          aria-label="Appel d'urgence"
        >
          📞 URGENCE
        </a>
      </body>
    </html>
  );
}