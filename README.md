# 🚨 H-SÉCHEMENT - Site Next.js

Site web optimisé pour H-Séchement, spécialiste de l'assèchement d'urgence en Suisse romande.

## 🎯 Objectifs du projet

### Performance
- **< 2 secondes de chargement** (vs 11s du site actuel)
- **Optimisations Next.js 15** avec SSR et optimizations images
- **Critical CSS inline** et fonts preload

### Conversion
- **CTA urgence optimisés** pour desktop (75% traffic)
- **Bouton sticky mobile** pour 25% traffic mobile
- **Numéros téléphone hyper-visibles** partout

### SEO Local
- **7 pages locales dynamiques** pour villes principales
- **Schema markup LocalBusiness** pour chaque ville
- **Optimisation mots-clés** "assèchement urgence [ville]"

## 🚀 Technologies utilisées

- **Next.js 15** avec App Router
- **TypeScript** pour la robustesse
- **Tailwind CSS** pour le design system
- **Lucide React** pour les icônes
- **Schema.org** pour le SEO

## 📱 Stratégie CTA

### Desktop (75% du trafic)
- CTA héro XXL sur homepage
- Bouton téléphone visible dans header
- CTA sections sur toutes les pages

### Mobile (25% du trafic)
- Bouton sticky "APPEL URGENCE" rouge
- Header avec téléphone accessible
- CTA adaptés à la taille d'écran

## 🗺️ Pages créées

### Pages principales
- `/` - Homepage avec CTA urgence optimisé
- `/services` - Services détaillés avec boutons visibles
- `/contact` - Page contact avec téléphone XXL visible
- `/entreprise` - À propos de l'entreprise
- `/urgence-degat-eau` - Page urgence avec CTA massifs

### Pages SEO locales (7 villes)
- `/assechement-urgence-lausanne`
- `/assechement-urgence-montreux`
- `/assechement-urgence-nyon`
- `/assechement-urgence-vevey`
- `/assechement-urgence-yverdon-les-bains`
- `/assechement-urgence-morges`
- `/assechement-urgence-renens`

## 🛠️ Installation et développement

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build production
npm run build

# Démarrage production
npm start

# Vérification types TypeScript
npm run type-check
```

## 📊 Tracking Analytics

Tous les CTA téléphone sont trackés avec Google Analytics :
- `phone_call_click` avec catégorie et label
- Distinction desktop/mobile
- Tracking par page pour optimisation

## 🎨 Design System

### Couleurs OSOM
- **Jaune primaire** : `#ffd507` (osom-primary)
- **Teal secondaire** : `#70c1a9` (osom-secondary)
- **Rouge urgence** : `#dc2626` (urgent-red)

### Typographie
- **Font principale** : Cera PRO (avec fallback Arial)
- **Preload** des fonts critiques pour performance

### Components
- `CTAUrgence` - CTA urgence adaptatif (hero/section/sticky)
- `PhoneSticky` - Bouton téléphone collant desktop/mobile
- `LocalSchema` - Schema markup SEO local
- `Header` / `Footer` - Navigation optimisée conversion

## 📈 Optimisations Performance

### Next.js 15
- **App Router** pour meilleur SEO
- **Static Generation** pour pages locales
- **Image Optimization** automatique
- **Code Splitting** par route

### Critical Performance
- **Fonts preload** Cera PRO
- **Critical CSS inline**
- **DNS prefetch** domaines externes
- **Compression gzip/brotli**

### Headers Sécurité
- CSP, HSTS, X-Frame-Options
- Cache headers optimisés
- Preconnect ressources critiques

## 🎯 SEO & Schema

### Métadonnées optimisées
- Titles/descriptions uniques par page
- Open Graph et Twitter Cards
- Canonical URLs
- Geo-tags pour pages locales

### Schema.org
- **Organization** pour l'entreprise
- **LocalBusiness** pour chaque ville
- **Service** pour les prestations
- **Contact** avec numéro d'urgence

## 🚨 Stratégie Urgence

### Page `/urgence-degat-eau`
- **Design rouge alarmant** pour urgence
- **CTA téléphone énormes** et animés
- **Process intervention** en 4 étapes
- **Situations d'urgence** détaillées

### CTA partout
- Header : téléphone visible
- Footer : bloc urgence rouge
- Sticky : bouton flottant mobile/desktop
- Pages : CTA adaptés au contenu

## 🎯 Données et Configuration

### `/src/data/site-config.ts`
Centralise toutes les données :
- Informations contact et entreprise
- Services avec caractéristiques
- Zones géographiques couvertes
- Témoignages clients
- Configuration SEO

### Types TypeScript
Interface complètes dans `/src/types/` pour :
- Informations entreprise
- Services et testimonials
- Schema markup SEO
- Props des composants

## 📞 Numéros de téléphone

**⚠️ IMPORTANT** : Remplacer `+41791234567` par le vrai numéro dans :
- `/src/data/site-config.ts` (CONTACT.phone et emergencyPhone)
- Tous les liens `tel:` dans les composants
- Variables d'environnement

## 🚀 Déploiement

1. **Configuration environnement**
   ```bash
   cp .env.example .env.local
   # Remplir les variables (téléphone, GA, etc.)
   ```

2. **Build et test**
   ```bash
   npm run build
   npm start
   ```

3. **Déploiement** (Vercel/Netlify recommandés)
   - Automatic deployments depuis git
   - Performance optimale Next.js
   - CDN global intégré

## 📊 Monitoring

### Performance
- **Core Web Vitals** < 2s LCP
- **First Contentful Paint** optimisé
- **Cumulative Layout Shift** minimal

### Analytics
- **Google Analytics 4** configurable
- **Events tracking** sur tous les CTA
- **Conversion tracking** téléphone

### SEO
- **Search Console** monitoring
- **Local SEO** tracking positions
- **Schema validation** structured data

---

## 🎯 Différences vs site actuel

| Métrique | Site actuel (Wix) | Nouveau site (Next.js) |
|----------|-------------------|------------------------|
| **Temps chargement** | 11.0s | < 2.0s |
| **CTA téléphone** | Peu visibles | XXL et partout |
| **Pages locales SEO** | 0 | 7 optimisées |
| **Mobile UX** | Pas optimisé | Sticky CTA |
| **Schema markup** | Basique | Complet LocalBusiness |
| **Tracking conversion** | Limité | GA4 complet |

**Objectif conversion** : Passer de 0.84% à 5%+ 🎯