import { Metadata } from 'next';
import { BASE_URL, COMPANY, CONTACT } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Mentions légales | H-Sèchement',
  description: `Mentions légales et informations d'éditeur de ${COMPANY.name}.`,
  alternates: { canonical: `${BASE_URL}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
          Mentions légales
        </h1>

        <div className="space-y-8 text-corporate-gray">
          <div>
            <h2 className="text-xl font-bold text-corporate-dark mb-2">Éditeur du site</h2>
            <p>
              {COMPANY.name}<br />
              {CONTACT.address}<br />
              Tél. <span className="numeric">{CONTACT.phone}</span><br />
              Email: {CONTACT.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-corporate-dark mb-2">Direction de la publication</h2>
            <p>{COMPANY.name}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-corporate-dark mb-2">Hébergement</h2>
            <p>Hébergement et déploiement via plateforme cloud (CDN).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-corporate-dark mb-2">Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, visuels, logos) est la propriété de {COMPANY.name} ou de ses
              partenaires et ne peut être reproduit sans autorisation.
            </p>
          </div>

          <div className="text-sm text-corporate-gray">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-CH')}
          </div>
        </div>
      </div>
    </section>
  );
}

