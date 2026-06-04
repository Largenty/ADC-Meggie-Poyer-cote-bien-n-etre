# Côté Bien N'être — site vitrine

Site vitrine de **Côté Bien N'être** (Meggie Poyers), praticienne en shiatsu, massage bien-être, massage femme enceinte et **Technique MEBP®** (massage pour enfants à besoins particuliers) à Brie-Comte-Robert (77).

Construit avec **SvelteKit 2 + Svelte 5**, généré en site **100 % statique** (`adapter-static`).

## Démarrer

```bash
npm install
npm run dev        # serveur de développement (http://localhost:5173)
npm run build      # build de production statique → dossier build/
npm run preview    # prévisualise le build de production
```

## Structure

```
src/
  lib/
    components/    # composants réutilisables (Header, Footer, Seo, Button, etc.)
    data/          # ← CONTENU ÉDITABLE (textes, prix, avis, FAQ, coordonnées)
    actions.js     # animations (reveal au scroll, parallaxe)
  routes/          # pages du site (une par dossier)
  app.css          # design system (tokens) + styles globaux
  app.html         # gabarit HTML racine
static/
  images/          # ← PHOTOS (déposer les visuels ici)
  robots.txt, logo-cbn.png
```

## Modifier le contenu (sans toucher au code)

Tout le contenu se trouve dans **`src/lib/data/`**, en fichiers `.js` commentés :

| Fichier | Contenu |
|---|---|
| `site.js` | nom, téléphone, e-mail, adresse, zone, **lien de réservation Resalib**, infos SEO |
| `nav.js` | liens du menu |
| `prestations.js` | **source unique** : tarifs (page Tarifs) + blocs (page Prestations) |
| `reviews.js` | avis clients |
| `faq.js` | foire aux questions |
| `steps.js`, `values.js`, `audiences.js` | contenus des sections |

Les **photos** se déposent dans `static/images/` et se référencent via leur chemin (ex. `/images/hero/accueil.jpg`) depuis les fichiers data.

> Des emplacements `[À compléter : …]` signalent les informations à fournir par la praticienne (statut juridique, hébergeur, certains prix, précisions soins).

## SEO & accessibilité

- Données structurées JSON-LD (`LocalBusiness`, `FAQPage`), `sitemap.xml`, `robots.txt`, balises canonical + Open Graph par page (composant `Seo`).
- Contrastes, focus visibles, formulaire accessible, navigation clavier (objectif RGAA — textes AAA, interface AA).

L'URL canonique du site est définie dans `src/lib/data/site.js` (`url`).

## Déploiement

Site statique : déployable sur tout hébergeur de fichiers statiques. Un `vercel.json` est fourni pour un déploiement direct sur Vercel (build `npm run build`, dossier `build/`, URLs propres).
