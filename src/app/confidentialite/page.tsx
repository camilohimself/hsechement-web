import { Metadata } from 'next';
import { BASE_URL, COMPANY, CONTACT } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | H-Sèchement',
  description: `Politique de confidentialité et données personnelles de ${COMPANY.name}.`,
  alternates: { canonical: `${BASE_URL}/confidentialite` },
};

export default function ConfidentialitePage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
          Politique de confidentialité
        </h1>

        <div className="prose max-w-none text-corporate-gray">
          <p>
            Nous attachons une grande importance à la protection de vos données
            personnelles. Cette page explique quelles données sont collectées,
            dans quel but et vos droits.
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-2">Données collectées</h2>
          <ul className="list-disc pl-6">
            <li>Données de contact transmises via formulaires (nom, email, téléphone).</li>
            <li>Statistiques anonymisées de fréquentation (via Google Analytics 4 si activé).</li>
          </ul>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-2">Finalités</h2>
          <ul className="list-disc pl-6">
            <li>Répondre à vos demandes et vous recontacter.</li>
            <li>Améliorer le site et mesurer son audience.</li>
          </ul>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-2">Conservation</h2>
          <p>Les données sont conservées le temps nécessaire au traitement de votre demande.</p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-2">Vos droits</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos
            données. Contact: {CONTACT.email}
          </p>

          <h2 className="text-xl font-bold text-corporate-dark mt-8 mb-2">Cookies / Analytics</h2>
          <p>
            Google Analytics 4 n’est activé que si un identifiant de mesure est fourni
            et après acceptation des cookies si un bandeau de consentement est en place.
          </p>

          <p className="text-sm mt-6">Dernière mise à jour: {new Date().toLocaleDateString('fr-CH')}</p>
        </div>
      </div>
    </section>
  );
}

