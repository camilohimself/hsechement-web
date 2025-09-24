import { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Plan du site | H-Sèchement',
  description: 'Plan du site H-Sèchement – navigation et structure des pages.',
  alternates: { canonical: `${BASE_URL}/plan-site` },
};

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/urgence-degat-eau', label: 'Urgence dégât d\'eau' },
  { href: '/entreprise', label: 'Entreprise' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/confidentialite', label: 'Confidentialité' },
];

export default function PlanSitePage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">Plan du site</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-corporate-gray">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-hsechement-orange transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

