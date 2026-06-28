// ============================================================
//  INFOS GÉNÉRALES DU SITE
//  Modifiez ici les coordonnées : elles sont utilisées partout
//  (en-tête, pied de page, page contact…).
// ============================================================

export const site = {
  name: "Côté Bien N'être",
  baseline: "Shiatsu, massage bien-être, femme enceinte et Technique MEBP®. Vous réservez du temps, j'adapte le soin.",

  // Téléphone : `display` = affiché à l'écran, `tel` = format pour le lien cliquable
  phone: { display: '07 81 13 03 30', tel: '+33781130330' },

  email: 'cotebiennetre@gmail.com',

  address: {
    street: '6 Passage du Roi',
    city: '77170 Brie-Comte-Robert',
  },

  // Zone d'intervention (affichée en pied de page et page contact)
  zone: 'Brie-Comte-Robert et 20 km autour',

  // Lien de réservation en ligne (Resalib) — modifiez-le ici, il est
  // utilisé partout sur le site.
  booking: 'https://www.resalib.fr/praticien/27195-cote-bien-n-etre-meggie-poyers-praticien-shiatsu-brie-comte-robert',

  // --- SEO / données structurées ---
  // URL où le site est RÉELLEMENT servi (sans / final). Sert aux balises
  // canonical, Open Graph (aperçus de lien) et au sitemap.
  // ⚠️ Pour l'instant le site est déployé sur Vercel ; cotebiennetre.fr pointe
  //    encore sur l'ancien Wix. On utilise donc l'URL Vercel, sinon l'og:image
  //    (aperçu WhatsApp/Facebook) renvoie un 404.
  // ➜ À REPASSER sur 'https://www.cotebiennetre.fr' (+ robots.txt) une fois le
  //    domaine branché sur Vercel.
  url: 'https://adc-meggie-poyer-cote-bien-n-etre.vercel.app',
  // Coordonnées GPS du cabinet (Brie-Comte-Robert). [À affiner si besoin]
  geo: { lat: 48.6925, lng: 2.6097 },
  // Avis vérifiés Resalib (note moyenne et nombre).
  rating: { value: 5, count: 31 },
  // Fourchette de prix (schema.org) : 35–70 € → « €€ »
  priceRange: '€€',
  // Profils externes (Resalib, Google, réseaux…) pour sameAs.
  // [À compléter : Google Business, Instagram/Facebook s'ils existent]
  profiles: [
    'https://www.resalib.fr/praticien/27195-cote-bien-n-etre-meggie-poyers-praticien-shiatsu-brie-comte-robert',
  ],
};
