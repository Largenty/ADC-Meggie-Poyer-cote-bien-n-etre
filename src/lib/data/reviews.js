// ============================================================
//  AVIS CLIENTS (carrousel page d'accueil)
//  ⚠️ Éditable depuis /admin (Sveltia CMS) → `content/reviews.json`.
//  quote : entourez un mot de <em>…</em> pour le mettre en valeur.
//  ⚠️ N'affichez que de VRAIS avis (les faux témoignages sont
//     juridiquement risqués).
// ============================================================

import data from '../../../content/reviews.json';

export const reviews = data.items;
