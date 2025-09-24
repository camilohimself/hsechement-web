import { Metadata } from 'next';
import { BASE_URL } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'FAQ – Questions fréquentes | H-Sèchement',
  description:
    "Réponses aux questions fréquentes sur l'assèchement d'urgence, les dégâts d'eau, l'intervention 24h/7j et la prise en charge assurance.",
  alternates: { canonical: `${BASE_URL}/faq` },
};

const faqs = [
  {
    q: "Dans combien de temps pouvez-vous intervenir ?",
    a: "En cas d'urgence, nous intervenons en 30 minutes maximum partout en Suisse romande. Notre service d'urgence est disponible 24h/24, 7j/7.",
  },
  {
    q: "Travaillez-vous avec les assurances ?",
    a: "Oui, nous travaillons directement avec toutes les compagnies d'assurance suisses. Nous nous occupons des démarches administratives et fournissons un rapport détaillé.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui, l'évaluation et le devis sont entièrement gratuits et sans engagement. Nous proposons la meilleure solution en fonction de la situation.",
  },
  {
    q: "Couvrez-vous toute la Suisse romande ?",
    a: "Oui, nous couvrons tout l'Arc Lémanique et la Suisse romande, avec des équipes basées dans les principales villes pour une intervention rapide.",
  },
  {
    q: "Quels équipements utilisez-vous ?",
    a: "Assèchement périphérique, déshumidificateurs industriels, ventilateurs, panneaux radiants infrarouges, caméras thermiques, détecteurs d'humidité, etc.",
  },
  {
    q: "Pouvez-vous traiter les moisissures ?",
    a: "Oui, nous réalisons la décontamination, l'élimination des moisissures et la neutralisation des odeurs, puis assurons la remise en état si nécessaire.",
  },
];

export default function FAQPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-dark mb-4">
            Questions fréquentes
          </h1>
          <p className="text-xl text-corporate-gray">
            Tout savoir sur l&apos;assèchement d&apos;urgence et nos interventions 24h/7j
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow">
              <h2 className="text-lg md:text-xl font-bold text-corporate-dark mb-2">
                {item.q}
              </h2>
              <p className="text-corporate-gray">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

